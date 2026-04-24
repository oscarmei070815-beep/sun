import * as THREE from 'three';

export function createOrbitLine(radius, inclination = 0, color = '#54637d') {
  const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0);
  const points = curve
    .getPoints(180)
    .map((point) => new THREE.Vector3(point.x, 0, point.y));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.22
  });

  const line = new THREE.LineLoop(geometry, material);
  line.rotation.z = inclination;

  return line;
}
