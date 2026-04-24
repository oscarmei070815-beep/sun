import './styles.css';

import * as THREE from 'three';

import { createAsteroidBelt } from './bodies/createAsteroidBelt.js';
import { createComets } from './bodies/createComets.js';
import { createKuiperVeil } from './bodies/createKuiperVeil.js';
import { createMoon } from './bodies/createMoon.js';
import { createOrbitLine } from './bodies/createOrbitLine.js';
import { createPlanet } from './bodies/createPlanet.js';
import { createStarfield } from './bodies/createStarfield.js';
import { createSun } from './bodies/createSun.js';
import {
  buildDeepSpaceTourPose,
  createCinematicTourState,
  startCinematicTour,
  stopCinematicTour,
  updateCinematicTour
} from './animation/cinematicTour.js';
import { estimateSystemRadius, resolveBodyPosition } from './animation/orbitalMath.js';
import {
  clearCameraFollow,
  createCameraFollowState,
  requestCameraFocus,
  setCameraPose,
  updateCameraFollow
} from './animation/updateCameraFollow.js';
import { createSimulationState, updateSimulation } from './animation/updateSimulation.js';
import { createCamera } from './core/createCamera.js';
import { createComposer } from './core/createComposer.js';
import { createControls } from './core/createControls.js';
import { createRenderer } from './core/createRenderer.js';
import { createScene } from './core/createScene.js';
import { bindResize } from './core/resize.js';
import { BODIES } from './data/bodies.js';
import { createControlPanel } from './ui/createControlPanel.js';
import { createLabelManager } from './ui/labels.js';
import { createTooltip } from './ui/tooltip.js';
import { detectPerformanceProfile } from './utils/performance.js';

const appRoot = document.querySelector('#app');
const uiRoot = document.querySelector('#ui');

const profile = detectPerformanceProfile();
const scene = createScene();
const camera = createCamera();
const { renderer, labelRenderer } = createRenderer();
const { composer, bloomPass } = createComposer(renderer, scene, camera, {
  strength: profile.bloomStrength,
  threshold: 0.38,
  radius: 0.48
});
const controls = createControls(camera, renderer.domElement);
controls.enablePan = true;

renderer.domElement.style.touchAction = 'none';
appRoot.appendChild(renderer.domElement);
uiRoot.appendChild(labelRenderer.domElement);

const tooltip = createTooltip({ parent: uiRoot });
const panel = createControlPanel({
  mount: uiRoot,
  initialState: {
    selectedId: 'free-flight',
    timeScale: 1,
    orbits: true,
    labels: true,
    bloom: true,
    pause: false
  }
});

const labelManager = createLabelManager({
  parent: labelRenderer.domElement,
  visible: true,
  onLabelClick: (item) => {
    focusObject(item.id, { source: 'label' });
  }
});

const ambient = new THREE.AmbientLight('#2c477a', 0.2);
const hemisphereFill = new THREE.HemisphereLight('#9ab8f2', '#071226', 0.62);
const solarKeyTarget = new THREE.Object3D();
const solarKey = new THREE.DirectionalLight('#fff0c8', 0.56);
solarKey.target = solarKeyTarget;
const focusFillTarget = new THREE.Object3D();
const focusFill = new THREE.DirectionalLight('#dce7ff', 0);
focusFill.target = focusFillTarget;
scene.add(ambient, hemisphereFill, solarKey, solarKeyTarget, focusFill, focusFillTarget);

const focusLightScratch = {
  view: new THREE.Vector3(),
  right: new THREE.Vector3(),
  up: new THREE.Vector3(),
  sun: new THREE.Vector3(),
  target: new THREE.Vector3()
};

const bodyInstances = new Map();
const rootBodies = [];
const orbitLines = [];
const dynamicUpdaters = [];
const clickableObjects = [];
const labelProfiles = new Map();
let sunBody = null;

