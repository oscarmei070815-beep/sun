import * as THREE from 'three';
import {
  createNebulaTexture,
  createStarSpriteTexture
} from '../utils/proceduralTexture.js';

function createLayer(count, radius, size, opacity, tint) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let index = 0; index < count; index += 1) {
    const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
    const theta = Math.random() * Math.PI * 2;
    const distance = radius * THREE.MathUtils.lerp(0.75, 1, Math.random());
    positions[index * 3] = Math.sin(phi) * Math.cos(theta) * distance;
    positions[index * 3 + 1] = Math.cos(phi) * distance;
    positions[index * 3 + 2] = Math.sin(phi) * Math.sin(theta) * distance;
    color.set(tint).offsetHSL(Math.random() * 0.03, 0, THREE.MathUtils.randFloatSpread(0.12));
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size,
      map: createStarSpriteTexture(),
      transparent: true,
      opacity,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
  );
}

function createNebula(position, scale, seed) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createNebulaTexture(256, seed),
      color: '#7be1ff',
      opacity: 0.34,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  sprite.position.copy(position);
  sprite.scale.setScalar(scale);
  return sprite;
}

export function createStarfield(options = {}) {
  const root = new THREE.Group();
  const count = options.count ?? 5200;
  root.add(
    createLayer(Math.floor(count * 0.55), 820, 2.0, 0.98, '#f8f8ff'),
    createLayer(Math.floor(count * 0.28), 1040, 2.7, 0.68, '#d6e5ff'),
    createLayer(Math.floor(count * 0.17), 1320, 3.6, 0.46, '#9bc7ff')
  );

  root.add(
    createNebula(new THREE.Vector3(-180, 110, -460), 360, 'nebula-a'),
    createNebula(new THREE.Vector3(240, -70, -520), 420, 'nebula-b'),
    createNebula(new THREE.Vector3(110, 180, -620), 300, 'nebula-c')
  );

  function update(delta) {
    root.rotation.y += delta * 0.004;
  }

  return {
    root,
    update
  };
}
