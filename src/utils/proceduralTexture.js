import * as THREE from 'three';
import { clamp, createSeededRandom, pick, randomRange } from './random.js';

const TAU = Math.PI * 2;

function toCanvas(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  draw(context, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return texture;
}

function createNoise(seed) {
  const random = createSeededRandom(seed);
  const gradients = new Map();

  function gradient(ix, iy) {
    const key = `${ix}:${iy}`;

    if (!gradients.has(key)) {
      const angle = random() * Math.PI * 2;
      gradients.set(key, [Math.cos(angle), Math.sin(angle)]);
    }

    return gradients.get(key);
  }

  function fade(value) {
    return value * value * value * (value * (value * 6 - 15) + 10);
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  return (x, y) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = x0 + 1;
    const y1 = y0 + 1;
    const sx = fade(x - x0);
    const sy = fade(y - y0);

    const g00 = gradient(x0, y0);
    const g10 = gradient(x1, y0);
    const g01 = gradient(x0, y1);
    const g11 = gradient(x1, y1);

    const dx0 = x - x0;
    const dy0 = y - y0;
    const dx1 = x - x1;
    const dy1 = y - y1;

    const n00 = g00[0] * dx0 + g00[1] * dy0;
    const n10 = g10[0] * dx1 + g10[1] * dy0;
    const n01 = g01[0] * dx0 + g01[1] * dy1;
    const n11 = g11[0] * dx1 + g11[1] * dy1;

    return lerp(lerp(n00, n10, sx), lerp(n01, n11, sx), sy);
  };
}

function fbm(noise, x, y, octaves = 4) {
  let amplitude = 0.5;
  let frequency = 1;
  let sum = 0;
  let totalAmplitude = 0;

  for (let octave = 0; octave < octaves; octave += 1) {
    sum += amplitude * noise(x * frequency, y * frequency);
    totalAmplitude += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }

  return sum / totalAmplitude;
}

function wrappedFbm(noise, u, v, radialScale = 2, verticalScale = 4, octaves = 4, phase = 0) {
  const angle = (u + phase) * TAU;
  const x = Math.cos(angle) * radialScale;
  const y = Math.sin(angle) * radialScale + v * verticalScale;
  return fbm(noise, x, y, octaves);
}

function drawPixelTexture({ width, height, seed, drawPixel }) {
  const noise = createNoise(seed);

  return toCanvas(width, height, (context) => {
    const image = context.createImageData(width, height);
    const { data } = image;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const u = x / width;
        const v = y / height;
        const value = drawPixel({
          x,
          y,
          u,
          v,
          noise,
          fbm: (nx, ny, octaves) => fbm(noise, nx, ny, octaves),
          wrappedFbm: (radialScale, verticalScale, octaves, phase = 0) =>
            wrappedFbm(noise, u, v, radialScale, verticalScale, octaves, phase)
        });

        data[index] = value[0];
        data[index + 1] = value[1];
        data[index + 2] = value[2];
        data[index + 3] = value[3] ?? 255;
      }
    }

    context.putImageData(image, 0, 0);
  });
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  const bigint = Number.parseInt(normalized, 16);

  return [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255
  ];
}

function blendColor(colorA, colorB, t) {
  return [
    Math.round(colorA[0] + (colorB[0] - colorA[0]) * t),
    Math.round(colorA[1] + (colorB[1] - colorA[1]) * t),
    Math.round(colorA[2] + (colorB[2] - colorA[2]) * t)
  ];
}

function gaussian(value, center, spread) {
  const distance = (value - center) / spread;
  return Math.exp(-(distance * distance));
}

function smoothstep(edge0, edge1, value) {
  const amount = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return amount * amount * (3 - 2 * amount);
}

function smoothBand(value, start, end, edge = 0.02) {
  return smoothstep(start, start + edge, value) * (1 - smoothstep(end - edge, end, value));
}

function applyIceCaps(v, rgb, strength = 1) {
  const cap = Math.max(0, Math.abs(v - 0.5) * 2 - 0.72) / 0.28;
  const amount = clamp(cap * strength, 0, 1);
  return blendColor(rgb, [245, 248, 255], amount);
}

export function createRockTexture(seed, resolution, palette) {
  const dark = hexToRgb(palette.dark);
  const mid = hexToRgb(palette.mid);
  const light = hexToRgb(palette.light);

  return drawPixelTexture({
    width: resolution,
    height: Math.floor(resolution / 2),
    seed,
    drawPixel: ({ u, v, fbm: layeredNoise }) => {
      const craterNoise = layeredNoise(u * 8, v * 8, 5) * 0.5 + 0.5;
      const broadNoise = layeredNoise(u * 2.4, v * 2.4, 3) * 0.5 + 0.5;
      const crater = layeredNoise(u * 18, v * 18, 2) * 0.5 + 0.5;
      const base = clamp(0.15 + broadNoise * 0.7 + craterNoise * 0.3 - crater * 0.22, 0, 1);
      const shade = base < 0.42
        ? blendColor(dark, mid, base / 0.42)
        : blendColor(mid, light, (base - 0.42) / 0.58);
      return [...applyIceCaps(v, shade, 0.25), 255];
    }
  });
}

