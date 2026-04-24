import * as THREE from 'three';

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    8000
  );

  camera.position.set(-140, 68, 160);
  camera.lookAt(0, 0, 0);

  return camera;
}
