import * as THREE from 'three';
import { createRingTexture } from '../utils/proceduralTexture.js';

const ringVertexShader = `
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vLocalPosition;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vLocalPosition = position;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const ringFragmentShader = `
  uniform sampler2D uBandTexture;
  uniform vec3 uLightPosition;
  uniform vec2 uShadowDirection;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  uniform float uPlanetRadius;
  uniform float uOpacity;
  uniform float uRingKind;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vLocalPosition;

  float radialGaussian(float value, float center, float spread) {
    float distance = (value - center) / spread;
    return exp(-(distance * distance));
  }

  void main() {
    float radius = length(vLocalPosition.xz);
    float radial = clamp((radius - uInnerRadius) / (uOuterRadius - uInnerRadius), 0.0, 1.0);
    vec4 band = texture2D(uBandTexture, vec2(radial, 0.5));
    float kind = clamp(uRingKind, 0.0, 1.0);

    vec3 lightDir = normalize(uLightPosition - vWorldPosition);
    float diffuse = clamp(dot(normalize(vWorldNormal), lightDir) * 0.82 + 0.28, 0.1, 1.0);
    diffuse = mix(diffuse, diffuse * 0.8 + 0.08, kind);

    vec2 localDirection = normalize(vLocalPosition.xz + vec2(0.0001));
    vec2 shadowDirection = normalize(uShadowDirection + vec2(0.0001));
    float alignment = smoothstep(0.15, 0.9, dot(localDirection, shadowDirection));
    float radiusMask = 1.0 - smoothstep(uPlanetRadius * 0.25, uPlanetRadius * 1.9, radius);
    float shadow = mix(1.0, mix(0.34, 0.56, kind), alignment * radiusMask);
    float bandLum = dot(band.rgb, vec3(0.299, 0.587, 0.114));
    float contrast = mix(1.45, 0.88, kind);
    float density = clamp(0.5 + (bandLum - 0.5) * contrast, 0.0, 1.0);
    float saturn = 1.0 - kind;
    float cassiniGap = radialGaussian(radial, 0.566, 0.012) * 0.9 + radialGaussian(radial, 0.582, 0.006) * 0.42;
    float innerGap = radialGaussian(radial, 0.218, 0.011) * 0.42;
    float enckeGap = radialGaussian(radial, 0.742, 0.007) * 0.34;
    float darkGap = clamp((cassiniGap + innerGap + enckeGap) * saturn, 0.0, 1.0);
    density = clamp(density - darkGap * 0.4, 0.0, 1.0);

    vec3 tint = mix(vec3(0.94, 0.82, 0.65), vec3(0.84, 0.92, 0.97), kind);
    vec3 color = mix(band.rgb, band.rgb * tint, 0.36);
    color *= mix(0.84 + density * 0.34, 0.9 + density * 0.1, kind);
    color *= diffuse * shadow * mix(1.0, 0.9, kind);
    color *= 1.0 - darkGap * 0.68;

    float opacity = band.a * uOpacity * mix(1.0, 0.52, kind);
    opacity *= mix(0.78 + density * 0.42, 0.52 + density * 0.16, kind);
    opacity *= 1.0 - darkGap * 0.64;

    gl_FragColor = vec4(color, opacity);
  }
`;

export function createRingMaterial({
  type = 'saturn',
  innerRadius,
  outerRadius,
  planetRadius,
  opacity = 1
}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uBandTexture: { value: createRingTexture(type) },
      uLightPosition: { value: new THREE.Vector3(0, 0, 0) },
      uShadowDirection: { value: new THREE.Vector2(1, 0) },
      uInnerRadius: { value: innerRadius },
      uOuterRadius: { value: outerRadius },
      uPlanetRadius: { value: planetRadius },
      uOpacity: { value: opacity },
      uRingKind: { value: type === 'uranus' ? 1 : 0 }
    },
    vertexShader: ringVertexShader,
    fragmentShader: ringFragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  });
}
