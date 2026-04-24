import { createOrbitalBody } from './createPlanet.js';

export function createMoon(config, options = {}) {
  return createOrbitalBody(config, {
    ...options,
    segments: options.segments ?? 32
  });
}
