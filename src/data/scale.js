export const SCALE = {
  sunRadius: 18,
  orbitDistanceUnit: 14.35,
  moonDistanceUnit: 3.2,
  bodySegments: 56,
  moonSegments: 36
};

export const VISUAL_SCALE = {
  sunRadius: SCALE.sunRadius,
  orbitDistanceUnit: SCALE.orbitDistanceUnit,
  moonDistanceUnit: SCALE.moonDistanceUnit
};

export const FOCUS_DISTANCE_MULTIPLIERS = {
  default: 5.2,
  sun: 3.8,
  jupiter: 6.0,
  saturn: 5.8,
  uranus: 5.9,
  neptune: 5.95,
  asteroidBelt: 4.5,
  kuiperVeil: 4.7
};

export function getFocusDistance(config) {
  const multiplier =
    config.focusDistanceMultiplier ??
    FOCUS_DISTANCE_MULTIPLIERS[config.id] ??
    FOCUS_DISTANCE_MULTIPLIERS.default;

  return Math.max(config.displayRadius * multiplier, 8);
}

export function scaleOrbitDistance(value) {
  return value * SCALE.orbitDistanceUnit;
}

export function scaleMoonDistance(value) {
  return value * SCALE.moonDistanceUnit;
}

export function scaleBodyRadius(value, multiplier = 1) {
  return value * multiplier;
}

export function scaleBeltRadius(innerRadius, outerRadius) {
  return {
    innerRadius: scaleOrbitDistance(innerRadius),
    outerRadius: scaleOrbitDistance(outerRadius)
  };
}