function createBodyInstance(config) {
  if (config.type === 'star') {
    return createSun(config);
  }
  if (config.type === 'planet') {
    return createPlanet(config, {
      textureResolution: profile.textureResolution
    });
  }
  if (config.type === 'moon') {
    return createMoon(config, {
      textureResolution: Math.max(384, Math.floor(profile.textureResolution * 0.72))
    });
  }
  if (config.id === 'asteroidBelt') {
    return createAsteroidBelt(config, {
      count: profile.asteroidCount
    });
  }
  return createKuiperVeil(config, {
    count: profile.kuiperCount
  });
}

function attachBody(config, body) {
  body.childrenBodies = body.childrenBodies ?? [];

  if (config.parentId) {
    const parent = bodyInstances.get(config.parentId);
    parent.translationGroup.add(body.root);
    parent.childrenBodies.push(body);
  } else {
    scene.add(body.root);
    rootBodies.push(body);
  }

  if (config.orbitRadius > 0) {
    const orbitLine = createOrbitLine(
      config.orbitRadius,
      config.orbitInclination ?? 0,
      config.type === 'moon' ? '#4e5a74' : '#566685'
    );

    if (config.parentId) {
      bodyInstances.get(config.parentId).translationGroup.add(orbitLine);
    } else {
      scene.add(orbitLine);
    }

    body.orbitLine = orbitLine;
    orbitLines.push(orbitLine);
  }

  body.mesh?.userData && (body.mesh.userData.bodyId = config.id);
  body.ringMesh?.userData && (body.ringMesh.userData.bodyId = config.id);

  if (body.mesh) {
    clickableObjects.push(body.mesh);
  }
  if (body.ringMesh) {
    clickableObjects.push(body.ringMesh);
  }

  const fadeSettings =
    config.type === 'star'
      ? { fadeStart: 420, fadeEnd: 920, alwaysVisible: true }
      : config.type === 'belt'
        ? { fadeStart: 520, fadeEnd: 960 }
        : config.type === 'moon'
          ? { fadeStart: 140, fadeEnd: 310, minOpacity: 0.18 }
          : { fadeStart: 200, fadeEnd: 420 };

  labelManager.addLabel({
    id: config.id,
    text: config.name,
    object3D: body.labelAnchor,
    ...fadeSettings
  });
  labelProfiles.set(config.id, fadeSettings);

  if (typeof body.update === 'function') {
    dynamicUpdaters.push(body.update);
  }

  if (config.id === 'sun') {
    sunBody = body;
  }
}

for (const config of BODIES) {
  const instance = createBodyInstance(config);
  bodyInstances.set(config.id, instance);
  attachBody(config, instance);
}

const starfield = createStarfield({ count: profile.starCount });
scene.add(starfield.root);
dynamicUpdaters.push(starfield.update);

const comets = createComets();
scene.add(comets.root);
dynamicUpdaters.push(comets.update);

function buildAliasMap() {
  const aliasMap = new Map();

  for (const [id, body] of bodyInstances.entries()) {
    const selectLabel = `${body.typeLabel} - ${body.name}`;
    const optionLabel = body.selectLabel;
    const aliases = [
      id,
      body.name,
      body.label,
      body.config?.name,
      body.config?.label,
      body.config?.selectLabel,
      optionLabel,
      selectLabel
    ].filter(Boolean);

    for (const alias of aliases) {
      aliasMap.set(alias, body);
    }
  }

  aliasMap.set('free-flight', null);
  aliasMap.set('Free flight / manual camera', null);

  return aliasMap;
}

const bodyAliasMap = buildAliasMap();
const systemBounds = {
  bodies: rootBodies,
  center: sunBody,
  sunPosition: sunBody,
  sunId: 'sun',
  systemRadius: estimateSystemRadius(rootBodies, 320),
  deepSpaceView: {
    distanceMultiplier: 0.96,
    heightRatio: 0.14,
    forwardBias: 0.16,
    targetShift: -0.42,
    fov: 25
  }
};

const simulationState = createSimulationState({
  bodies: rootBodies,
  bodyMap: bodyAliasMap,
  timeScale: 1,
  paused: false
});

