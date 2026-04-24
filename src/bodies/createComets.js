import * as THREE from 'three';

function createComet(color) {
  const group = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.45, 12, 12),
    new THREE.MeshBasicMaterial({ color })
  );
  const tailPoints = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-2.5, 0.14, 0),
    new THREE.Vector3(-5.4, 0.1, 0),
    new THREE.Vector3(-8.2, 0.06, 0)
  ];
  const tail = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(tailPoints),
    new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.32
    })
  );
  group.add(head, tail);
  return group;
}

export function createComets() {
  const root = new THREE.Group();
  const comets = [
    {
      group: createComet('#a9d2ff'),
      radiusX: 210,
      radiusZ: 162,
      height: 22,
      speed: 0.06,
      phase: 0.4
    },
    {
      group: createComet('#ffd6a8'),
      radiusX: 172,
      radiusZ: 232,
      height: -18,
      speed: 0.05,
      phase: 2.2
    }
  ];

  for (const comet of comets) {
    root.add(comet.group);
  }

  function update(_delta, elapsed) {
    for (const comet of comets) {
      const angle = elapsed * comet.speed + comet.phase;
      const x = Math.cos(angle) * comet.radiusX;
      const z = Math.sin(angle) * comet.radiusZ;
      const nextAngle = angle + 0.02;
      const nextX = Math.cos(nextAngle) * comet.radiusX;
      const nextZ = Math.sin(nextAngle) * comet.radiusZ;
      comet.group.position.set(x, comet.height + Math.sin(angle * 2) * 5, z);
      comet.group.lookAt(nextX, comet.height, nextZ);
    }
  }

  return {
    root,
    update
  };
}
