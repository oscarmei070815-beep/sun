import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#050914');
  scene.fog = new THREE.FogExp2('#071226', 0.00012);

  return scene;
}