const cameraFollowState = createCameraFollowState({
  camera,
  controls,
  bodyMap: bodyAliasMap,
  systemBounds,
  lockControlsWhileFollowing: false,
  focusTransitionDuration: 1.15
});

const cinematicTourState = createCinematicTourState();

function getAnimationContext() {
  return {
    camera,
    controls,
    bodies: rootBodies,
    rootBodies,
    bodyMap: bodyAliasMap,
    systemBounds,
    sunPosition: sunBody,
    sunId: 'sun',
    center: sunBody,
    target: controls.target,
    up: camera.up,
    deepSpaceView: systemBounds.deepSpaceView
  };
}

function updateOrbitVisibility(visible) {
  for (const orbitLine of orbitLines) {
    orbitLine.visible = visible;
  }
}

const DEEP_SPACE_LABEL_IDS = new Set([
  'sun',
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto',
  'asteroidBelt',
  'kuiperVeil'
]);

const DEEP_SPACE_LABEL_PRIORITIES = {
  sun: 100,
  earth: 96,
  saturn: 94,
  jupiter: 92,
  uranus: 90,
  neptune: 88,
  venus: 86,
  mars: 84,
  mercury: 82,
  pluto: 80,
  asteroidBelt: 24,
  kuiperVeil: 18
};

const DEEP_SPACE_LABEL_OFFSETS = {
  sun: new THREE.Vector3(-28, 40, 0),
  mercury: new THREE.Vector3(-22, -22, 0),
  venus: new THREE.Vector3(10, 20, 0),
  earth: new THREE.Vector3(24, -28, 0),
  mars: new THREE.Vector3(18, 20, 0),
  jupiter: new THREE.Vector3(-18, 28, 0),
  saturn: new THREE.Vector3(18, 34, 0),
  uranus: new THREE.Vector3(-18, 18, 0),
  neptune: new THREE.Vector3(16, -4, 0),
  pluto: new THREE.Vector3(34, 16, 0),
  asteroidBelt: new THREE.Vector3(-24, -24, 0),
  kuiperVeil: new THREE.Vector3(44, -18, 0)
};

function isInspectionMode(mode) {
  return mode === 'focus' || mode === 'inspect';
}

function isInspectableBelt(body) {
  return body?.config?.type === 'belt' || body?.type === 'belt';
}

function getBodyContextIds(targetId) {
  const ids = new Set();
  const target = bodyInstances.get(targetId);
  if (!target) {
    return ids;
  }

  ids.add(targetId);

  const parentId = target.config?.parentId;
  if (parentId) {
    ids.add(parentId);
    const parent = bodyInstances.get(parentId);
    for (const child of parent?.childrenBodies ?? []) {
      ids.add(child.id);
    }
  } else {
    for (const child of target.childrenBodies ?? []) {
      ids.add(child.id);
    }
  }

  return ids;
}

function configureLabelsForMode(mode) {
  const focusContextIds =
    isInspectionMode(mode) && cameraFollowState.targetId
      ? getBodyContextIds(cameraFollowState.targetId)
      : null;

  for (const [id, profileConfig] of labelProfiles.entries()) {
    if (mode === 'deep-space' || mode === 'tour') {
      const visibleInWideView =
        id !== 'asteroidBelt' &&
        id !== 'kuiperVeil' &&
        DEEP_SPACE_LABEL_IDS.has(id);

      if (DEEP_SPACE_LABEL_IDS.has(id)) {
        labelManager.setLabelState(id, {
          ...profileConfig,
          alwaysVisible: true,
          fadeStart: 9999,
          fadeEnd: 10000,
          layoutPriority: DEEP_SPACE_LABEL_PRIORITIES[id] ?? 0,
          minOpacity: mode === 'tour' ? 0.72 : 0.88,
          offset: DEEP_SPACE_LABEL_OFFSETS[id] ?? [0, 0, 0],
          visible: mode === 'tour' ? true : visibleInWideView
        });
      } else {
        labelManager.setLabelState(id, {
          ...profileConfig,
          alwaysVisible: false,
          layoutPriority: 0,
          minOpacity: profileConfig.minOpacity ?? 0.22,
          offset: [0, 0, 0],
          visible: mode !== 'deep-space'
        });
      }
      continue;
    }

    if (isInspectionMode(mode) && focusContextIds) {
      labelManager.setLabelState(id, {
        ...profileConfig,
        alwaysVisible: false,
        layoutPriority: 0,
        minOpacity: profileConfig.minOpacity ?? 0.22,
        offset: [0, 0, 0],
        visible: focusContextIds.has(id)
      });
      continue;
    }

    labelManager.setLabelState(id, {
      ...profileConfig,
      alwaysVisible: false,
      layoutPriority: 0,
      minOpacity: profileConfig.minOpacity ?? 0.22,
      offset: [0, 0, 0],
      visible: true
    });
  }
}

