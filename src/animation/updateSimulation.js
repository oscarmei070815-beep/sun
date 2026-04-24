import * as THREE from 'three';
import { computeOrbitPosition, normalizeBodyCollection, resolveBodyPosition } from './orbitalMath.js';

const scratchWorldPositions = [
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
  new THREE.Vector3(),
];

function ensureScratch(state) {
  if (!state._animationScratch) {
    state._animationScratch = {
      worldPositions: scratchWorldPositions,
    };
  }

  return state._animationScratch;
}

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

function getBaseRotation(node, axis) {
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

function resolveOrbitNode(body) {
  return body?.orbitNode || body?.orbitPivot || body?.orbitGroup || body?.orbitObject || body?.pivot || null;
}

function resolveSpinNode(body) {
  return body?.spinNode || body?.spinPivot || body?.spinGroup || body?.mesh || body?.object3d || body?.node || null;
}

function updateNodeRotation(node, axis, value) {
  if (!node || !node.rotation) {
    return;
  }

  node.rotation[axis] = value;
}

function updateBodyMotion(body, simTime, deltaTime, parentWorldPosition, state, depth) {
  if (!body) {
    return;
  }

  const orbitEnabled = state.orbitEnabled !== false && body.orbitEnabled !== false;
  const spinEnabled = state.spinEnabled !== false && body.spinEnabled !== false;
  const orbitNode = resolveOrbitNode(body);
  const spinNode = resolveSpinNode(body);
  const spinAxis = body.spinAxis || 'y';
  const tiltAxis = body.axialTiltAxis || 'z';
  const orbitAxis = body.orbitAxis || 'y';
  const orbitPhase = body.orbitPhase ?? 0;
  const orbitSpeed = orbitEnabled ? (body.orbitSpeed ?? 0) : 0;
  const rotationSpeed = spinEnabled ? (body.rotationSpeed ?? 0) : 0;
  const orbitInclination = body.orbitInclination ?? body.orbitTilt ?? 0;
  const orbitRadius = body.orbitRadius ?? 0;
  const scratch = state._animationScratch.worldPositions;
  const worldPosition = scratch[Math.min(depth, scratch.length - 1)];

  if (orbitNode && orbitNode.rotation) {
    updateNodeRotation(orbitNode, 'x', getBaseRotation(orbitNode, 'x') + orbitInclination);
    updateNodeRotation(orbitNode, orbitAxis, getBaseRotation(orbitNode, orbitAxis) + orbitPhase + orbitSpeed * simTime);
  } else if (body.position || body.worldPosition || body.object3d || body.mesh || body.node) {
    computeOrbitPosition(worldPosition, body, simTime, parentWorldPosition || null);
  }

  if (spinNode && spinNode.rotation) {
    updateNodeRotation(spinNode, spinAxis, getBaseRotation(spinNode, spinAxis) + (body.rotationPhase ?? 0) + rotationSpeed * simTime);
    if (body.axialTilt !== undefined && body.axialTilt !== null) {
      updateNodeRotation(spinNode, tiltAxis, getBaseRotation(spinNode, tiltAxis) + body.axialTilt);
    }
  }

  const source = body.object3d || body.mesh || body.node || body.bodyMesh || null;
  if (source && source.isObject3D) {
    source.updateMatrixWorld(true);
    source.getWorldPosition(worldPosition);
  }

  if (source && source.position && !orbitNode) {
    source.position.copy(worldPosition);
  }

  if (!orbitNode && !source && (body.position || body.worldPosition)) {
    if (body.position && body.position.isVector3) {
      body.position.copy(worldPosition);
    } else if (body.position && Array.isArray(body.position)) {
      body.position[0] = worldPosition.x;
      body.position[1] = worldPosition.y;
      body.position[2] = worldPosition.z;
    } else if (body.position && typeof body.position.x === 'number') {
      body.position.x = worldPosition.x;
      body.position.y = worldPosition.y;
      body.position.z = worldPosition.z;
    }
  }

  if (body.worldPosition && body.worldPosition.isVector3) {
    body.worldPosition.copy(worldPosition);
  } else if (!body.worldPosition) {
    body.worldPosition = worldPosition.clone();
  }

  if (typeof state.onBodyUpdated === 'function') {
    state.onBodyUpdated(body, {
      time: simTime,
      deltaTime,
      worldPosition: body.worldPosition,
    });
  }

  const children = getBodyChildren(body);
  if (Array.isArray(children)) {
    for (let index = 0; index < children.length; index += 1) {
      updateBodyMotion(children[index], simTime, deltaTime, body.worldPosition, state, depth + 1);
    }
  }
}

export function createSimulationState(initial = {}) {
  return {
    elapsed: 0,
    timeScale: 1,
    paused: false,
    orbitEnabled: true,
    spinEnabled: true,
    bodies: [],
    bodyMap: null,
    onBodyUpdated: null,
    _animationScratch: null,
    ...initial,
  };
}

export function updateSimulation(state, deltaSeconds = 0, overrides = {}) {
  if (!state) {
    return 0;
  }

  const nextPaused = overrides.paused ?? state.paused ?? false;
  const nextTimeScale = overrides.timeScale ?? state.timeScale ?? 1;
  state.paused = nextPaused;
  state.timeScale = nextTimeScale;

  const effectiveDelta = nextPaused ? 0 : deltaSeconds * nextTimeScale;
  state.deltaTime = effectiveDelta;
  state.elapsed = (state.elapsed ?? 0) + effectiveDelta;
  state.simulationTime = state.elapsed;
  state.lastUpdateDelta = deltaSeconds;

  ensureScratch(state);

  const rootCollection = pickBodyCollection(state.bodies, state.bodyMap, state.rootBodies);
  const rootBodies = normalizeBodyCollection(rootCollection);
  for (let index = 0; index < rootBodies.length; index += 1) {
    updateBodyMotion(rootBodies[index], state.simulationTime, effectiveDelta, null, state, 0);
  }

  return effectiveDelta;
}

export default updateSimulation;
