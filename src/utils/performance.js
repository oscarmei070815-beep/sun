export function detectPerformanceProfile() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mobile = width < 768;
  const lowPixelBudget = width * height > 2_000_000;

  return {
    mobile,
    asteroidCount: mobile ? 2200 : 4200,
    kuiperCount: mobile ? 1100 : 1800,
    starCount: mobile ? 3000 : 6200,
    bloomStrength: lowPixelBudget ? 1.12 : 1.38,
    textureResolution: mobile ? 512 : 1024
  };
}
