import * as THREE from 'three';

const projected = new THREE.Vector3();

export function worldToScreen(object3D, camera, width, height) {
  projected.setFromMatrixPosition(object3D.matrixWorld).project(camera);

  return {
    x: (projected.x * 0.5 + 0.5) * width,
    y: (projected.y * -0.5 + 0.5) * height,
    z: projected.z
  };
}
