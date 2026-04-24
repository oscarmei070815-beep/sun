import * as THREE from 'three';
import {
  buildDeepSpaceViewPose,
  buildFocusPose,
  clamp,
  copyPose,
  createCameraPose,
  createPose,
  easeInOutCubic,
  lerp,
  resolveBodyPosition,
} from './orbitalMath.js';

const DEFAULT_DURATION = 0.9;
const DEFAULT_POSITION_DAMPING = 6.5;
const DEFAULT_TARGET_DAMPING = 7.5;
const DEFAULT_UP_DAMPING = 6.0;
const DEFAULT_LOOK_AHEAD = 0.18;

const scratchPose = createCameraPose();
const scratchPoseB = createCameraPose();
const scratchVecA = new THREE.Vector3();
const scratchVecB = new THREE.Vector3();
const scratchVecC = new THREE.Vector3();

function pickBodyCollection(...candidates) {
  for (let index = 0; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    if (!candidate) {
      continue;
    }
    if (Array.isArray(candidate) && candidate.length === 0) {
      continue;
    }
    if (candidate instanceof Map && candidate.size === 0) {
      continue;
    }
    if (typeof candidate === 'object' && !Array.isArray(candidate) && !(candidate instanceof Map) && Object.keys(candidate).length === 0) {
      continue;
    }
    return candidate;
  }
  return null;
}

function ensureCameraState(state) {
  if (!state._cameraFollowScratch) {
    state._cameraFollowScratch = {
      poseA: createCameraPose(),
      poseB: createCameraPose(),
      desired: createCameraPose(),
      current: createCameraPose(),
      world: new THREE.Vector3(),
      worldB: new THREE.Vector3(),
      worldC: new THREE.Vector3(),
      direction: new THREE.Vector3(0, 1, 0),
    };
  }

  if (!state.followTransition) {
    state.followTransition = {
      active: false,
      elapsed: 0,
      duration: DEFAULT_DURATION,
      from: createCameraPose(),
      to: createCameraPose(),
      easing: 'cubic',
    };
  }

  return state._cameraFollowScratch;
}

function getBodyChildren(body) {
  return body?.moons || body?.childrenBodies || body?.satellites || body?.orbitChildren || null;
}