export function createCloudTexture(resolution, seed = 'clouds') {
  return drawPixelTexture({
    width: resolution,
    height: Math.floor(resolution / 2),
    seed,
    drawPixel: ({ wrappedFbm: seamlessNoise }) => {
      const streaks = seamlessNoise(1.7, 16, 5, 0.13) * 0.5 + 0.5;
      const broad = seamlessNoise(0.75, 5.2, 3, 0.37) * 0.5 + 0.5;
      const fine = seamlessNoise(3.2, 22, 3, 0.62) * 0.5 + 0.5;
      const mask = clamp((streaks * 0.72 + broad * 0.54 + fine * 0.18 - 0.58) * 1.65, 0, 1);
      const alpha = Math.round(mask * 190);
      return [255, 255, 255, alpha];
    }
  });
}

export function createEarthDayTexture(resolution) {
  const oceanDeep = [22, 55, 118];
  const oceanLight = [76, 146, 214];
  const landDark = [74, 100, 54];
  const landMid = [104, 138, 72];
  const landLight = [166, 170, 119];

  return drawPixelTexture({
    width: resolution,
    height: Math.floor(resolution / 2),
    seed: 'earth-day',
    drawPixel: ({ u, v, wrappedFbm: seamlessNoise }) => {
      const lat = Math.abs(v - 0.5) * 2;
      const oceanMix = seamlessNoise(0.85, 3.2, 4, 0.08) * 0.5 + 0.5;
      let color = blendColor(oceanDeep, oceanLight, clamp(oceanMix, 0, 1));

      const continents = seamlessNoise(1.7, 3.4, 5, 0.24) * 0.5 + 0.5;
      const continentsFine = seamlessNoise(4.6, 8.5, 3, 0.61) * 0.5 + 0.5;
      const landMask = continents * 0.78 + continentsFine * 0.22;

      if (landMask > 0.58 || (u > 0.84 && landMask > 0.5) || (u < 0.08 && landMask > 0.52)) {
        const dryness = seamlessNoise(5.2, 12.2, 3, 0.43) * 0.5 + 0.5;
        color =
          dryness > 0.66
            ? blendColor(landMid, landLight, (dryness - 0.66) / 0.34)
            : blendColor(landDark, landMid, dryness / 0.66);
      }

      return [...applyIceCaps(v, color, lat > 0.68 ? 1 : 0.8), 255];
    }
  });
}

export function createEarthNightTexture(resolution) {
  return drawPixelTexture({
    width: resolution,
    height: Math.floor(resolution / 2),
    seed: 'earth-night',
    drawPixel: ({ wrappedFbm: seamlessNoise }) => {
      const continents = seamlessNoise(1.8, 3.2, 5, 0.24) * 0.5 + 0.5;
      const fine = seamlessNoise(7.5, 18, 2, 0.66) * 0.5 + 0.5;
      const landMask = continents > 0.56 ? 1 : 0;
      const lightMask = landMask * clamp((fine - 0.66) * 5.4, 0, 1);
      const pulse = seamlessNoise(10, 28, 3, 0.81) * 0.5 + 0.5;
      const intensity = Math.round(120 + 135 * pulse);
      return [intensity, Math.round(intensity * 0.74), 48, Math.round(lightMask * 255)];
    }
  });
}

export function createBandTexture({
  seed,
  resolution,
  colors,
  frequency = 14,
  turbulence = 0.18,
  storm
}) {
  const palette = colors.map(hexToRgb);

  return drawPixelTexture({
    width: resolution,
    height: Math.floor(resolution / 2),
    seed,
    drawPixel: ({ u, v, fbm: layeredNoise }) => {
      const lat = v;
      const band = Math.sin((lat + layeredNoise(u * 3, v * 8, 3) * turbulence) * frequency * Math.PI);
      const normalizedBand = band * 0.5 + 0.5;
      const paletteIndex = Math.min(
        palette.length - 2,
        Math.floor(normalizedBand * (palette.length - 1))
      );
      const localT = normalizedBand * (palette.length - 1) - paletteIndex;
      let color = blendColor(palette[paletteIndex], palette[paletteIndex + 1], localT);

      const wisps = layeredNoise(u * 12, v * 28, 4) * 0.5 + 0.5;
      color = blendColor(color, [255, 255, 255], clamp((wisps - 0.76) * 0.34, 0, 0.22));

      if (storm) {
        const dx = u - storm.u;
        const dy = v - storm.v;
        const ellipse = (dx * dx) / (storm.rx * storm.rx) + (dy * dy) / (storm.ry * storm.ry);

        if (ellipse < 1) {
          const edge = 1 - ellipse;
          color = blendColor(color, hexToRgb(storm.color), clamp(edge, 0, 1));
        }
      }

      return [...applyIceCaps(v, color, 0.12), 255];
    }
  });
}

