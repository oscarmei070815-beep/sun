import * as THREE from 'three';
import { createSunMaterial } from '../materials/sunMaterial.js';

const coronaVertexShader = `
  varying vec3 vLocalPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vLocalPosition = position;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vViewNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const coronaFragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uPulse;
  varying vec3 vLocalPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vec3 dir = normalize(vLocalPosition);
    float rim = 1.0 - abs(dot(normalize(vViewNormal), normalize(vViewDirection)));
    float feather = pow(smoothstep(0.02, 0.96, rim), 1.7);
    float rays = sin(atan(dir.z, dir.x) * 18.0 + uTime * uPulse) * 0.5 + 0.5;
    float breathing = sin((dir.y * 7.0 + dir.x * 4.0) + uTime * (uPulse * 0.7)) * 0.5 + 0.5;
    float wisps = 0.82 + rays * 0.1 + breathing * 0.08;
    vec3 color = uColor * (0.62 + feather * 0.38);

    gl_FragColor = vec4(color, uOpacity * feather * wisps);
  }
`;

function createCoronaLayer(radius, color, opacity, segments = 96, pulse = 0.25) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: opacity },
        uTime: { value: 0 },
        uPulse: { value: pulse }
      },
      vertexShader: coronaVertexShader,
      fragmentShader: coronaFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    })
  );
}

function createProminence(radius, offset, color) {
  const points = [];
  const count = 48;
  const height = radius * 0.22;
  const arcRadius = radius * 1.05;

  for (let index = 0; index < count; index += 1) {
    const t = index / (count - 1);
    const angle = offset + (t - 0.5) * 0.62;
    const arch = Math.sin(t * Math.PI) * height;
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * arcRadius,
        arch,
        Math.sin(angle) * arcRadius
      )
    );
  }

  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending
    })
  );
}

export function createSun(config) {
  const group = new THREE.Group();
  const meshGroup = new THREE.Group();
  group.add(meshGroup);

  const geometry = new THREE.SphereGeometry(config.displayRadius, 96, 96);
  const material = createSunMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'sun';
  meshGroup.add(mesh);

  const coronaA = createCoronaLayer(config.displayRadius * 1.1, '#fff2bd', 0.3, 96, 0.32);
  const coronaB = createCoronaLayer(config.displayRadius * 1.24, '#ffc861', 0.2, 96, 0.24);
  const coronaC = createCoronaLayer(config.displayRadius * 1.45, '#ff873c', 0.12, 96, 0.18);
  const coronaD = createCoronaLayer(config.displayRadius * 1.72, '#f45a2e', 0.07, 96, 0.13);
  meshGroup.add(coronaA, coronaB, coronaC, coronaD);

  const prominenceGroup = new THREE.Group();
  prominenceGroup.add(
    createProminence(config.displayRadius, 0.35, '#ff7567'),
    createProminence(config.displayRadius, 2.55, '#ff8c78'),
    createProminence(config.displayRadius, 4.6, '#ff6144')
  );
  meshGroup.add(prominenceGroup);

  const light = new THREE.PointLight('#fff1c8', 18, 820, 0.85);
  light.position.set(0, 0, 0);
  group.add(light);

  const labelAnchor = new THREE.Object3D();
  labelAnchor.position.set(0, config.displayRadius * 1.5, 0);
  group.add(labelAnchor);

  function update(delta, elapsed) {
    material.uniforms.uTime.value = elapsed;
    coronaA.material.uniforms.uTime.value = elapsed;
    coronaB.material.uniforms.uTime.value = elapsed;
    coronaC.material.uniforms.uTime.value = elapsed;
    coronaD.material.uniforms.uTime.value = elapsed;
    coronaA.scale.setScalar(1 + Math.sin(elapsed * 0.95) * 0.02);
    coronaB.scale.setScalar(1 + Math.sin(elapsed * 0.74 + 1.2) * 0.03);
    coronaC.scale.setScalar(1 + Math.sin(elapsed * 0.58 + 2.0) * 0.04);
    coronaD.scale.setScalar(1 + Math.sin(elapsed * 0.42 + 2.8) * 0.05);
    prominenceGroup.rotation.y = elapsed * 0.08;
  }

  return {
    ...config,
    id: config.id,
    config,
    type: config.type,
    name: config.name,
    label: config.label,
    root: group,
    object3d: group,
    orbitPivot: group,
    translationGroup: group,
    meshGroup,
    mesh,
    labelAnchor,
    focusTarget: group,
    orbitLine: null,
    update
  };
}
