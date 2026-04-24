import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

const DEFAULT_UP = new THREE.Vector3(0, 1, 0);
const DEFAULT_FOCUS_DIRECTIONS = {
  star: new THREE.Vector3(0.72, 0.28, 0.64).normalize(),
  planet: new THREE.Vector3(0.72, 0.22, 0.66).normalize(),
  moon: new THREE.Vector3(0.54, 0.2, 0.82).normalize(),
  belt: new THREE.Vector3(0.78, 0.16, 0.6).normalize(),
  deepSpace: new THREE.Vector3(-1.0, 0.3, 0.4).normalize(),
};

const SPECIAL_FOCUS_DIRECTIONS = {
  saturn: new THREE.Vector3(-0.42, 0.1, 0.9).normalize(),
  uranus: new THREE.Vector3(0.98, 0.16, 0.12).normalize(),
  earth: new THREE.Vector3(-0.36, 0.18, 0.92).normalize(),
  jupiter: new THREE.Vector3(-0.3, 0.14, 0.94).normalize()
};

const DEFAULT_FOCUS_FRAME = Object.freeze({
  x: 0.18,
  y: 0,
  fov: 42,
  aspect: 16 / 9,
});

const tmpEuler = new THREE.Euler(0, 0, 0, 'XYZ');
const tmpQuat = new THREE.Quaternion();
const tmpVecA = new THREE.Vector3();
const tmpVecB = new THREE.Vector3();
const tmpVecC = new THREE.Vector3();
const tmpVecD = new THREE.Vector3();
const tmpVecE = new THREE.Vector3();

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function saturate(value) {
  return clamp(value, 0, 1);
}

export function smoothstep(edge0, edge1, x) {
  const t = saturate((x - edge0) / (edge1 - edge0 || 1));
  return t * t * (3 - 2 * t);
}