function updateOrbitPresentation() {
  if (!panel.state.orbits) {
    updateOrbitVisibility(false);
    return;
  }

  if (!isInspectionMode(cameraFollowState.mode) || !cameraFollowState.targetId) {
    updateOrbitVisibility(true);
    return;
  }

  const contextIds = getBodyContextIds(cameraFollowState.targetId);
  const targetBody = bodyInstances.get(cameraFollowState.targetId);
  if (targetBody?.config?.ring) {
    updateOrbitVisibility(false);
    return;
  }

  if (targetBody?.config?.type === 'planet' || targetBody?.config?.type === 'belt') {
    contextIds.delete(cameraFollowState.targetId);
  }

  for (const body of bodyInstances.values()) {
    if (body.orbitLine) {
      body.orbitLine.visible = contextIds.has(body.id);
    }
  }
}

function updateBodyPresentation() {
  if (!isInspectionMode(cameraFollowState.mode) || !cameraFollowState.targetId) {
    for (const body of bodyInstances.values()) {
      body.root.visible = true;
    }
    return;
  }

  const contextIds = getBodyContextIds(cameraFollowState.targetId);
  for (const body of bodyInstances.values()) {
    body.root.visible = contextIds.has(body.id);
  }
}

function updateFocusLighting(delta) {
  const targetBody =
    isInspectionMode(cameraFollowState.mode) && cameraFollowState.targetId
      ? bodyInstances.get(cameraFollowState.targetId)
      : null;

  resolveBodyPosition(focusLightScratch.sun, sunBody, {
    fallbackPosition: [0, 0, 0]
  });

  if (targetBody && targetBody.id !== 'sun') {
    resolveBodyPosition(focusLightScratch.target, targetBody, {
      fallbackPosition: controls.target
    });
  } else if (cameraFollowState.mode === 'deep-space') {
    focusLightScratch.target.set(90, -8, 18);
  } else {
    focusLightScratch.target.copy(controls.target);
    if (focusLightScratch.target.distanceToSquared(focusLightScratch.sun) < 16) {
      focusLightScratch.target.set(80, 0, 24);
    }
  }

  solarKey.position.copy(focusLightScratch.sun);
  solarKeyTarget.position.copy(focusLightScratch.target);
  solarKey.intensity = targetBody
    ? targetBody.id === 'sun'
      ? 0.38
      : targetBody.config?.ring
        ? 1.8
        : targetBody.config?.type === 'moon'
          ? 1.05
          : 1.38
    : 0.68;

  const desiredIntensity = targetBody
    ? targetBody.config?.ring
      ? 0.38
      : targetBody.config?.type === 'moon'
        ? 0.18
        : 0.24
    : 0;

  const intensityBlend = THREE.MathUtils.clamp(delta * 4.5, 0, 1);
  focusFill.intensity = THREE.MathUtils.lerp(focusFill.intensity, desiredIntensity, intensityBlend);
  focusFill.visible = focusFill.intensity > 0.001;

  if (!targetBody || !focusFill.visible) {
    return;
  }

  focusFill.color.set(targetBody.id === 'saturn' ? '#f1dcc2' : '#dce7ff');
  focusFillTarget.position.copy(controls.target);

  focusLightScratch.view.subVectors(camera.position, controls.target);
  if (focusLightScratch.view.lengthSq() < 0.0001) {
    focusLightScratch.view.set(0.66, 0.22, 0.72);
  }
  focusLightScratch.view.normalize();

  focusLightScratch.up.copy(camera.up).normalize();
  focusLightScratch.right.crossVectors(focusLightScratch.view, focusLightScratch.up);
  if (focusLightScratch.right.lengthSq() < 0.0001) {
    focusLightScratch.right.set(1, 0, 0);
  } else {
    focusLightScratch.right.normalize();
  }

  const radius = Math.max(targetBody.displayRadius ?? targetBody.config?.displayRadius ?? 6, 3);
  focusFill.position
    .copy(camera.position)
    .addScaledVector(focusLightScratch.right, radius * 1.8)
    .addScaledVector(focusLightScratch.up, radius * 1.2)
    .addScaledVector(focusLightScratch.view, radius * 0.65);
}

