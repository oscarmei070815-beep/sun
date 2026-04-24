import { createInfoCard, getInfoEntry, updateInfoPanel } from './updateInfoPanel.js';

export const DEFAULT_OBJECT_OPTIONS = Object.freeze([
  { id: 'free-flight', label: '自由飞行 / 手动相机' },
  { id: 'sun', label: '恒星 - 太阳' },
  { id: 'mercury', label: '行星 - 水星' },
  { id: 'venus', label: '行星 - 金星' },
  { id: 'earth', label: '行星 - 地球' },
  { id: 'moon', label: '地月系 - 月球' },
  { id: 'mars', label: '行星 - 火星' },
  { id: 'phobos', label: '火星卫星 - 火卫一' },
  { id: 'deimos', label: '火星卫星 - 火卫二' },
  { id: 'jupiter', label: '行星 - 木星' },
  { id: 'io', label: '木星卫星 - 木卫一' },
  { id: 'europa', label: '木星卫星 - 木卫二' },
  { id: 'ganymede', label: '木星卫星 - 木卫三' },
  { id: 'callisto', label: '木星卫星 - 木卫四' },
  { id: 'saturn', label: '行星 - 土星' },
  { id: 'titan', label: '土星卫星 - 土卫六' },
  { id: 'enceladus', label: '土星卫星 - 土卫二' },
  { id: 'rhea', label: '土星卫星 - 土卫五' },
  { id: 'iapetus', label: '土星卫星 - 土卫八' },
  { id: 'uranus', label: '行星 - 天王星' },
  { id: 'titania', label: '天王星卫星 - 天卫三' },
  { id: 'oberon', label: '天王星卫星 - 天卫四' },
  { id: 'neptune', label: '行星 - 海王星' },
  { id: 'triton', label: '海王星卫星 - 海卫一' },
  { id: 'pluto', label: '矮行星 - 冥王星' },
  { id: 'charon', label: '冥王星卫星 - 卡戎' },
  { id: 'asteroidBelt', label: '带状结构 - 小行星带' },
  { id: 'kuiperVeil', label: '带状结构 - 柯伊伯带' },
]);

const DEFAULT_STATE = Object.freeze({
  selectedId: 'free-flight',
  timeScale: 1,
  orbits: true,
  labels: true,
  bloom: true,
  pause: false,
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeObjectId(id) {
  const aliases = {
    freeFlight: 'free-flight',
    'asteroid-belt': 'asteroidBelt',
    'kuiper-veil': 'kuiperVeil',
  };
  return aliases[id] || id;
}

export function formatTimeScale(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) {
    return '0x';
  }
  if (n < 1) {
    return `${n.toFixed(2)}x`;
  }
  if (n < 10) {
    return `${n.toFixed(1)}x`;
  }
  return `${Math.round(n)}x`;
}

export function sliderToTimeScale(sliderValue) {
  const value = clamp(Number(sliderValue), 0, 100);
  if (value <= 0) {
    return 0;
  }
  const exponent = -1 + ((value - 1) / 99) * 3;
  return Number((10 ** exponent).toFixed(4));
}

export function timeScaleToSlider(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) {
    return 0;
  }
  const exponent = Math.log10(n);
  return clamp(Math.round(((exponent + 1) / 3) * 99 + 1), 0, 100);
}

