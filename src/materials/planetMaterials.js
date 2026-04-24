import * as THREE from 'three';
import {
  createBandTexture,
  createRockTexture
} from '../utils/proceduralTexture.js';

const ROCK_PALETTES = {
  mercury: {
    dark: '#4f4d50',
    mid: '#888284',
    light: '#bdb8b1'
  },
  moon: {
    dark: '#67686d',
    mid: '#a4a29b',
    light: '#e1ddd6'
  },
  phobos: {
    dark: '#5d4c41',
    mid: '#8c7766',
    light: '#b9a48c'
  },
  deimos: {
    dark: '#6c5d50',
    mid: '#a79583',
    light: '#c9baa6'
  },
  mars: {
    dark: '#7a2e1d',
    mid: '#b55533',
    light: '#d79860'
  },
  io: {
    dark: '#90703a',
    mid: '#d1ac58',
    light: '#ecd58c'
  },
  europa: {
    dark: '#8695a6',
    mid: '#bcccdc',
    light: '#edf4ff'
  },
  ganymede: {
    dark: '#5b5f59',
    mid: '#8e9489',
    light: '#c0c4bc'
  },
  callisto: {
    dark: '#423f3b',
    mid: '#706a62',
    light: '#b3ab9d'
  },
  titan: {
    dark: '#6e4f2c',
    mid: '#b28145',
    light: '#d8b06f'
  },
  enceladus: {
    dark: '#7d95aa',
    mid: '#d3e6f4',
    light: '#f6fbff'
  },
  rhea: {
    dark: '#718293',
    mid: '#b6c0cc',
    light: '#e2e9f0'
  },
  iapetus: {
    dark: '#312a22',
    mid: '#c6b9a2',
    light: '#ede5d8'
  },
  titania: {
    dark: '#8b9ca6',
    mid: '#cdd6dc',
    light: '#eff4f7'
  },
  oberon: {
    dark: '#61574d',
    mid: '#9f978d',
    light: '#ddd4cb'
  },
  triton: {
    dark: '#6f87a4',
    mid: '#c5d2e2',
    light: '#edf5fb'
  },
  pluto: {
    dark: '#5f554f',
    mid: '#a89683',
    light: '#d8c7b6'
  },
  charon: {
    dark: '#777474',
    mid: '#bdb9b7',
    light: '#e5e1df'
  }
};

const BAND_BUILDERS = {
  venus: (resolution) =>
    createBandTexture({
      seed: 'venus',
      resolution,
      colors: ['#7d6332', '#d9c081', '#efe1b1', '#c8ac6a'],
      frequency: 10,
      turbulence: 0.08
    }),
  jupiter: (resolution) =>
    createBandTexture({
      seed: 'jupiter',
      resolution,
      colors: ['#58351f', '#9a6542', '#e0ac74', '#bf7b57', '#f3ddbf', '#77503a'],
      frequency: 20,
      turbulence: 0.14,
      storm: {
        u: 0.74,
        v: 0.57,
        rx: 0.1,
        ry: 0.07,
        color: '#d58557'
      }
    }),
  saturn: (resolution) =>
    createBandTexture({
      seed: 'saturn',
      resolution,
      colors: ['#6d5e47', '#b99563', '#e7d2aa', '#d3ae73', '#f4e8d0'],
      frequency: 15,
      turbulence: 0.06
    }),
  uranus: (resolution) =>
    createBandTexture({
      seed: 'uranus',
      resolution,
      colors: ['#7fb9c7', '#a9dbe3', '#d7f3f7', '#b7dfe6'],
      frequency: 7,
      turbulence: 0.03
    }),
  neptune: (resolution) =>
    createBandTexture({
      seed: 'neptune',
      resolution,
      colors: ['#142a66', '#2448a4', '#5478ff', '#86a4ff'],
      frequency: 11,
      turbulence: 0.07
    })
};

function createMaterial(map, options = {}) {
  return new THREE.MeshStandardMaterial({
    map,
    roughness: options.roughness ?? 0.96,
    metalness: options.metalness ?? 0.02,
    color: options.color ?? 0xffffff
  });
}

export function createPlanetMaterial(appearance, options = {}) {
  const resolution = options.textureResolution ?? 1024;

  if (appearance in ROCK_PALETTES) {
    return createMaterial(createRockTexture(appearance, resolution, ROCK_PALETTES[appearance]), {
      roughness: appearance === 'europa' || appearance === 'enceladus' ? 0.65 : 0.92
    });
  }

  if (appearance in BAND_BUILDERS) {
    return createMaterial(BAND_BUILDERS[appearance](resolution), {
      roughness:
        appearance === 'venus'
          ? 0.84
          : appearance === 'jupiter'
            ? 0.62
            : appearance === 'saturn'
              ? 0.68
              : appearance === 'uranus'
                ? 0.58
                : appearance === 'neptune'
                  ? 0.63
                  : 0.78
    });
  }

  return new THREE.MeshStandardMaterial({
    color: options.color ?? '#cccccc',
    roughness: 0.9,
    metalness: 0.02
  });
}
