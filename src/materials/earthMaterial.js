import * as THREE from 'three';
import {
  createCloudTexture,
  createEarthDayTexture,
  createEarthNightTexture
} from '../utils/proceduralTexture.js';

const nightVertexShader = `
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const nightFragmentShader = `
  uniform sampler2D uNightMap;
  uniform vec3 uSunPosition;
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec4 map = texture2D(uNightMap, vUv);
    vec3 lightDir = normalize(uSunPosition - vWorldPosition);
    float lit = max(dot(normalize(vWorldNormal), lightDir), 0.0);
    float night = smoothstep(0.4, 0.02, lit);
    float alpha = map.a * night * 0.95;
    gl_FragColor = vec4(map.rgb, alpha);
  }
`;

export function createEarthMaterials(options = {}) {
  const resolution = options.textureResolution ?? 1024;
  const dayMap = createEarthDayTexture(resolution);
  const cloudMap = createCloudTexture(resolution, 'earth-clouds');
  const nightMap = createEarthNightTexture(resolution);

  const surfaceMaterial = new THREE.MeshStandardMaterial({
    map: dayMap,
    roughness: 0.78,
    metalness: 0.02,
    color: '#f1f7ff'
  });

  const cloudMaterial = new THREE.MeshStandardMaterial({
    map: cloudMap,
    alphaMap: cloudMap,
    transparent: true,
    opacity: 0.58,
    alphaTest: 0.035,
    depthWrite: false,
    roughness: 0.24,
    metalness: 0.0
  });

  const nightLightsMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uNightMap: { value: nightMap },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) }
    },
    vertexShader: nightVertexShader,
    fragmentShader: nightFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  return {
    surfaceMaterial,
    cloudMaterial,
    nightLightsMaterial
  };
}
