import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.rotateSpeed = 0.65;
  controls.zoomSpeed = 0.8;
  controls.panSpeed = 0.75;
  controls.minDistance = 6;
  controls.maxDistance = 1600;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.update();

  return controls;
}