export function createRingTexture(type, width = 1024, height = 32) {
  const isUranus = type === 'uranus';
  return toCanvas(width, height, (context) => {
    const image = context.createImageData(width, height);
    const { data } = image;
    const random = createSeededRandom(`ring-${type}`);
    const palette =
      isUranus
        ? [[92, 118, 132], [154, 184, 197], [222, 239, 246]]
        : [[54, 45, 36], [122, 103, 80], [188, 169, 133], [238, 229, 204]];

    for (let x = 0; x < width; x += 1) {
      const t = x / (width - 1);
      const coarse = Math.sin(t * Math.PI * (isUranus ? 28 : 16) + random() * 0.2) * 0.5 + 0.5;
      const fine = Math.sin(t * Math.PI * (isUranus ? 124 : 104) + random() * 0.5) * 0.5 + 0.5;
      let density;

      if (isUranus) {
        const epsilon = gaussian(t, 0.2, 0.011) * 0.34;
        const delta = gaussian(t, 0.36, 0.014) * 0.3;
        const main = gaussian(t, 0.52, 0.016) * 0.46;
        const outer = gaussian(t, 0.72, 0.018) * 0.28;
        const veil = gaussian(t, 0.52, 0.18) * 0.035;
        const cuts = gaussian(t, 0.28, 0.018) * 0.08 + gaussian(t, 0.62, 0.02) * 0.07;
        density = clamp(
          0.01 + veil + epsilon + delta + main + outer + coarse * 0.025 + fine * 0.018 - cuts,
          0.0,
          0.58
        );
      } else {
        const cRing = smoothBand(t, 0.04, 0.2, 0.024) * 0.46;
        const bRing = smoothBand(t, 0.235, 0.53, 0.026) * 0.84 + gaussian(t, 0.38, 0.12) * 0.22;
        const aRing = smoothBand(t, 0.6, 0.82, 0.024) * 0.78;
        const fRing = gaussian(t, 0.9, 0.028) * 0.42 + gaussian(t, 0.968, 0.007) * 0.32;
        const cassiniGap = smoothBand(t, 0.548, 0.586, 0.006) * 0.9 + gaussian(t, 0.566, 0.012) * 0.54;
        const innerDivision = gaussian(t, 0.218, 0.011) * 0.44;
        const enckeGap = gaussian(t, 0.742, 0.008) * 0.38;
        const outerGap = gaussian(t, 0.932, 0.018) * 0.32;
        const microBands = (coarse - 0.5) * 0.12 + (fine - 0.5) * 0.1 + (random() - 0.5) * 0.035;
        density = clamp(
          0.04 + cRing + bRing + aRing + fRing + microBands - cassiniGap - innerDivision - enckeGap - outerGap,
          0.0,
          1.0
        );
      }

      const brightness = density;
      const paletteIndex = Math.min(palette.length - 2, Math.floor(brightness * (palette.length - 1)));
      const localT = brightness * (palette.length - 1) - paletteIndex;
      const color = blendColor(palette[paletteIndex], palette[paletteIndex + 1], localT);
      const alpha =
        isUranus
          ? clamp(0.012 + brightness * 0.28, 0.012, 0.22)
          : clamp(0.045 + brightness * 0.9, 0.035, 0.98);

      for (let y = 0; y < height; y += 1) {
        const row = (y * width + x) * 4;
        data[row] = color[0];
        data[row + 1] = color[1];
        data[row + 2] = color[2];
        data[row + 3] = Math.round(alpha * 255);
      }
    }

    context.putImageData(image, 0, 0);
  });
}

export function createStarSpriteTexture(size = 64) {
  return toCanvas(size, size, (context, width, height) => {
    const gradient = context.createRadialGradient(
      width / 2,
      height / 2,
      width * 0.02,
      width / 2,
      height / 2,
      width / 2
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.22, 'rgba(255,249,230,0.9)');
    gradient.addColorStop(0.46, 'rgba(160,205,255,0.35)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  });
}

export function createNebulaTexture(size = 256, seed = 'nebula') {
  const random = createSeededRandom(seed);

  return toCanvas(size, size, (context, width, height) => {
    context.clearRect(0, 0, width, height);
    const palette = [
      'rgba(80, 180, 190, 0.18)',
      'rgba(122, 89, 209, 0.12)',
      'rgba(66, 116, 204, 0.1)'
    ];

    for (let blob = 0; blob < 12; blob += 1) {
      const x = randomRange(random, width * 0.15, width * 0.85);
      const y = randomRange(random, height * 0.15, height * 0.85);
      const radius = randomRange(random, width * 0.1, width * 0.28);
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, pick(random, palette));
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      context.globalCompositeOperation = 'lighter';
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    context.globalCompositeOperation = 'source-over';
  });
}