function findBodyById(bodyCollection, bodyId) {
  if (!bodyId || !bodyCollection) {
    return null;
  }

  if (bodyCollection instanceof Map) {
    return bodyCollection.get(bodyId) || null;
  }

  if (Array.isArray(bodyCollection)) {
    for (let index = 0; index < bodyCollection.length; index += 1) {
      const body = bodyCollection[index];
      if (body && (body.id === bodyId || body.name === bodyId || body.label === bodyId)) {
        return body;
      }
      const children = getBodyChildren(body);
      const found = findBodyById(children, bodyId);
      if (found) {
        return found;
      }
    }
    return null;
  }

  if (typeof bodyCollection === 'object') {
    if (bodyCollection[bodyId]) {
      return bodyCollection[bodyId];
    }

    for (const key of Object.keys(bodyCollection)) {
      const body = bodyCollection[key];
      if (body && (body.id === bodyId || body.name === bodyId || body.label === bodyId)) {
        return body;
      }
      const children = getBodyChildren(body);
      const found = findBodyById(children, bodyId);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

function resolveTargetBody(state, target, context = {}) {
  if (!target) {
    return null;
  }

  if (typeof target === 'string') {
    return findBodyById(
      pickBodyCollection(context.bodyMap, state.bodyMap, context.bodies, state.bodies, state.rootBodies),
      target,
    );
  }

  if (target.isObject3D || target.object3d || target.mesh || target.worldPosition) {
    return target;
  }

  if (target.id || target.name || target.label || target.position) {
    return target;
  }

  return null;
}

function setPoseFromTarget(state, target, options = {}, context = {}, out = createCameraPose()) {
  const body = resolveTargetBody(state, target, context);
  if (!body) {
    return buildDeepSpaceViewPose(context.systemBounds || {}, context, out);
  }

  const poseContext = {
    camera: state.camera,
    target: scratchVecA.copy(out.target),
    viewDirection: options.viewDirection || context.viewDirection,
    preserveCurrentView: options.preserveCurrentView ?? context.preserveCurrentView ?? false,
    distanceMultiplier: options.distanceMultiplier,
    distanceOffset: options.distanceOffset,
    minDistance: options.minDistance,
    keepFollowing: options.keepFollowing ?? true,
    mode: options.mode || 'focus',
    fov: options.fov,
    up: options.up || context.up,
    sunPosition: context.sunPosition,
    deepSpace: options.deepSpace || false,
  };

  return buildFocusPose(body, poseContext, out);
}

function lerpVector(out, from, to, t) {
  return out.copy(from).lerp(to, t);
}

function applyPoseToCamera(state, pose, deltaSeconds, options = {}) {
  const camera = state.camera;
  const controls = state.controls;
  ensureCameraState(state);
  const positionDamping = options.positionDamping ?? state.positionDamping ?? DEFAULT_POSITION_DAMPING;
  const targetDamping = options.targetDamping ?? state.targetDamping ?? DEFAULT_TARGET_DAMPING;
  const upDamping = options.upDamping ?? state.upDamping ?? DEFAULT_UP_DAMPING;
  const instant = options.instant === true;
  const alphaPos = clamp(1 - Math.exp(-positionDamping * Math.max(deltaSeconds, 0)), 0, 1);
  const alphaTarget = clamp(1 - Math.exp(-targetDamping * Math.max(deltaSeconds, 0)), 0, 1);
  const alphaUp = clamp(1 - Math.exp(-upDamping * Math.max(deltaSeconds, 0)), 0, 1);

  if (!state.currentPose) {
    state.currentPose = createCameraPose();
  }

  if (!state.lastPose) {
    state.lastPose = createCameraPose();
  }

  if (state.followTransition.active) {
    state.followTransition.elapsed += deltaSeconds;
    const duration = Math.max(state.followTransition.duration, 0.0001);
    const blend = easeInOutCubic(clamp(state.followTransition.elapsed / duration, 0, 1));
    lerpVector(state.currentPose.position, state.followTransition.from.position, state.followTransition.to.position, blend);
    lerpVector(state.currentPose.target, state.followTransition.from.target, state.followTransition.to.target, blend);
    lerpVector(state.currentPose.up, state.followTransition.from.up, state.followTransition.to.up, blend);
    state.currentPose.distance = lerp(state.followTransition.from.distance, state.followTransition.to.distance, blend);
    state.currentPose.fov = state.followTransition.to.fov ?? state.followTransition.from.fov ?? state.currentPose.fov;
    state.currentPose.followTargetId = state.followTransition.to.followTargetId ?? state.followTransition.from.followTargetId ?? null;
    state.currentPose.mode = state.followTransition.to.mode ?? state.followTransition.from.mode ?? state.mode ?? 'focus';
    state.currentPose.keepFollowing = state.followTransition.to.keepFollowing ?? state.followTransition.from.keepFollowing ?? false;

    if (state.followTransition.elapsed >= duration) {
      state.followTransition.active = false;
      copyPose(state.currentPose, state.followTransition.to);
    }
  } else if (pose) {
    copyPose(state.currentPose, pose);
  }

  if (camera) {
    if (typeof camera.fov === 'number' && state.currentPose.fov !== null && state.currentPose.fov !== undefined) {
      if (camera.fov !== state.currentPose.fov) {
        camera.fov = state.currentPose.fov;
        if (typeof camera.updateProjectionMatrix === 'function') {
          camera.updateProjectionMatrix();
        }
      }
    }

    if (state.currentPose.position) {
      if (camera.position) {
        if (state.mode === 'free' || instant) {
          camera.position.copy(state.currentPose.position);
        } else {
          camera.position.lerp(state.currentPose.position, alphaPos);
        }
      }
    }

    if (camera.up && state.currentPose.up) {
      if (state.mode === 'free' || instant) {
        camera.up.copy(state.currentPose.up);
      } else {
        camera.up.lerp(state.currentPose.up, alphaUp);
      }
      camera.up.normalize();
    }
  }

  if (controls) {
    controls.enabled = state.mode === 'free' || (state.lockControlsWhileFollowing === false && state.mode !== 'tour');
    if (controls.target && state.currentPose.target) {
      if (state.mode === 'free' || instant) {
        controls.target.copy(state.currentPose.target);
      } else {
        controls.target.lerp(state.currentPose.target, alphaTarget);
      }
    }

    if (typeof controls.update === 'function' && options.updateControls !== false) {
      controls.update();
    }
  } else if (camera && typeof camera.lookAt === 'function' && state.currentPose.target) {
    camera.lookAt(state.currentPose.target);
  }

  return state.currentPose;
}

function rebuildFocusPose(state, target, context, options, out) {
  const body = resolveTargetBody(state, target, context);
  if (!body) {
    return buildDeepSpaceViewPose(context.systemBounds || {}, context, out);
  }

  const poseContext = {
    camera: state.camera,
    target: scratchVecB.copy(out.target),
    viewDirection: options.viewDirection || context.viewDirection,
    preserveCurrentView: options.preserveCurrentView ?? context.preserveCurrentView ?? false,
    distanceMultiplier: options.distanceMultiplier,
    distanceOffset: options.distanceOffset,
    minDistance: options.minDistance,
    keepFollowing: options.keepFollowing ?? true,
    mode: options.mode || 'focus',
    fov: options.fov,
    up: options.up || context.up,
    sunPosition: context.sunPosition,
    deepSpace: options.deepSpace || false,
  };

  return buildFocusPose(body, poseContext, out);
}

export function createCameraFollowState(initial = {}) {
  return {
    camera: null,
    controls: null,
    mode: 'free',
    targetId: null,
    target: null,
    currentPose: createCameraPose(),
    lastPose: createCameraPose(),
    positionDamping: DEFAULT_POSITION_DAMPING,
    targetDamping: DEFAULT_TARGET_DAMPING,
    upDamping: DEFAULT_UP_DAMPING,
    lookAhead: DEFAULT_LOOK_AHEAD,
    lockControlsWhileFollowing: true,
    cameraOffset: new THREE.Vector3(),
    bodyMap: null,
    systemBounds: null,
    followTransition: null,
    _cameraFollowScratch: null,
    ...initial,
  };
}

export function requestCameraFocus(state, target, options = {}, context = {}) {
  if (!state) {
    return null;
  }

  ensureCameraState(state);
  state.target = resolveTargetBody(state, target, context) || target;
  state.targetId = typeof target === 'string' ? target : (target?.id || target?.name || target?.label || null);
  state.mode = options.mode || (state.mode === 'deep-space' ? 'deep-space' : 'focus');

  const fromPose = copyPose(state.followTransition.from, state.currentPose || createCameraPose());
  const toPose = rebuildFocusPose(state, state.target, context, options, state.followTransition.to);

  if (options.deepSpace) {
    buildDeepSpaceViewPose(context.systemBounds || state.systemBounds || {}, context, toPose);
    state.mode = 'deep-space';
  }

  if (options.instant) {
    copyPose(state.currentPose, toPose);
    state.followTransition.active = false;
    state.lastPose = copyPose(state.lastPose, state.currentPose);
    applyPoseToCamera(state, state.currentPose, 0, { updateControls: false, instant: true });
    return state.currentPose;
  }

  state.followTransition.active = true;
  state.followTransition.elapsed = 0;
  state.followTransition.duration = options.duration ?? state.focusTransitionDuration ?? DEFAULT_DURATION;
  copyPose(fromPose, state.currentPose || createCameraPose());
  copyPose(toPose, state.followTransition.to);
  return toPose;
}

export function setCameraPose(state, pose, options = {}) {
  if (!state || !pose) {
    return null;
  }

  ensureCameraState(state);
  copyPose(state.followTransition.from, state.currentPose || createCameraPose());
  copyPose(state.followTransition.to, pose);
  state.followTransition.active = true;
  state.followTransition.elapsed = 0;
  state.followTransition.duration = options.duration ?? state.focusTransitionDuration ?? DEFAULT_DURATION;
  state.mode = options.mode || pose.mode || state.mode || 'focus';
  if (options.instant) {
    copyPose(state.currentPose, pose);
    state.followTransition.active = false;
    applyPoseToCamera(state, state.currentPose, 0, { updateControls: false, instant: true });
  }
  return pose;
}

export function clearCameraFollow(state, options = {}) {
  if (!state) {
    return;
  }

  ensureCameraState(state);
  state.mode = 'free';
  state.target = null;
  state.targetId = null;
  state.followTransition.active = false;
  if (options.resetPose) {
    copyPose(state.currentPose, options.resetPose);
  }
  if (state.controls) {
    state.controls.enabled = true;
  }
}

export function updateCameraFollow(state, deltaSeconds = 0, context = {}) {
  if (!state) {
    return null;
  }

  ensureCameraState(state);

  if (state.mode === 'deep-space' && !state.followTransition.active) {
    const pose = buildDeepSpaceViewPose(context.systemBounds || state.systemBounds || {}, context, scratchPose);
    state.currentPose = copyPose(state.currentPose || createCameraPose(), pose);
    return applyPoseToCamera(state, state.currentPose, deltaSeconds, context);
  }

  if (state.followTransition.active) {
    return applyPoseToCamera(state, null, deltaSeconds, context);
  }

  if (state.mode !== 'free' && state.target) {
    const pose = rebuildFocusPose(state, state.target, context, {
      distanceMultiplier: context.distanceMultiplier,
      distanceOffset: context.distanceOffset,
      minDistance: context.minDistance,
      keepFollowing: true,
      mode: state.mode,
      fov: context.fov,
      preserveCurrentView: true,
      up: context.up,
      viewDirection: context.viewDirection,
    }, scratchPoseB);

    state.currentPose = copyPose(state.currentPose || createCameraPose(), pose);
    return applyPoseToCamera(state, state.currentPose, deltaSeconds, context);
  }

  if (context.target) {
    const body = resolveTargetBody(state, context.target, context);
    if (body) {
      state.target = body;
      state.targetId = body.id || body.name || body.label || state.targetId;
      state.mode = context.mode || 'focus';
      const pose = rebuildFocusPose(state, body, context, context, scratchPoseB);
      state.currentPose = copyPose(state.currentPose || createCameraPose(), pose);
      return applyPoseToCamera(state, state.currentPose, deltaSeconds, context);
    }
  }

  if (state.camera && state.controls) {
    state.controls.enabled = true;
    if (typeof state.controls.update === 'function') {
      state.controls.update();
    }
  }

  return state.currentPose || null;
}

export function getFollowPoseForTarget(state, target, context = {}, options = {}, out = createCameraPose()) {
  return setPoseFromTarget(state, target, options, context, out);
}

export function getDeepSpaceViewPose(state, context = {}, out = createCameraPose()) {
  return buildDeepSpaceViewPose(context.systemBounds || state?.systemBounds || {}, context, out);
}

export function focusTargetFromBodyPosition(state, target, context = {}, out = createCameraPose()) {
  const body = resolveTargetBody(state, target, context);
  if (!body) {
    return buildDeepSpaceViewPose(context.systemBounds || {}, context, out);
  }
  resolveBodyPosition(scratchVecC, body, context);
  return buildFocusPose(body, context, out);
}

export default updateCameraFollow;
