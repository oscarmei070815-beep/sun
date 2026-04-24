export const BODY_DESCRIPTIONS = {
  sun: 'A living procedural star: layered plasma texture, additive corona, looping prominences, and bloom-heavy lens glow. The light source for the whole scene sits at its core.',
  mercury: 'A scorched rocky planet with cratered terrain, sharp contrast, and fast days under intense sunlight.',
  venus: 'A dense yellow-white world wrapped in heavy atmospheric haze and slow-moving cloud bands.',
  earth: 'Oceans, continents, ice caps, live cloud layer, blue atmospheric rim, and city lights that appear only on the night side.',
  moon: 'Earth’s moon with cratered stone, crisp phases, and a compact orbit that always reflects the sun angle.',
  mars: 'A dusty red world with dark basalt regions and two tiny moons cutting quick tracks overhead.',
  phobos: 'A close irregular moon tumbling over Mars with a dark, battered rocky surface.',
  deimos: 'A smaller outer moon of Mars, faintly lit and loosely trailing the red planet.',
  jupiter: 'A giant gas world carved into storm bands, warm browns, and a dense system of major moons.',
  io: 'A volcanic moon with sulfur stains and hot orange bands orbiting close to Jupiter.',
  europa: 'An icy moon with blue-white fractures and a smooth frozen shell.',
  ganymede: 'The largest moon in the system, marked by muted ridges and deep cratered patches.',
  callisto: 'A dark outer moon covered in old impacts and dusky rock.',
  saturn: 'A pale gas giant wrapped by layered rings, soft honey bands, and a broad family of icy moons.',
  titan: 'A hazy amber moon with a thick atmosphere and muted surface tones.',
  enceladus: 'A bright icy moon with blue-white cracks, tucked near Saturn’s rings.',
  rhea: 'A lightly cratered icy moon with a cool gray shell and gentle shadow transitions.',
  iapetus: 'A two-tone moon with a high-contrast leading side and a brighter trailing hemisphere.',
  uranus: 'An ice giant tilted almost sideways, with pale cyan bands and a delicate faint ring system.',
  titania: 'A pale icy moon orbiting near Uranus with a clean, frosted surface.',
  oberon: 'A darker outer moon of Uranus, slightly warmer in tone and farther from the ring plane.',
  neptune: 'A deep blue ice giant with soft banding, cold glow, and a distant lonely orbit.',
  triton: 'A crisp blue-gray moon with icy streaks and a retrograde feel near Neptune.',
  pluto: 'A tiny far-edge dwarf planet with muted beige ice regions and a soft charcoal night side.',
  charon: 'Pluto’s companion moon, rocky and pale, keeping a tight distant dance.',
  asteroidBelt: 'A procedurally generated belt of rocky fragments stretching between Mars and Jupiter.',
  kuiperVeil: 'A sparse outer veil of frozen debris beyond Neptune and Pluto, dimmer and wider than the asteroid belt.',
  comet: 'An icy traveler with a bright head and a faint trailing tail crossing the outer scene.',
  starfield: 'A layered deep-space backdrop of distant stars and low-contrast nebula haze.'
};

export function getBodyDescription(id) {
  return BODY_DESCRIPTIONS[id] ?? 'Procedural celestial object in the solar system scene.';
}
