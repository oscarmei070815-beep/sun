import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export function createComposer(renderer, scene, camera, options = {}) {
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    options.strength ?? 1.38,
    options.radius ?? 0.48,
    options.threshold ?? 0.38
  );

  composer.addPass(renderPass);
  composer.addPass(bloomPass);

  return {
    composer,
    bloomPass
  };
}
