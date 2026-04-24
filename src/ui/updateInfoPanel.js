const createEntry = (eyebrow, title, body, chips = []) => ({
  eyebrow,
  title,
  body,
  chips,
});

export const INFO_COPY = Object.freeze({
  'free-flight': createEntry(
    '相机模式',
    '自由飞行',
    '不锁定任何天体，可手动拖拽、缩放和穿行，用来观察整个太阳系结构。',
    ['手动相机', '轨道控制', '未聚焦'],
  ),
  sun: createEntry(
    '恒星',
    '太阳',
    '程序化生成的恒星，包含流动等离子体纹理、多层日冕、弧形喷发和辉光，也是整个系统的主光源。',
    ['程序化', '主光源', '辉光'],
  ),
  mercury: createEntry('行星', '水星', '小型灰色岩质行星，表面粗糙、有坑洼感，轨道非常靠近太阳。', ['岩质', '内行星']),
  venus: createEntry('行星', '金星', '明亮的金黄色云层行星，拥有浓厚大气和柔和的暖色阴影。', ['浓厚大气', '云层']),
  earth: createEntry(
    '行星',
    '地球',
    '包含海洋、陆地、冰盖、动态云层、蓝色大气边缘，以及只在夜侧出现的城市灯光。',
    ['云层', '海洋', '夜侧灯光'],
  ),
  moon: createEntry('卫星', '月球', '环绕地球的浅灰色岩质卫星，会随太阳方向呈现明暗变化。', ['卫星', '昼夜明暗']),
  mars: createEntry('行星', '火星', '红橙色岩质行星，带有暗色地貌和干燥尘土质感。', ['岩质', '红色']),
  phobos: createEntry('卫星', '火卫一', '贴近火星运行的小型不规则卫星，轨道速度较快。', ['火星卫星', '不规则']),
  deimos: createEntry('卫星', '火卫二', '距离火星更远的小卫星，以较平缓的轨道运行。', ['火星卫星', '外侧卫星']),
  jupiter: createEntry(
    '行星',
    '木星',
    '巨大的气态行星，拥有条纹云带、风暴斑块和四颗主要伽利略卫星。',
    ['气态巨行星', '风暴云带', '卫星'],
  ),
  io: createEntry('卫星', '木卫一', '火山活动感较强的明亮卫星，贴近木星运行。', ['木星卫星', '火山']),
  europa: createEntry('卫星', '木卫二', '冰壳卫星，表面浅亮、反射感较干净。', ['木星卫星', '冰壳']),
  ganymede: createEntry('卫星', '木卫三', '体量较大的伽利略卫星，呈现寒冷厚重的岩冰质感。', ['木星卫星', '大型卫星']),
  callisto: createEntry('卫星', '木卫四', '外侧卫星，表面较暗，带有古老撞击痕迹。', ['木星卫星', '外侧卫星']),
  saturn: createEntry(
    '行星',
    '土星',
    '金黄色气态巨行星，环带由多层条纹和暗缝组成，带有明显空间层次。',
    ['环带', '气态巨行星', '卫星'],
  ),
  titan: createEntry('卫星', '土卫六', '土星的大型卫星，带有厚重橙色雾霾感和较宽的轨道。', ['土星卫星', '浓厚大气']),
  enceladus: createEntry('卫星', '土卫二', '明亮的冰质卫星，靠近土星环运行。', ['土星卫星', '冰裂纹']),
  rhea: createEntry('卫星', '土卫五', '浅色土星卫星，表面干净，轨道较稳定。', ['土星卫星', '明亮卫星']),
  iapetus: createEntry('卫星', '土卫八', '外侧卫星，具有较强明暗对比，绕土星缓慢运行。', ['土星卫星', '外侧卫星']),
  uranus: createEntry('行星', '天王星', '几乎横躺自转的冰巨星，带有浅青色条带和纤细淡环。', ['冰巨星', '横躺轴向']),
  titania: createEntry('卫星', '天卫三', '天王星的主要卫星之一，在聚焦模式下位于倾斜环系附近。', ['天王星卫星', '主要卫星']),
  oberon: createEntry('卫星', '天卫四', '较远的天王星卫星，轨道平缓，色调更沉静。', ['天王星卫星', '外侧卫星']),
  neptune: createEntry('行星', '海王星', '深蓝色冰巨星，带有细微条纹和遥远寒冷的观感。', ['冰巨星', '深蓝']),
  triton: createEntry('卫星', '海卫一', '围绕海王星运行的明亮冰冷卫星。', ['海王星卫星', '冰质']),
  pluto: createEntry('矮行星', '冥王星', '太阳系边缘的小型天体，体积虽小但可聚焦观察。', ['矮行星', '外太阳系']),
  charon: createEntry('卫星', '卡戎', '冥王星的伴星，距离较近，呈现双天体系统的感觉。', ['冥王星卫星', '双天体']),
  asteroidBelt: createEntry('带状结构', '小行星带', '位于火星和木星之间的岩石碎片环，由实例化小天体组成。', ['实例化', '岩石碎片']),
  kuiperVeil: createEntry('带状结构', '柯伊伯带', '海王星与冥王星外侧更冷、更稀疏的外层碎冰带。', ['外层带', '稀疏']),
});

