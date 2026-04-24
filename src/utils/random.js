export function hashString(input) {
  let hash = 1779033703 ^ input.length;

  for (let index = 0; index < input.length; index += 1) {
    hash = Math.imul(hash ^ input.charCodeAt(index), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }

  return () => {
    hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
    hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
    return (hash ^= hash >>> 16) >>> 0;
  };
}

export function createSeededRandom(seed) {
  const nextHash = hashString(seed);
  let state = nextHash();

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function randomRange(random, min, max) {
  return min + (max - min) * random();
}

export function randomInt(random, min, max) {
  return Math.floor(randomRange(random, min, max + 1));
}

export function pick(random, values) {
  return values[Math.floor(random() * values.length)];
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export const createRng = createSeededRandom;

export function randomSign(random) {
  return random() < 0.5 ? -1 : 1;
}

export function randomChance(random, probability) {
  return random() < probability;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function inverseLerp(a, b, value) {
  if (a === b) {
    return 0;
  }
  return clamp((value - a) / (b - a), 0, 1);
}

export function smoothstep(min, max, value) {
  const t = inverseLerp(min, max, value);
  return t * t * (3 - 2 * t);
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + (outMax - outMin) * inverseLerp(inMin, inMax, value);
}

export function fract(value) {
  return value - Math.floor(value);
}
