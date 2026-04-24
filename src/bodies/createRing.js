import * as THREE from 'three';
import { createRingMaterial } from '../materials/ringMaterial.js';

const localSun = new THREE.Vector3();

export function createRing(config, planetRadius) {
  const geometry = new THREE.RingGeometry(
    config.innerRadius,
    config.outerRadius,
    160,
    8
  );
  geometry.rotateX(-Math.PI / 2);

  const material = createRingMaterial({
    type: config.textureType,
    innerRadius: config.innerRadius,
    outerRadius: config.outerRadius,
    planetRadius,
    opacity: config.opacity
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `${config.textureType}-ring`;
  mesh.renderOrder = 2;

  function updateLighting() {
    mesh.worldToLocal(localSun.set(0, 0, 0));
    material.uniforms.uShadowDirection.value.set(-localSun.x, -localSun.z).normalize();
    material.uniforms.uLightPosition.value.set(0, 0, 0);
  }

  return {
    mesh,
    updateLighting
  };
}