function fallbackEntry(id) {
  const label = String(id || 'object')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return createEntry(
    '对象',
    label,
    '当前对象暂无详细说明，但仍可作为聚焦目标进行观察。',
    ['选择项', '聚焦目标'],
  );
}

export function getInfoEntry(id) {
  if (id && typeof id === 'object') {
    if (id.description || id.displayName || id.name) {
      return createEntry(
        id.type ?? '对象',
        id.displayName ?? id.name ?? '对象',
        id.description ?? fallbackEntry(id.id ?? id.name ?? 'object').body,
        id.chips ?? id.tags ?? [],
      );
    }
    return fallbackEntry(id.id ?? id.name ?? 'object');
  }

  const aliases = {
    'freeFlight': 'free-flight',
    'asteroid-belt': 'asteroidBelt',
    'kuiper-veil': 'kuiperVeil',
  };
  const normalized = aliases[id] || id;
  return INFO_COPY[normalized] || fallbackEntry(id);
}

export function createInfoCard(initialEntry = 'free-flight') {
  const card = document.createElement('section');
  card.className = 'solar-info-card';
  card.innerHTML = `
    <p class="solar-info-card__eyebrow" data-role="eyebrow"></p>
    <h3 class="solar-info-card__title" data-role="title"></h3>
    <p class="solar-info-card__body" data-role="body"></p>
    <div class="solar-info-card__meta" data-role="meta"></div>
  `;
  updateInfoPanel(card, initialEntry);
  return card;
}

export function updateInfoPanel(card, entry = 'free-flight') {
  if (!card) {
    return null;
  }

  const isResolvedEntry =
    entry &&
    typeof entry === 'object' &&
    !Array.isArray(entry) &&
    ('eyebrow' in entry || 'title' in entry || 'body' in entry || 'chips' in entry);

  const data = isResolvedEntry
    ? { ...fallbackEntry(entry.id ?? 'object'), ...entry }
    : getInfoEntry(entry);
  const eyebrowEl = card.querySelector('[data-role="eyebrow"]');
  const titleEl = card.querySelector('[data-role="title"]');
  const bodyEl = card.querySelector('[data-role="body"]');
  const metaEl = card.querySelector('[data-role="meta"]');

  if (eyebrowEl) eyebrowEl.textContent = data.eyebrow || '对象';
  if (titleEl) titleEl.textContent = data.title || '对象';
  if (bodyEl) bodyEl.textContent = data.body || '';

  if (metaEl) {
    metaEl.textContent = '';
    for (const chip of data.chips || []) {
      const chipEl = document.createElement('span');
      chipEl.className = 'solar-info-card__chip';
      chipEl.textContent = chip;
      metaEl.appendChild(chipEl);
    }
  }

  card.dataset.eyebrow = data.eyebrow || '';
  card.dataset.title = data.title || '';
  return card;
}
