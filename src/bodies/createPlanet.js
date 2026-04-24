import * as THREE from 'three';
import { createAtmosphereMaterial } from '../materials/atmosphereMaterial.js';
import { createEarthMaterials } from '../materials/earthMaterial.js';
import { createPlanetMaterial } from '../materials/planetMaterials.js';
import { createRing } from './createRing.js';

function createAtmosphereMesh(radius, colors) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.08, 48, 48),
    createAtmosphereMaterial(colors[0], colors[1])
  );
}

function createOrbitalScaffold(config) {
  const orbitPivot = new THREE.Group();
  orbitPivot.name = `${config.id}-pivot`;
  orbitPivot.rotation.y = config.orbitPhase ?? 0;
  orbitPivot.rotation.z = config.orbitInclination ?? 0;

  const translationGroup = new THREE.Group();
  translationGroup.name = `${config.id}-translation`;
  translationGroup.position.x = config.orbitRadius ?? 0;
  orbitPivot.add(translationGroup);

  const meshGroup = new THREE.Group();
  meshGroup.name = `${config.id}-meshGroup`;
  meshGroup.rotation.z = config.axialTilt ?? 0;
  translationGroup.add(meshGroup);

  return {
    root: orbitPivot,
    orbitPivot,
    translationGroup,
    meshGroup
  };
}

export function createOrbitalBody(config, options = {}) {
  const segments = options.segments ?? 56;
  const geometry = new THREE.SphereGeometry(config.displayRadius, segments, segments);
  const {
    root,
    orbitPivot,
    translationGroup,
    meshGroup
  } = createOrbitalScaffold(config);

  let mesh;
  let ring = null;
  let cloudMesh = null;
  let atmosphereMesh = null;
  let nightLightsMesh = null;

  if (config.appearance === 'earth') {
    const earthMaterials = createEarthMaterials({
      textureResolution: options.textureResolution
    });

    mesh = new THREE.Mesh(geometry, earthMaterials.surfaceMaterial);
    nightLightsMesh = new THREE.Mesh(
      new THREE.SphereGeometry(config.displayRadius * 1.006, segments, segments),
      earthMaterials.nightLightsMaterial
    );
    cloudMesh = new THREE.Mesh(
      new THREE.SphereGeometry(config.displayRadius * 1.02, segments, segments),
      earthMaterials.cloudMaterial
    );
    atmosphereMesh = createAtmosphereMesh(config.displayRadius, ['#2044ac', '#68caff']);
    meshGroup.add(mesh, nightLightsMesh, cloudMesh, atmosphereMesh);
  } else {
    mesh = new THREE.Mesh(
      geometry,
      createPlanetMaterial(config.appearance, {
        color: config.color,
        textureResolution: options.textureResolution
      })
    );
    meshGroup.add(mesh);

    if (config.hasAtmosphere && config.appearance !== 'earth') {
      const colors =
        config.appearance === 'venus'
          ? ['#796134', '#f0d391']
          : config.appearance === 'uranus'
            ? ['#6a9ca8', '#d2f3f8']
            : ['#2f4f93', '#7ec7ff'];
      atmosphereMesh = createAtmosphereMesh(config.displayRadius, colors);
      meshGroup.add(atmosphereMesh);
    }
  }

  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.userData.bodyId = config.id;

  if (config.ring) {
    ring = createRing(config.ring, config.displayRadius);
    meshGroup.add(ring.mesh);
  }

  const labelAnchor = new THREE.Object3D();
  labelAnchor.position.set(0, config.displayRadius * 1.35, 0);
  meshGroup.add(labelAnchor);

  function update(delta, elapsed) {
    if (cloudMesh) {
      cloudMesh.rotation.y = mesh.rotation.y * 1.08 + elapsed * 0.06;
    }

    if (nightLightsMesh) {
      nightLightsMesh.rotation.y = mesh.rotation.y;
    }

    if (ring) {
      ring.updateLighting();
    }

    if (mesh.material.uniforms?.uTime) {
      mesh.material.uniforms.uTime.value = elapsed;
    }
  }

  return {
    ...config,
    id: config.id,
    config,
    type: config.type,
    name: config.name,
    label: config.label,
    root,
    object3d: translationGroup,
    orbitPivot,
    translationGroup,
    meshGroup,
    mesh,
    ringMesh: ring?.mesh ?? null,
    labelAnchor,
    focusTarget: translationGroup,
    orbitLine: null,
    update
  };
}

export function createPlanet(config, options = {}) {
  return createOrbitalBody(config, options);
}