function setBloomEnabled(enabled) {
  bloomPass.strength = enabled ? profile.bloomStrength : 0;
}

function getBodyById(id) {
  return bodyAliasMap.get(id) ?? bodyInstances.get(id) ?? null;
}

function focusObject(id, options = {}) {
  if (id === 'free-flight') {
    stopCinematicTour(cinematicTourState);
    clearCameraFollow(cameraFollowState);
    labelManager.setActiveLabel(null);
    if (options.syncPanel !== false) {
      panel.setSelectedObject('free-flight');
    }
    return;
  }

  const target = getBodyById(id);
  if (!target) {
    return;
  }

  stopCinematicTour(cinematicTourState);
  const requestOptions = {
    duration: options.duration ?? 1.2,
    instant: options.instant ?? false,
    mode: options.mode ?? 'focus'
  };

  requestCameraFocus(
    cameraFollowState,
    target,
    requestOptions,
    getAnimationContext()
  );
  labelManager.setActiveLabel(target.id);
  if (options.syncPanel !== false) {
    panel.setSelectedObject(target.id);
  }
}

function releaseInspectableBeltCamera() {
  const targetBody = cameraFollowState.targetId
    ? bodyInstances.get(cameraFollowState.targetId)
    : null;

  if (
    cameraFollowState.mode !== 'focus' ||
    !isInspectableBelt(targetBody) ||
    cameraFollowState.followTransition?.active
  ) {
    return false;
  }

  cameraFollowState.mode = 'inspect';
  cameraFollowState.target = null;
  controls.enabled = true;
  return true;
}

function activateDeepSpace(options = {}) {
  stopCinematicTour(cinematicTourState);
  requestCameraFocus(
    cameraFollowState,
    sunBody,
    {
      duration: options.duration ?? 1.35,
      instant: options.instant ?? false,
      deepSpace: true,
      mode: 'deep-space'
    },
    getAnimationContext()
  );
  labelManager.setActiveLabel(null);
}

function startTour() {
  stopCinematicTour(cinematicTourState);
  cameraFollowState.target = null;
  cameraFollowState.targetId = null;
  cameraFollowState.mode = 'tour';
  startCinematicTour(cinematicTourState, {
    returnMode: 'free'
  });
  labelManager.setActiveLabel(null);
}

panel.onEvent((payload) => {
  if (payload.type === 'selection') {
    focusObject(payload.value, { syncPanel: false });
  }

  if (payload.type === 'action') {
    if (payload.value === 'cinematic-tour') {
      startTour();
    }
    if (payload.value === 'deep-space-view') {
      activateDeepSpace();
    }
  }

  if (payload.type === 'time-scale') {
    simulationState.timeScale = payload.value;
  }

  if (payload.type === 'toggle') {
    const { key, value } = payload.value;
    if (key === 'orbits') {
      updateOrbitPresentation();
    }
    if (key === 'labels') {
      labelManager.setVisible(value);
    }
    if (key === 'bloom') {
      setBloomEnabled(value);
    }
    if (key === 'pause') {
      simulationState.paused = value;
    }
  }
});