function createDropdown(options, initialValue, onChange) {
  const root = document.createElement('div');
  root.className = 'solar-dropdown';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'solar-dropdown__button';
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');

  const label = document.createElement('span');
  label.className = 'solar-dropdown__label';

  const chevron = document.createElement('span');
  chevron.className = 'solar-dropdown__chevron';

  const menu = document.createElement('div');
  menu.className = 'solar-dropdown__menu';
  menu.setAttribute('role', 'listbox');

  const items = new Map();
  let value = initialValue;
  let open = false;

  function setOpen(nextOpen) {
    open = Boolean(nextOpen);
    root.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  function setValue(nextValue, { emit = false } = {}) {
    if (!items.has(nextValue)) {
      return value;
    }
    value = nextValue;
    const current = items.get(value);
    label.textContent = current?.label || value;
    for (const [key, option] of items.entries()) {
      option.el.classList.toggle('is-selected', key === value);
      option.el.setAttribute('aria-selected', String(key === value));
    }
    if (emit && typeof onChange === 'function') {
      onChange(value);
    }
    return value;
  }

  for (const option of options) {
    const optionButton = document.createElement('button');
    optionButton.type = 'button';
    optionButton.className = 'solar-dropdown__option';
    optionButton.dataset.value = option.id;
    optionButton.textContent = option.label;
    optionButton.setAttribute('role', 'option');
    optionButton.setAttribute('aria-selected', 'false');
    optionButton.addEventListener('click', () => {
      setValue(option.id, { emit: true });
      setOpen(false);
      button.focus();
    });
    menu.appendChild(optionButton);
    items.set(option.id, { ...option, el: optionButton });
  }

  button.addEventListener('click', () => {
    setOpen(!open);
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
      const selected = items.get(value)?.el || menu.querySelector('.solar-dropdown__option');
      selected?.focus();
    }
  });

  const onDocumentClick = (event) => {
    if (!root.contains(event.target)) {
      setOpen(false);
    }
  };

  const onDocumentKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      button.focus();
    }
  };

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeyDown);

  button.append(label, chevron);
  root.append(button, menu);
  setValue(initialValue, { emit: false });

  return {
    root,
    button,
    menu,
    get value() {
      return value;
    },
    setValue,
    setOpen,
    destroy() {
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onDocumentKeyDown);
      root.remove();
    },
  };
}

function createToggleRow(labelText, key, checked, onChange) {
  const row = document.createElement('label');
  row.className = 'solar-toggle';

  const control = document.createElement('input');
  control.type = 'checkbox';
  control.className = 'solar-toggle__control';
  control.checked = checked;
  control.dataset.key = key;

  const label = document.createElement('span');
  label.className = 'solar-toggle__label';
  label.textContent = labelText;

  control.addEventListener('change', () => {
    onChange(key, control.checked);
  });

  row.append(control, label);
  return { row, control };
}