export function easeInOutCubic(t) {
  const x = saturate(t);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function easeOutCubic(t) {
  const x = saturate(t);
  return 1 - Math.pow(1 - x, 3);
}

export function easeOutQuart(t) {
  const x = saturate(t);
  return 1 - Math.pow(1 - x, 4);
}

export function wrapAngle(angle) {
  let value = angle % TAU;
  if (value < -Math.PI) value += TAU;
  if (value > Math.PI) value -= TAU;
  return value;
}

export function shortestAngleDelta(from, to) {
  return wrapAngle(to - from);
}

export function lerpAngle(from, to, t) {
  return from + shortestAngleDelta(from, to) * saturate(t);
}

export function isVectorLike(value) {
  return !!value && typeof value === 'object' && (
    value.isVector3 ||
    Array.isArray(value) ||
    typeof value.x === 'number'
  );
}

export function copyVectorLike(out, value, fallback = 0) {
  if (value && value.isVector3) {
    return out.copy(value);
  }

  if (Array.isArray(value)) {
    return out.set(
      value[0] ?? fallback,
      value[1] ?? fallback,
      value[2] ?? fallback,
    );
  }

  if (value && typeof value.x === 'number') {
    return out.set(value.x, value.y ?? fallback, value.z ?? fallback);
  }

  if (typeof value === 'number') {
    return out.set(value, value, value);
  }

  return out.set(fallback, fallback, fallback);
}

export function copyPose(out, source) {
  if (!out || !source) {
    return out;
  }

  if (source.position) {
    copyVectorLike(out.position, source.position, 0);
  }
  if (source.target) {
    copyVectorLike(out.target, source.target, 0);
  }
  if (source.up) {
    copyVectorLike(out.up, source.up, 0);
  }

  out.fov = source.fov ?? out.fov ?? null;
  out.distance = source.distance ?? out.distance ?? 0;
  out.followTargetId = source.followTargetId ?? out.followTargetId ?? null;
  out.mode = source.mode ?? out.mode ?? 'free';
  out.keepFollowing = source.keepFollowing ?? out.keepFollowing ?? false;
  return out;
}

export function createPose() {
  return {
    position: new THREE.Vector3(),
    target: new THREE.Vector3(),
    up: new THREE.Vector3(0, 1, 0),
    fov: null,
    distance: 0,
    followTargetId: null,
    mode: 'free',
    keepFollowing: false,
  };
}

export function createCameraPose() {
  return createPose();
}

function getRotationBase(node, axis) {
  if (!node || !node.rotation) {
    return 0;
  }

  if (!node.userData) {
    node.userData = {};
  }

  const key = `__animationBase${axis.toUpperCase()}`;
  if (node.userData[key] === undefined) {
    node.userData[key] = node.rotation[axis] ?? 0;
  }
  return node.userData[key];
}

export function getOrbitAngle(config = {}, timeSeconds = 0) {
  return (config.orbitPhase ?? 0) + (config.orbitSpeed ?? 0) * timeSeconds;
}

export function resolveOrbitPlaneQuaternion(config = {}, out = tmpQuat) {
  const inclination = config.orbitInclination ?? config.orbitTilt ?? 0;
  const longitude = config.orbitLongitude ?? config.orbitAscendingNode ?? 0;
  const roll = config.orbitPlaneRotation ?? 0;
  tmpEuler.set(inclination, longitude, roll, 'XYZ');
  return out.setFromEuler(tmpEuler);
}

export function computeOrbitPosition(out, config = {}, timeSeconds = 0, parentPosition = null) {
  const radius = config.orbitRadius ?? config.outerRadius ?? 0;
  const angle = getOrbitAngle(config, timeSeconds);
  out.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
  resolveOrbitPlaneQuaternion(config, tmpQuat);
  out.applyQuaternion(tmpQuat);
  if (parentPosition) {
    out.add(parentPosition);
  }
  return out;
}

export function resolveBodyPosition(out, body, context = {}) {
  if (!body) {
    return out.set(0, 0, 0);
  }

  const source = body.object3d || body.mesh || body.node || body.bodyMesh || body;

  if (source && source.isObject3D) {
    source.updateMatrixWorld(true);
    source.getWorldPosition(out);
    return out;
  }

  if (body.worldPosition && body.worldPosition.isVector3) {
    return out.copy(body.worldPosition);
  }

  if (body.position && body.position.isVector3) {
    return out.copy(body.position);
  }

  if (body.position && Array.isArray(body.position)) {
    return out.set(body.position[0] ?? 0, body.position[1] ?? 0, body.position[2] ?? 0);
  }

  if (body.position && typeof body.position.x === 'number') {
    return out.set(body.position.x, body.position.y ?? 0, body.position.z ?? 0);
  }

  if (context.fallbackPosition) {
    return copyVectorLike(out, context.fallbackPosition, 0);
  }

  return out.set(0, 0, 0);
}

function readRadius(body) {
  if (!body) {
    return 1;
  }

  if (typeof body.displayRadius === 'number') {
    return body.displayRadius;
  }

  if (typeof body.radius === 'number') {
    return body.radius;
  }

  if (typeof body.outerRadius === 'number') {
    return body.outerRadius;
  }

  if (typeof body.orbitRadius === 'number') {
    return Math.max(body.orbitRadius * 0.02, 1);
  }

  return 1;
}

export function getFocusDistance(body, options = {}) {
  const type = body?.type ?? 'planet';
  const baseRadius = Math.max(
    readRadius(body),
    options.minRadius ?? 0,
  );

  const defaultMultiplier = {
    star: 14,
    planet: 9,
    moon: 5,
    belt: 4,
  }[type] ?? 9;

  const multiplier = options.distanceMultiplier
    ?? body?.focusDistanceMultiplier
    ?? defaultMultiplier;

  const distance = baseRadius * multiplier + (options.distanceOffset ?? 0);
  return Math.max(options.minDistance ?? 0.001, distance);
}

export function resolvePreferredFocusDirection(body, context = {}, out = tmpVecA) {
  if (context.viewDirection) {
    return copyVectorLike(out, context.viewDirection, 0).normalize();
  }

  if (!context.deepSpace && body?.focusViewDirection) {
    copyVectorLike(out, body.focusViewDirection, 0).normalize();
    const presetById = body?.id ? SPECIAL_FOCUS_DIRECTIONS[body.id] : null;
    if (presetById && body.id === 'uranus') {
      out.lerp(presetById, 0.68);
    }
    return out.normalize();
  }

  if (context.preserveCurrentView && context.camera && context.target) {
    out.copy(context.camera.position).sub(context.target);
    if (out.lengthSq() > 1e-8) {
      return out.normalize();
    }
  }

  const type = body?.type ?? 'planet';
  const presetById = body?.id ? SPECIAL_FOCUS_DIRECTIONS[body.id] : null;
  const preset = context.deepSpace
    ? DEFAULT_FOCUS_DIRECTIONS.deepSpace
    : presetById ?? DEFAULT_FOCUS_DIRECTIONS[type] ?? DEFAULT_FOCUS_DIRECTIONS.planet;

  if (!context.deepSpace && type !== 'star' && context.sunPosition) {
    resolveBodyPosition(tmpVecD, body, context);
    resolveBodyPosition(tmpVecE, context.sunPosition, {
      fallbackPosition: [0, 0, 0]
    });

    const lightSideDirection = tmpVecE.sub(tmpVecD);
    if (lightSideDirection.lengthSq() > 1e-6) {
      lightSideDirection.normalize();
      out.copy(lightSideDirection).lerp(preset, 0.42);
      return out.normalize();
    }
  }

  return out.copy(preset);
}

function getFocusFrameOffset(body, context = {}) {
  if (context.disableFrameOffset) {
    return null;
  }

  const bodyFrame = body?.focusFrameOffset || null;
  const contextFrame = context.frameOffset || null;
  const mode = context.mode ?? 'focus';
  const shouldFrame = contextFrame || bodyFrame || mode === 'focus' || mode === 'tour';
  if (!shouldFrame) {
    return null;
  }

  return {
    x: context.frameOffsetX ?? contextFrame?.x ?? bodyFrame?.x ?? DEFAULT_FOCUS_FRAME.x,
    y: context.frameOffsetY ?? contextFrame?.y ?? bodyFrame?.y ?? DEFAULT_FOCUS_FRAME.y,
  };
}

function applyFocusFrameOffset(target, direction, distance, body, context = {}) {
  const frame = getFocusFrameOffset(body, context);
  if (!frame || (frame.x === 0 && frame.y === 0)) {
    return target;
  }

  const fov = context.fov ?? body?.focusFov ?? DEFAULT_FOCUS_FRAME.fov;
  const aspect = context.aspect ?? context.camera?.aspect ?? DEFAULT_FOCUS_FRAME.aspect;
  const verticalSpan = Math.tan((fov * DEG2RAD) * 0.5) * distance;
  const horizontalSpan = verticalSpan * aspect;
  const up = copyVectorLike(tmpVecD, context.up || DEFAULT_UP, 0).normalize();
  const right = tmpVecE.copy(direction).negate().cross(up);

  if (right.lengthSq() < 1e-8) {
    right.set(1, 0, 0);
  } else {
    right.normalize();
  }

  target
    .addScaledVector(right, -horizontalSpan * frame.x)
    .addScaledVector(up, -verticalSpan * frame.y);
  return target;
}

export function buildFocusPose(body, context = {}, out = createPose()) {
  const target = out.target;
  resolveBodyPosition(target, body, context);
  if (body?.focusTargetOffset) {
    copyVectorLike(tmpVecB, body.focusTargetOffset, 0);
    target.add(tmpVecB);
  }
  if (context.targetOffset) {
    copyVectorLike(tmpVecB, context.targetOffset, 0);
    target.add(tmpVecB);
  }

  const direction = resolvePreferredFocusDirection(body, {
    ...context,
    target,
  }, tmpVecC);
  const distance = getFocusDistance(body, context);
  applyFocusFrameOffset(target, direction, distance, body, context);
  out.position.copy(target).addScaledVector(direction, distance);
  out.up.copy(context.up || DEFAULT_UP);
  out.distance = distance;
  out.followTargetId = body?.id ?? body?.name ?? null;
  out.mode = context.mode ?? 'focus';
  out.keepFollowing = context.keepFollowing ?? true;
  out.fov = context.fov ?? body?.focusFov ?? DEFAULT_FOCUS_FRAME.fov;
  return out;
}

function getBodyChildren(body) {
  if (!body) {
    return null;
  }

  return body.moons || body.childrenBodies || body.satellites || body.orbitChildren || null;
}

function collectRadiusFromBody(body, cumulativeDistance, result) {
  if (!body) {
    return result;
  }

  const orbitRadius = body.orbitRadius ?? 0;
  const localDistance = cumulativeDistance + orbitRadius;
  const localRadius = Math.max(
    readRadius(body),
    body.outerRadius ?? 0,
  );

  result.maxRadius = Math.max(result.maxRadius, localDistance + localRadius);

  const children = getBodyChildren(body);
  if (Array.isArray(children)) {
    for (let index = 0; index < children.length; index += 1) {
      collectRadiusFromBody(children[index], localDistance, result);
    }
  }

  return result;
}

export function estimateSystemRadius(bodies, fallback = 120) {
  const result = { maxRadius: 0 };

  if (Array.isArray(bodies)) {
    for (let index = 0; index < bodies.length; index += 1) {
      collectRadiusFromBody(bodies[index], 0, result);
    }
  } else if (bodies && typeof bodies === 'object') {
    for (const key of Object.keys(bodies)) {
      collectRadiusFromBody(bodies[key], 0, result);
    }
  }

  return result.maxRadius > 0 ? result.maxRadius : fallback;
}

export const DEFAULT_DEEP_SPACE_VIEW = Object.freeze({
  distanceMultiplier: 1.12,
  heightRatio: 0.3,
  minHeightRatio: 0.26,
  forwardBias: 0.4,
  minForwardBias: 0.36,
  horizontalSign: -1,
  targetShift: -0.6,
  targetLift: 0.06,
  rightAnchorScale: 0.6,
  fov: 27,
  minFov: 27,
  mode: 'deep-space',
});

function resolveDeepSpaceTargetShift(params) {
  const rawShift = params.targetShift ?? DEFAULT_DEEP_SPACE_VIEW.targetShift;
  if (rawShift > 0 && params.rightAnchored !== false) {
    return -rawShift * (params.rightAnchorScale ?? DEFAULT_DEEP_SPACE_VIEW.rightAnchorScale);
  }
  return rawShift;
}

export function buildDeepSpaceViewPose(input = {}, context = {}, out = createPose()) {
  const bounds = input || {};
  const bodies = context.bodies || bounds.bodies || null;
  const systemRadius = Math.max(
    bounds.systemRadius ?? estimateSystemRadius(bodies, context.fallbackRadius ?? 120),
    bounds.radius ?? 0,
    1,
  );

  const sunPosition = resolveBodyPosition(tmpVecD, bounds.sunPosition || bounds.center || context.sunPosition || context.center || null, {
    fallbackPosition: bounds.center || context.center || tmpVecD.set(0, 0, 0),
  });

  const params = {
    ...DEFAULT_DEEP_SPACE_VIEW,
    ...(context.deepSpaceView || {}),
    ...(bounds.deepSpaceView || {}),
  };

  const distance = systemRadius * (params.distanceMultiplier ?? DEFAULT_DEEP_SPACE_VIEW.distanceMultiplier);
  const heightRatio = Math.max(
    Math.abs(params.heightRatio ?? DEFAULT_DEEP_SPACE_VIEW.heightRatio),
    params.minHeightRatio ?? DEFAULT_DEEP_SPACE_VIEW.minHeightRatio,
  );
  const forwardBiasSource = params.forwardBias ?? DEFAULT_DEEP_SPACE_VIEW.forwardBias;
  const forwardBiasSign = Math.sign(forwardBiasSource) || 1;
  const forwardBias = forwardBiasSign * Math.max(
    Math.abs(forwardBiasSource),
    params.minForwardBias ?? DEFAULT_DEEP_SPACE_VIEW.minForwardBias,
  );
  const horizontalSign = params.horizontalSign ?? DEFAULT_DEEP_SPACE_VIEW.horizontalSign;
  const direction = tmpVecE.set(
    horizontalSign,
    heightRatio,
    forwardBias,
  ).normalize();

  out.target.copy(sunPosition);
  out.target.x += systemRadius * resolveDeepSpaceTargetShift(params);
  out.target.y += systemRadius * (params.targetLift ?? DEFAULT_DEEP_SPACE_VIEW.targetLift);
  out.target.z += systemRadius * (params.targetForwardShift ?? 0);
  out.position.copy(out.target).addScaledVector(direction, distance);
  out.up.copy(context.up || DEFAULT_UP);
  out.distance = distance;
  out.fov = Math.max(
    params.fov ?? DEFAULT_DEEP_SPACE_VIEW.fov,
    params.minFov ?? DEFAULT_DEEP_SPACE_VIEW.minFov,
  );
  out.followTargetId = bounds.sunId ?? context.sunId ?? 'Star - Sun';
  out.mode = params.mode ?? 'deep-space';
  out.keepFollowing = false;
  return out;
}

export function normalizeBodyCollection(input) {
  if (!input) {
    return [];
  }

  if (Array.isArray(input)) {
    return input;
  }

  if (input instanceof Map) {
    return Array.from(input.values());
  }

  if (typeof input === 'object') {
    return Object.values(input);
  }

  return [];
}

export default {
  TAU,
  DEG2RAD,
  RAD2DEG,
  clamp,
  lerp,
  saturate,
  smoothstep,
  easeInOutCubic,
  easeOutCubic,
  easeOutQuart,
  wrapAngle,
  shortestAngleDelta,
  lerpAngle,
  isVectorLike,
  copyVectorLike,
  copyPose,
  createPose,
  createCameraPose,
  getOrbitAngle,
  resolveOrbitPlaneQuaternion,
  computeOrbitPosition,
  resolveBodyPosition,
  getFocusDistance,
  resolvePreferredFocusDirection,
  buildFocusPose,
  estimateSystemRadius,
  DEFAULT_DEEP_SPACE_VIEW,
  buildDeepSpaceViewPose,
  normalizeBodyCollection,
};
