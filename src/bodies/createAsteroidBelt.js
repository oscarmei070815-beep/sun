import * as THREE from 'three';

const transformHelper = new THREE.Object3D();
const tempColor = new THREE.Color();

function gaussian(value, center, spread) {
  const distance = (value - center) / spread;
  return Math.exp(-(distance * distance));
}

export function createAsteroidBelt(config, options = {}) {
  const count = options.count ?? config.count;
  const geometry = new THREE.DodecahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: config.color,
    roughness: 0.92,
    metalness: 0,
    emissive: '#4a3d2d',
    emissiveIntensity: 0.12,
    flatShading: true,
    vertexColors: true
  });
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const color = new THREE.Color();
  const data = [];
  const pointPositions = new Float32Array(count * 3);
  const pointColors = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const bandBias = Math.random();
    const radialT =
      Math.random() < 0.72
        ? THREE.MathUtils.clamp(0.5 + THREE.MathUtils.randFloatSpread(0.34), 0, 1)
        : Math.random();
    const radius = THREE.MathUtils.lerp(config.innerRadius, config.outerRadius, radialT);
    const baseAngle = Math.random() * Math.PI * 2;
    const clump =
      gaussian(Math.sin(baseAngle * 5.0 + radialT * 4.0), 0.55, 0.42) * 0.32 +
      gaussian(Math.cos(baseAngle * 9.0), -0.25, 0.5) * 0.18;
    const angle = baseAngle + THREE.MathUtils.randFloatSpread(0.012 + clump * 0.018);
    const height = THREE.MathUtils.randFloatSpread(config.thickness) * (0.18 + bandBias * 0.48);
    const baseScale = THREE.MathUtils.lerp(0.08, 0.44, Math.pow(Math.random(), 2.2));
    const rareLarge = Math.random() < 0.035 ? THREE.MathUtils.lerp(0.42, 0.92, Math.random()) : 0;
    const scale = Math.max(baseScale, rareLarge);
    const squash = {
      x: THREE.MathUtils.lerp(0.7, 1.55, Math.random()),
      y: THREE.MathUtils.lerp(0.42, 1.0, Math.random()),
      z: THREE.MathUtils.lerp(0.7, 1.65, Math.random())
    };
    const orbitSpeed = config.rotationSpeed * THREE.MathUtils.lerp(0.75, 1.3, Math.random());
    const spinSpeed = THREE.MathUtils.lerp(-1.8, 1.8, Math.random());
    const tilt = new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    data.push({ radius, angle, height, scale, squash, orbitSpeed, spinSpeed, tilt });

    const brightness = THREE.MathUtils.lerp(0.54, 0.96, Math.pow(Math.random(), 0.72));
    const warmth = THREE.MathUtils.lerp(0.05, 0.12, Math.random());
    color.setHSL(warmth, THREE.MathUtils.lerp(0.05, 0.18, Math.random()), brightness);
    tempColor.set('#ffffff').lerp(color, THREE.MathUtils.lerp(0.72, 0.96, Math.random()));
    color.copy(tempColor);
    mesh.setColorAt(index, color);

    pointPositions[index * 3] = Math.cos(angle) * radius;
    pointPositions[index * 3 + 1] = height;
    pointPositions[index * 3 + 2] = Math.sin(angle) * radius;
    pointColors[index * 3] = color.r;
    pointColors[index * 3 + 1] = color.g;
    pointColors[index * 3 + 2] = color.b;
  }
  mesh.instanceColor.needsUpdate = true;

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  pointGeometry.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));
  const pointCloud = new THREE.Points(
    pointGeometry,
    new THREE.PointsMaterial({
      size: 0.72,
      color: '#fff2d7',
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      sizeAttenuation: true
    })
  );

  const root = new THREE.Group();
  const labelAnchor = new THREE.Object3D();
  labelAnchor.position.set(config.orbitRadius + 6, config.thickness * 0.3, 0);
  root.add(labelAnchor);
  root.add(pointCloud, mesh);

  function update(delta, elapsed) {
    const positions = pointGeometry.attributes.position.array;

    for (let index = 0; index < count; index += 1) {
      const asteroid = data[index];
      const angle = asteroid.angle + elapsed * asteroid.orbitSpeed;
      const pulse = Math.sin(elapsed * asteroid.spinSpeed + index) * 0.12;
      const x = Math.cos(angle) * asteroid.radius;
      const y = asteroid.height + pulse;
      const z = Math.sin(angle) * asteroid.radius;
      transformHelper.position.set(
        x,
        y,
        z
      );
      transformHelper.rotation.set(
        asteroid.tilt.x + elapsed * asteroid.spinSpeed * 0.6,
        asteroid.tilt.y + elapsed * asteroid.spinSpeed,
        asteroid.tilt.z + elapsed * asteroid.spinSpeed * 0.3
      );
      transformHelper.scale.set(
        asteroid.scale * asteroid.squash.x,
        asteroid.scale * asteroid.squash.y,
        asteroid.scale * asteroid.squash.z
      );
      transformHelper.updateMatrix();
      mesh.setMatrixAt(index, transformHelper.matrix);

      positions[index * 3] = x;
      positions[index * 3 + 1] = y;
      positions[index * 3 + 2] = z;
    }

    mesh.instanceMatrix.needsUpdate = true;
    pointGeometry.attributes.position.needsUpdate = true;
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
    mesh,
    labelAnchor,
    focusTarget: labelAnchor,
    orbitLine: null,
    update
  };
}