export function createControlPanel({
  mount = null,
  onEvent = null,
  initialState = {},
  selectedId,
  timeScale,
  orbits,
  labels,
  bloom,
  pause,
} = {}) {
  const state = { ...DEFAULT_STATE, ...initialState };
  if (selectedId != null) state.selectedId = normalizeObjectId(selectedId);
  if (timeScale != null) state.timeScale = Number(timeScale);
  if (orbits != null) state.orbits = Boolean(orbits);
  if (labels != null) state.labels = Boolean(labels);
  if (bloom != null) state.bloom = Boolean(bloom);
  if (pause != null) state.pause = Boolean(pause);

  const listeners = new Set();

  const shell = document.createElement('section');
  shell.className = 'solar-ui-shell';

  const mobileQuery = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(max-width: 720px)')
    : null;
  let panelCollapsed = Boolean(mobileQuery?.matches);

  const panelToggle = document.createElement('button');
  panelToggle.type = 'button';
  panelToggle.className = 'solar-panel-toggle';
  panelToggle.setAttribute('aria-controls', 'solar-control-panel');
  panelToggle.innerHTML = `
    <span class="solar-panel-toggle__icon" aria-hidden="true"><span></span><span></span><span></span></span>
    <span class="solar-panel-toggle__label">控制</span>
  `;

  const panel = document.createElement('div');
  panel.id = 'solar-control-panel';
  panel.className = 'solar-control-panel';

  const body = document.createElement('div');
  body.className = 'solar-control-panel__body';

  const brand = document.createElement('div');
  brand.className = 'solar-brand';
  brand.innerHTML = `
    <h1 class="solar-brand__title">太阳系模拟</h1>
    <p class="solar-brand__subtitle">程序化行星、环带、云层、城市灯光、小行星带、星云、彗星与聚焦飞行镜头。</p>
  `;

  const targetGroup = document.createElement('div');
  targetGroup.className = 'solar-group';
  const targetLabel = document.createElement('div');
  targetLabel.className = 'solar-group__label';
  targetLabel.textContent = '聚焦目标';
  const dropdown = createDropdown(DEFAULT_OBJECT_OPTIONS, state.selectedId, (value) => {
    state.selectedId = value;
    infoCard && updateInfoPanel(infoCard, getInfoEntry(value));
    emit('selection', value, 'dropdown');
    collapseForMobile();
  });
  targetGroup.append(targetLabel, dropdown.root);

  const actionRow = document.createElement('div');
  actionRow.className = 'solar-action-row';
  const cinematicButton = document.createElement('button');
  cinematicButton.type = 'button';
  cinematicButton.className = 'solar-button solar-button--primary';
  cinematicButton.textContent = '电影巡游';
  cinematicButton.addEventListener('click', () => {
    emit('action', 'cinematic-tour', 'button');
    collapseForMobile();
  });

  const deepSpaceButton = document.createElement('button');
  deepSpaceButton.type = 'button';
  deepSpaceButton.className = 'solar-button solar-button--secondary';
  deepSpaceButton.textContent = '深空总览';
  deepSpaceButton.addEventListener('click', () => {
    emit('action', 'deep-space-view', 'button');
    collapseForMobile();
  });
  actionRow.append(cinematicButton, deepSpaceButton);

  const sliderGroup = document.createElement('div');
  sliderGroup.className = 'solar-slider';
  const sliderHeader = document.createElement('div');
  sliderHeader.className = 'solar-slider__header';
  const sliderLabel = document.createElement('span');
  sliderLabel.textContent = '时间倍率';
  const sliderValue = document.createElement('span');
  sliderValue.className = 'solar-slider__value';
  const sliderInput = document.createElement('input');
  sliderInput.type = 'range';
  sliderInput.min = '0';
  sliderInput.max = '100';
  sliderInput.step = '1';
  sliderInput.className = 'solar-slider__control';
  sliderHeader.append(sliderLabel, sliderValue);
  sliderGroup.append(sliderHeader, sliderInput);
  sliderInput.addEventListener('input', () => {
    syncTimeScale(sliderInput.value, { emitEvent: true });
  });
  sliderInput.addEventListener('change', () => {
    syncTimeScale(sliderInput.value, { emitEvent: true });
  });

  const toggleGroup = document.createElement('div');
  toggleGroup.className = 'solar-toggle-grid';
  const toggles = {};
  const toggleEntries = [
    ['轨道', 'orbits', state.orbits],
    ['标签', 'labels', state.labels],
    ['辉光', 'bloom', state.bloom],
    ['暂停', 'pause', state.pause],
  ];
  for (const [labelText, key, checked] of toggleEntries) {
    const { row, control } = createToggleRow(labelText, key, checked, (toggleKey, value) => {
      state[toggleKey] = value;
      emit('toggle', { key: toggleKey, value }, 'toggle');
    });
    toggles[key] = control;
    toggleGroup.append(row);
  }

  const infoCard = createInfoCard(state.selectedId);

  body.append(brand, targetGroup, actionRow, sliderGroup, toggleGroup, infoCard);
  panel.append(body);
  shell.append(panelToggle, panel);

  function isMobileLayout() {
    return mobileQuery ? mobileQuery.matches : typeof window !== 'undefined' && window.innerWidth <= 720;
  }

  function setPanelCollapsed(nextCollapsed, { focusToggle = false } = {}) {
    panelCollapsed = isMobileLayout() ? Boolean(nextCollapsed) : false;
    shell.classList.toggle('is-collapsed', panelCollapsed);
    panelToggle.setAttribute('aria-expanded', String(!panelCollapsed));
    panelToggle.setAttribute('aria-label', panelCollapsed ? '展开控制菜单' : '收起控制菜单');
    panelToggle.querySelector('.solar-panel-toggle__label').textContent = panelCollapsed ? '控制' : '收起';
    panel.setAttribute('aria-hidden', String(panelCollapsed));
    if (panelCollapsed) {
      dropdown.setOpen(false);
    }
    if (focusToggle) {
      panelToggle.focus();
    }
    return panelCollapsed;
  }

  function collapseForMobile() {
    if (isMobileLayout()) {
      setPanelCollapsed(true);
    }
  }

  panelToggle.addEventListener('click', () => {
    setPanelCollapsed(!panelCollapsed);
  });

  const onMobileQueryChange = (event) => {
    setPanelCollapsed(event.matches);
  };

  if (mobileQuery?.addEventListener) {
    mobileQuery.addEventListener('change', onMobileQueryChange);
  } else if (mobileQuery?.addListener) {
    mobileQuery.addListener(onMobileQueryChange);
  }

  function syncTimeScale(nextValue, { emitEvent = false } = {}) {
    const value = clamp(Number(nextValue), 0, 100);
    sliderInput.value = String(value);
    const scale = sliderToTimeScale(value);
    state.timeScale = scale;
    sliderValue.textContent = formatTimeScale(scale);
    sliderInput.style.setProperty('--slider-progress', `${value}%`);
    if (emitEvent) {
      emit('time-scale', scale, 'slider');
    }
    return scale;
  }

  function syncSelection(nextId, { emitEvent = false } = {}) {
    const resolvedId = normalizeObjectId(nextId);
    if (!DEFAULT_OBJECT_OPTIONS.some((option) => option.id === resolvedId)) {
      return state.selectedId;
    }
    state.selectedId = resolvedId;
    dropdown.setValue(resolvedId, { emit: false });
    updateInfoPanel(infoCard, getInfoEntry(resolvedId));
    if (emitEvent) {
      emit('selection', resolvedId, 'programmatic');
    }
    return resolvedId;
  }

  function syncToggle(key, value, { emitEvent = false } = {}) {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
      return false;
    }
    state[key] = Boolean(value);
    const control = toggles[key];
    if (control) {
      control.checked = state[key];
    }
    if (emitEvent) {
      emit('toggle', { key, value: state[key] }, 'programmatic');
    }
    return state[key];
  }

  function emit(type, value, source) {
    const payload = {
      type,
      value,
      source,
      state: { ...state },
      panel: api,
    };
    if (typeof onEvent === 'function') {
      onEvent(payload);
    }
    for (const listener of listeners) {
      listener(payload);
    }
  }

  const api = {
    root: shell,
    panel,
    body,
    dropdown: dropdown.root,
    dropdownButton: dropdown.button,
    infoCard,
    state,
    setSelectedObject(id, options = {}) {
      return syncSelection(id, options);
    },
    setTimeScale(value, options = {}) {
      if (typeof value === 'number' && value > 0) {
        const sliderPosition = timeScaleToSlider(value);
        sliderInput.value = String(sliderPosition);
        state.timeScale = value;
        sliderValue.textContent = formatTimeScale(value);
        if (options.emitEvent) {
          emit('time-scale', value, 'programmatic');
        }
        return value;
      }
      return syncTimeScale(value, options);
    },
    setToggle(key, value, options = {}) {
      return syncToggle(key, value, options);
    },
    setState(nextState = {}, options = {}) {
      if (nextState.selectedId) syncSelection(nextState.selectedId, options);
      if (nextState.timeScale != null) api.setTimeScale(nextState.timeScale, options);
      if (nextState.orbits != null) syncToggle('orbits', nextState.orbits, options);
      if (nextState.labels != null) syncToggle('labels', nextState.labels, options);
      if (nextState.bloom != null) syncToggle('bloom', nextState.bloom, options);
      if (nextState.pause != null) syncToggle('pause', nextState.pause, options);
      return { ...state };
    },
    setInfo(entry) {
      updateInfoPanel(infoCard, entry);
      return infoCard;
    },
    setCollapsed(collapsed, options = {}) {
      return setPanelCollapsed(collapsed, options);
    },
    get isCollapsed() {
      return panelCollapsed;
    },
    setDisabled(disabled = true) {
      dropdown.button.disabled = disabled;
      dropdown.setOpen(false);
      cinematicButton.disabled = disabled;
      deepSpaceButton.disabled = disabled;
      sliderInput.disabled = disabled;
      for (const control of Object.values(toggles)) {
        control.disabled = disabled;
      }
    },
    onEvent(listener) {
      if (typeof listener !== 'function') {
        return () => {};
      }
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    destroy() {
      if (mobileQuery?.removeEventListener) {
        mobileQuery.removeEventListener('change', onMobileQueryChange);
      } else if (mobileQuery?.removeListener) {
        mobileQuery.removeListener(onMobileQueryChange);
      }
      dropdown.destroy();
      shell.remove();
      listeners.clear();
    },
  };

  syncSelection(state.selectedId, { emitEvent: false });
  syncTimeScale(timeScaleToSlider(state.timeScale), { emitEvent: false });
  for (const key of ['orbits', 'labels', 'bloom', 'pause']) {
    syncToggle(key, state[key], { emitEvent: false });
  }
  setPanelCollapsed(panelCollapsed);

  if (mount) {
    mount.appendChild(shell);
  }

  return api;
}
