import * as THREE from 'three';
import { createStarSpriteTexture } from '../utils/proceduralTexture.js';

export function createKuiperVeil(config, options = {}) {
  const count = options.count ?? config.count;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = THREE.MathUtils.lerp(config.innerRadius, config.outerRadius, Math.random());
    const height = (Math.random() - 0.5) * config.thickness;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = height;
    positions[index * 3 + 2] = Math.sin(angle) * radius;
    color.setHSL(0.56 + Math.random() * 0.06, 0.4, THREE.MathUtils.lerp(0.45, 0.8, Math.random()));
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.95,
    map: createStarSpriteTexture(48),
    transparent: true,
    opacity: 0.38,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const points = new THREE.Points(geometry, material);
  const root = new THREE.Group();
  root.add(points);

  const labelAnchor = new THREE.Object3D();
  labelAnchor.position.set(config.orbitRadius, config.thickness * 0.25, 0);
  root.add(labelAnchor);

  function update(delta) {
    root.rotation.y += config.rotationSpeed * delta;
  }

  return {
    ...config,
    id: config.id,
    config,
    type: config.type,
    name: config.name,
    label: config.label,
    root,
    object3d: labelAnchor,
    orbitPivot: root,
    translationGroup: root,
    meshGroup: root,
    mesh: points,
    labelAnchor,
    focusTarget: labelAnchor,
    orbitLine: null,
    update
  };
}
