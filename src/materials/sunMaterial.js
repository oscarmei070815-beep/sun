import * as THREE from 'three';

const sunVertexShader = `
  varying vec3 vPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vPosition = position;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vViewNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const sunFragmentShader = `
  uniform float uTime;
  varying vec3 vPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float n00 = mix(n000, n100, f.x);
    float n10 = mix(n010, n110, f.x);
    float n01 = mix(n001, n101, f.x);
    float n11 = mix(n011, n111, f.x);
    float n0 = mix(n00, n10, f.y);
    float n1 = mix(n01, n11, f.y);
    return mix(n0, n1, f.z);
  }

  float fbm(vec3 p) {
    float total = 0.0;
    float amplitude = 0.55;
    float frequency = 1.0;
    for (int i = 0; i < 5; i++) {
      total += noise(p * frequency) * amplitude;
      amplitude *= 0.55;
      frequency *= 2.0;
    }
    return total;
  }

  float ridgedFbm(vec3 p) {
    float ridge = 1.0 - abs(fbm(p) * 1.72 - 0.86);
    return clamp(ridge, 0.0, 1.0);
  }

  void main() {
    vec3 dir = normalize(vPosition);
    float lat = dir.y * 0.5 + 0.5;
    float differentialSpin = uTime * mix(0.18, 0.34, smoothstep(-0.7, 0.82, dir.y));
    vec3 warp = vec3(
      fbm(dir * 2.2 + vec3(0.0, uTime * 0.06, differentialSpin)),
      fbm(dir.zxy * 2.7 - vec3(uTime * 0.05, 0.0, differentialSpin * 0.7)),
      fbm(dir.yzx * 3.1 + vec3(differentialSpin * 0.6, uTime * 0.04, 0.0))
    ) - 0.58;
    vec3 flow = normalize(dir + warp * 0.3);

    float swirl = sin((flow.x + flow.z) * 8.8 + differentialSpin * 2.8) * 0.5 + 0.5;
    float plasma = fbm(flow * 3.8 + vec3(0.0, uTime * 0.16, uTime * 0.1));
    float convection = fbm(flow.zyx * 7.6 - vec3(uTime * 0.3, 0.0, uTime * 0.2));
    float filaments = ridgedFbm(flow * 14.0 + vec3(uTime * 0.16, uTime * 0.08, -uTime * 0.11));
    float granules = fbm(flow * 19.0 - vec3(uTime * 0.24, uTime * 0.15, 0.0));
    float cellWalls = smoothstep(0.38, 0.82, filaments * 0.62 + (1.0 - granules) * 0.34);
    float spotField = fbm(flow * 2.1 + vec3(1.7, -uTime * 0.035, 0.6));
    float spotDetail = fbm(flow * 8.8 - vec3(uTime * 0.09, 0.3, uTime * 0.06));
    float sunspots = smoothstep(0.78, 1.04, spotField + spotDetail * 0.34) * smoothstep(0.08, 0.42, 1.0 - abs(dir.y));
    float heat = clamp(
      plasma * 0.48 + convection * 0.3 + swirl * 0.18 + filaments * 0.12 - cellWalls * 0.2 - sunspots * 0.36,
      0.0,
      1.0
    );
    float flare = smoothstep(0.45, 0.92, swirl * 0.62 + filaments * 0.38);
    float ember = smoothstep(0.22, 0.84, 1.0 - granules);

    vec3 color = mix(vec3(0.34, 0.055, 0.012), vec3(0.86, 0.24, 0.035), smoothstep(0.08, 0.58, heat));
    color = mix(color, vec3(1.0, 0.52, 0.08), smoothstep(0.42, 0.88, heat) * 0.52);
    color = mix(color, vec3(1.0, 0.78, 0.25), flare * 0.22);
    color = mix(color, vec3(0.17, 0.028, 0.008), clamp(cellWalls * 0.32 + sunspots * 0.58, 0.0, 0.72));
    color += vec3(0.11, 0.035, 0.0) * ember * (1.0 - sunspots) * 0.46;
    color += vec3(0.1, 0.03, 0.0) * pow(max(swirl, 0.0), 2.2) * 0.36;

    float rim = pow(1.0 - clamp(dot(normalize(vViewNormal), normalize(vViewDirection)), 0.0, 1.0), 1.8);
    color += vec3(0.18, 0.065, 0.012) * rim * 0.55;
    color *= 0.72 + heat * 0.24 + rim * 0.06;
    color = clamp(color, 0.0, 0.9);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function createSunMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: sunVertexShader,
    fragmentShader: sunFragmentShader
  });
}
