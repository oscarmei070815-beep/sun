import * as THREE from 'three';
import {
  buildDeepSpaceViewPose,
  buildFocusPose,
  clamp,
  copyPose,
  createCameraPose,
  easeInOutCubic,
  estimateSystemRadius,
  resolveBodyPosition,
} from './orbitalMath.js';

const DEFAULT_SHOT_DURATION = 7.5;
const DEFAULT_TRANSITION_DURATION = 1.05;

const scratchA = new THREE.Vector3();
const scratchB = new THREE.Vector3();
const scratchC = new THREE.Vector3();

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

function getBodyChildren(body) {
  return body?.moons || body?.childrenBodies || body?.satellites || body?.orbitChildren || null;
}

function findBodyById(collection, bodyId) {
  if (!bodyId || !collection) {
    return null;
  }

  if (collection instanceof Map) {
    return collection.get(bodyId) || null;
  }

  if (Array.isArray(collection)) {
    for (let index = 0; index < collection.length; index += 1) {
      const body = collection[index];
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

  if (typeof collection === 'object') {
    if (collection[bodyId]) {
      return collection[bodyId];
    }

    for (const key of Object.keys(collection)) {
      const body = collection[key];
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

function resolveBody(context, idOrBody) {
  if (!idOrBody) {
    return null;
  }

  if (typeof idOrBody === 'string') {
    return findBodyById(
      pickBodyCollection(context.bodyMap, context.bodies, context.rootBodies, context.sceneBodies),
      idOrBody,
    );
  }

  return idOrBody;
}

function averageBodies(context, ids, outTarget = scratchA, outPosition = scratchB) {
  outTarget.set(0, 0, 0);
  outPosition.set(0, 0, 0);

  let count = 0;
  let maxRadius = 0;
  for (let index = 0; index < ids.length; index += 1) {
    const body = resolveBody(context, ids[index]);
    if (!body) {
      continue;
    }

    resolveBodyPosition(scratchC, body, context);
    outTarget.add(scratchC);
    maxRadius = Math.max(
      maxRadius,
      body.displayRadius ?? body.radius ?? body.outerRadius ?? body.orbitRadius ?? 1,
    );
    count += 1;
  }

  if (count > 0) {
    outTarget.multiplyScalar(1 / count);
  }

  return { target: outTarget, radius: maxRadius || 1 };
}

function buildPoseFromBodyIds(targetIds, context, options = {}, out = createCameraPose()) {
  const targetList = Array.isArray(targetIds) ? targetIds : [targetIds];
  const selection = averageBodies(context, targetList);
  const body = resolveBody(context, targetList[0]);

  out.target.copy(selection.target);
  const fakeBody = body || {
    id: targetList.join('|'),
    type: options.type || 'planet',
    displayRadius: options.displayRadius ?? selection.radius,
    focusDistanceMultiplier: options.distanceMultiplier,
  };
  fakeBody.worldPosition = out.target;

  buildFocusPose(fakeBody, {
    ...context,
    targetOffset: options.targetOffset,
    viewDirection: options.viewDirection,
    distanceMultiplier: options.distanceMultiplier,
    distanceOffset: options.distanceOffset,
    minDistance: options.minDistance,
    fov: options.fov,
    frameOffset: options.frameOffset,
    frameOffsetX: options.frameOffsetX,
    frameOffsetY: options.frameOffsetY,
    disableFrameOffset: options.disableFrameOffset,
    mode: options.mode || 'tour',
    keepFollowing: true,
  }, out);

  return out;
}

function buildShotPose(shot, state, context, progress, out) {
  const shotContext = {
    ...context,
    systemBounds: context.systemBounds || state.systemBounds || null,
    bodies: context.bodies || state.bodies || null,
    bodyMap: context.bodyMap || state.bodyMap || null,
  };

  if (typeof shot.buildPose === 'function') {
    return shot.buildPose(shotContext, state, progress, out);
  }

  if (shot.type === 'deep-space') {
    return buildDeepSpaceViewPose(shotContext.systemBounds || {}, shotContext, out);
  }

  if (shot.targetIds) {
    return buildPoseFromBodyIds(shot.targetIds, shotContext, shot, out);
  }

  if (shot.targetId) {
    const body = resolveBody(shotContext, shot.targetId);
    if (body) {
      return buildFocusPose(body, {
        ...shotContext,
        ...shot,
        mode: shot.mode || 'tour',
        keepFollowing: true,
      }, out);
    }
  }

  return buildDeepSpaceViewPose(shotContext.systemBounds || {}, shotContext, out);
}

function makeShot(config) {
  return {
    duration: config.duration ?? DEFAULT_SHOT_DURATION,
    transition: config.transition ?? DEFAULT_TRANSITION_DURATION,
    mode: config.mode || 'tour',
    ...config,
    buildPose(context, state, progress, out) {
      if (typeof config.buildPose === 'function') {
        return config.buildPose(context, state, progress, out);
      }

      const fromPose = buildShotPose(config.from || config, state, context, 0, createCameraPose());
      const toPose = buildShotPose(config.to || config, state, context, 1, createCameraPose());
      const blend = easeInOutCubic(progress);

      out.position.copy(fromPose.position).lerp(toPose.position, blend);
      out.target.copy(fromPose.target).lerp(toPose.target, blend);
      out.up.copy(fromPose.up).lerp(toPose.up, blend);
      out.fov = toPose.fov ?? fromPose.fov ?? out.fov ?? null;
      out.distance = fromPose.distance + (toPose.distance - fromPose.distance) * blend;
      out.followTargetId = toPose.followTargetId ?? fromPose.followTargetId ?? null;
      out.mode = config.mode || 'tour';
      out.keepFollowing = true;
      return out;
    },
  };
}

export const DEFAULT_CINEMATIC_SHOTS = Object.freeze([
  makeShot({
    id: 'sun-close',
    duration: 7,
    targetId: 'Star - Sun',
    distanceMultiplier: 10.8,
    frameOffsetX: 0.14,
    viewDirection: new THREE.Vector3(0.78, 0.26, 0.56),
    from: {
      targetId: 'Star - Sun',
      distanceMultiplier: 12.4,
      frameOffsetX: 0.12,
      viewDirection: new THREE.Vector3(0.72, 0.28, 0.62),
    },
    to: {
      targetId: 'Star - Sun',
      distanceMultiplier: 9.8,
      frameOffsetX: 0.16,
      viewDirection: new THREE.Vector3(0.84, 0.24, 0.5),
    },
  }),
  makeShot({
    id: 'inner-planets-pass',
    duration: 8,
    targetIds: ['Planet - Mercury', 'Planet - Venus', 'Planet - Earth', 'Planet - Mars'],
    distanceMultiplier: 11.5,
    frameOffsetX: 0.12,
    viewDirection: new THREE.Vector3(0.86, 0.18, 0.5),
    from: {
      targetIds: ['Planet - Mercury', 'Planet - Venus'],
      distanceMultiplier: 10.5,
      frameOffsetX: 0.1,
      viewDirection: new THREE.Vector3(0.9, 0.16, 0.4),
    },
    to: {
      targetIds: ['Planet - Earth', 'Planet - Mars'],
      distanceMultiplier: 12.2,
      frameOffsetX: 0.14,
      viewDirection: new THREE.Vector3(0.8, 0.2, 0.56),
    },
  }),
  makeShot({
    id: 'asteroid-belt',
    duration: 7,
    targetId: 'Belt - Asteroid Belt',
    distanceMultiplier: 6.6,
    frameOffsetX: 0.12,
    viewDirection: new THREE.Vector3(0.9, 0.14, 0.42),
    from: {
      targetId: 'Belt - Asteroid Belt',
      distanceMultiplier: 7.4,
      frameOffsetX: 0.1,
      viewDirection: new THREE.Vector3(0.92, 0.12, 0.36),
    },
    to: {
      targetId: 'Belt - Asteroid Belt',
      distanceMultiplier: 6,
      frameOffsetX: 0.14,
      viewDirection: new THREE.Vector3(0.86, 0.16, 0.48),
    },
  }),
  makeShot({
    id: 'jupiter-system',
    duration: 8,
    targetId: 'Planet - Jupiter',
    distanceMultiplier: 10.6,
    viewDirection: new THREE.Vector3(0.8, 0.2, 0.54),
    from: {
      targetId: 'Planet - Jupiter',
      distanceMultiplier: 11.8,
      viewDirection: new THREE.Vector3(0.82, 0.18, 0.48),
    },
    to: {
      targetId: 'Planet - Jupiter',
      distanceMultiplier: 9.8,
      viewDirection: new THREE.Vector3(0.76, 0.22, 0.58),
    },
  }),
  makeShot({
    id: 'saturn-rings',
    duration: 8,
    targetId: 'Planet - Saturn',
    distanceMultiplier: 11.4,
    viewDirection: new THREE.Vector3(0.72, 0.2, 0.66),
    from: {
      targetId: 'Planet - Saturn',
      distanceMultiplier: 12.6,
      viewDirection: new THREE.Vector3(0.78, 0.2, 0.56),
    },
    to: {
      targetId: 'Planet - Saturn',
      distanceMultiplier: 10.2,
      viewDirection: new THREE.Vector3(0.66, 0.22, 0.72),
    },
  }),
  makeShot({
    id: 'uranus-ring',
    duration: 8,
    targetId: 'Planet - Uranus',
    distanceMultiplier: 9.6,
    viewDirection: new THREE.Vector3(0.96, 0.16, 0.16),
    from: {
      targetId: 'Planet - Uranus',
      distanceMultiplier: 10.7,
      viewDirection: new THREE.Vector3(0.98, 0.14, 0.08),
    },
    to: {
      targetId: 'Planet - Uranus',
      distanceMultiplier: 9.0,
      viewDirection: new THREE.Vector3(0.92, 0.18, 0.24),
    },
  }),
  makeShot({
    id: 'deep-space-overview',
    duration: 8,
    type: 'deep-space',
    buildPose(context, state, progress, out) {
      const deepSpacePose = buildDeepSpaceViewPose(context.systemBounds || {}, context, out);
      const closePose = buildDeepSpaceViewPose({
        ...context.systemBounds,
        systemRadius: Math.max(
          (context.systemBounds?.systemRadius ?? estimateSystemRadius(context.bodies || state.bodies || [], 120)),
          1,
        ) * 0.82,
      }, {
        ...context,
        deepSpaceView: {
          ...context.deepSpaceView,
          distanceMultiplier: 1.45,
        },
      }, createCameraPose());

      const blend = easeInOutCubic(progress);
      deepSpacePose.position.copy(closePose.position).lerp(deepSpacePose.position, blend);
      deepSpacePose.target.copy(closePose.target).lerp(deepSpacePose.target, blend);
      deepSpacePose.up.copy(closePose.up).lerp(deepSpacePose.up, blend);
      deepSpacePose.distance = closePose.distance + (deepSpacePose.distance - closePose.distance) * blend;
      deepSpacePose.mode = 'deep-space';
      deepSpacePose.followTargetId = deepSpacePose.followTargetId || 'Star - Sun';
      return deepSpacePose;
    },
  }),
]);

export function createCinematicTourState(initial = {}) {
  return {
    active: false,
    completed: false,
    looping: false,
    shotIndex: 0,
    shotElapsed: 0,
    elapsed: 0,
    returnMode: 'free',
    shots: DEFAULT_CINEMATIC_SHOTS.slice(),
    currentPose: createCameraPose(),
    previousPose: createCameraPose(),
    currentShot: null,
    _blendPoseA: createCameraPose(),
    _blendPoseB: createCameraPose(),
    ...initial,
  };
}

export function startCinematicTour(state, context = {}) {
  if (!state) {
    return null;
  }

  state.active = true;
  state.completed = false;
  state.shotIndex = 0;
  state.shotElapsed = 0;
  state.elapsed = 0;
  state.returnMode = context.returnMode || state.returnMode || 'free';
  state.currentShot = state.shots[0] || null;
  if (typeof context.onStart === 'function') {
    context.onStart(state);
  }
  return state.currentShot;
}

export function stopCinematicTour(state, context = {}) {
  if (!state) {
    return;
  }

  state.active = false;
  state.currentShot = null;
  state.shotElapsed = 0;
  if (typeof context.onStop === 'function') {
    context.onStop(state);
  }
}

function writePoseBlend(out, fromPose, toPose, blend) {
  out.position.copy(fromPose.position).lerp(toPose.position, blend);
  out.target.copy(fromPose.target).lerp(toPose.target, blend);
  out.up.copy(fromPose.up).lerp(toPose.up, blend);
  out.fov = toPose.fov ?? fromPose.fov ?? out.fov ?? null;
  out.distance = fromPose.distance + (toPose.distance - fromPose.distance) * blend;
  out.followTargetId = toPose.followTargetId ?? fromPose.followTargetId ?? null;
  out.mode = toPose.mode ?? fromPose.mode ?? 'tour';
  out.keepFollowing = true;
  return out;
}

export function updateCinematicTour(state, deltaSeconds = 0, context = {}) {
  if (!state || !state.active) {
    return null;
  }

  const shots = state.shots || DEFAULT_CINEMATIC_SHOTS;
  if (shots.length === 0) {
    stopCinematicTour(state, context);
    return null;
  }

  state.elapsed += deltaSeconds;
  state.shotElapsed += deltaSeconds;

  const shot = shots[Math.min(state.shotIndex, shots.length - 1)];
  state.currentShot = shot;
  const duration = Math.max(shot.duration ?? DEFAULT_SHOT_DURATION, 0.0001);
  const transitionDuration = Math.max(shot.transition ?? DEFAULT_TRANSITION_DURATION, 0.0001);
  const progress = clamp(state.shotElapsed / duration, 0, 1);
  const pose = buildShotPose(shot, state, context, progress, state.currentPose || createCameraPose());

  if (!state.currentPose) {
    state.currentPose = createCameraPose();
  }

  if (state.shotElapsed <= transitionDuration) {
    const blend = easeInOutCubic(clamp(state.shotElapsed / transitionDuration, 0, 1));
    if (state.shotIndex > 0) {
      const prevShot = shots[state.shotIndex - 1];
      const prevPose = buildShotPose(prevShot, state, context, 1, state.previousPose || createCameraPose());
      writePoseBlend(state.currentPose, prevPose, pose, blend);
    } else {
      copyPose(state.currentPose, pose);
    }
  } else {
    copyPose(state.currentPose, pose);
  }

  if (typeof context.onShot === 'function') {
    context.onShot({
      shot,
      index: state.shotIndex,
      progress,
      pose: state.currentPose,
    });
  }

  if (state.shotElapsed >= duration) {
    state.previousPose = copyPose(state.previousPose || createCameraPose(), state.currentPose);
    state.shotIndex += 1;
    state.shotElapsed = 0;

    if (state.shotIndex >= shots.length) {
      if (state.looping) {
        state.shotIndex = 0;
        state.shotElapsed = 0;
        state.currentShot = shots[0];
      } else {
        state.active = false;
        state.completed = true;
        state.currentShot = null;
        state.currentPose.mode = state.returnMode || 'free';
        if (typeof context.onComplete === 'function') {
          context.onComplete(state.currentPose, state);
        }
      }
    } else if (typeof context.onAdvance === 'function') {
      context.onAdvance(shots[state.shotIndex], state);
    }
  }

  return state.currentPose;
}

export function buildCinematicShotPose(shot, context = {}, state = null, progress = 0, out = createCameraPose()) {
  return buildShotPose(shot, state || createCinematicTourState(), context, progress, out);
}

export function buildDeepSpaceTourPose(context = {}, out = createCameraPose()) {
  return buildDeepSpaceViewPose(context.systemBounds || {}, context, out);
}

export default {
  DEFAULT_CINEMATIC_SHOTS,
  createCinematicTourState,
  startCinematicTour,
  stopCinematicTour,
  updateCinematicTour,
  buildCinematicShotPose,
  buildDeepSpaceTourPose,
};
