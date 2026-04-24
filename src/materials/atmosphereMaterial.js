import * as THREE from 'three';

const atmosphereVertexShader = `
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const atmosphereFragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uSunPosition;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 lightDir = normalize(uSunPosition - vWorldPosition);
    float rim = pow(1.0 - max(dot(viewDir, normalize(vWorldNormal)), 0.0), 2.4);
    float lit = pow(max(dot(normalize(vWorldNormal), lightDir), 0.0), 0.8);
    vec3 color = mix(uColorA, uColorB, lit);
    float alpha = clamp(rim * (0.35 + lit * 0.65), 0.0, 1.0);
    gl_FragColor = vec4(color, alpha * 0.8);
  }
`;

export function createAtmosphereMaterial(colorA = '#2d63ff', colorB = '#7bd4ff') {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) }
    },
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
}