updateOrbitVisibility(panel.state.orbits);
setBloomEnabled(panel.state.bloom);

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let hoveredId = null;

function setHoveredBody(id) {
  hoveredId = id;
  labelManager.setHoveredLabel(id);
}

function pickBodyFromEvent(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const intersections = raycaster.intersectObjects(clickableObjects, false);
  const hit = intersections.find((entry) => entry.object.userData?.bodyId);
  return hit?.object.userData?.bodyId ?? null;
}

renderer.domElement.addEventListener('pointermove', (event) => {
  setHoveredBody(pickBodyFromEvent(event));
});

renderer.domElement.addEventListener('pointerleave', () => {
  setHoveredBody(null);
});

renderer.domElement.addEventListener('click', (event) => {
  const hitId = pickBodyFromEvent(event);
  if (hitId) {
    focusObject(hitId);
  }
});

renderer.domElement.addEventListener('contextmenu', (event) => event.preventDefault());

controls.addEventListener('start', () => {
  if (cinematicTourState.active) {
    stopCinematicTour(cinematicTourState);
    cameraFollowState.mode = 'free';
  }

  if (cameraFollowState.targetId) {
    const targetBody = bodyInstances.get(cameraFollowState.targetId);
    if (isInspectableBelt(targetBody)) {
      if (cameraFollowState.followTransition) {
        cameraFollowState.followTransition.active = false;
      }
      cameraFollowState.mode = 'inspect';
      cameraFollowState.target = null;
      controls.enabled = true;
    }
  }
});

const initialPose = buildDeepSpaceTourPose(getAnimationContext());
camera.position.copy(initialPose.position);
camera.up.copy(initialPose.up);
controls.target.copy(initialPose.target);
controls.update();
camera.lookAt(initialPose.target);
clearCameraFollow(cameraFollowState);
panel.setSelectedObject('free-flight');
configureLabelsForMode('free');

function applyStartupView() {
  const params = new URLSearchParams(window.location.search);
  const focus = params.get('focus');
  const mode = params.get('mode') ?? params.get('view');

  if (mode === 'deep-space') {
    activateDeepSpace({ instant: true });
    return;
  }

  if (focus) {
    focusObject(focus, { instant: true });
  }
}

applyStartupView();

bindResize({
  camera,
  renderer,
  composer,
  labelRenderer
});

const clock = new THREE.Clock();

function tick() {
  const delta = clock.getDelta();
  const effectiveDelta = updateSimulation(simulationState, delta, {
    paused: simulationState.paused,
    timeScale: simulationState.timeScale
  });
  const simulationTime = simulationState.simulationTime ?? 0;

  for (const updater of dynamicUpdaters) {
    updater(effectiveDelta, simulationTime);
  }

  if (cinematicTourState.active) {
    const pose = updateCinematicTour(cinematicTourState, delta, getAnimationContext());
    if (pose) {
      cameraFollowState.mode = 'tour';
      cameraFollowState.target = null;
      cameraFollowState.targetId = null;
      setCameraPose(cameraFollowState, pose, {
        instant: true,
        mode: 'tour'
      });
    }
  } else {
    updateCameraFollow(cameraFollowState, delta, getAnimationContext());
    releaseInspectableBeltCamera();

    if (cinematicTourState.completed) {
      cinematicTourState.completed = false;
      clearCameraFollow(cameraFollowState);
      panel.setSelectedObject('free-flight');
      labelManager.setActiveLabel(null);
    }
  }

  configureLabelsForMode(cameraFollowState.mode);
  updateOrbitPresentation();
  updateBodyPresentation();
  updateFocusLighting(delta);

  composer.render();
  labelRenderer.render(scene, camera);
  labelManager.update({
    camera,
    activeId: cameraFollowState.targetId,
    hoveredId
  });

  requestAnimationFrame(tick);
}

tick();
