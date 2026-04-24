const DEFAULT_TEXT =
  '点击行星或卫星进行聚焦。拖拽旋转视角，滚轮缩放。可以重点观察地球夜侧、土星环、木星风暴和小行星带。';

export function createTooltip({
  parent = document.body,
  text = DEFAULT_TEXT,
  className = '',
  hidden = false,
} = {}) {
  const el = document.createElement('div');
  el.className = ['solar-tooltip', className].filter(Boolean).join(' ');
  el.textContent = text;
  if (hidden) {
    el.classList.add('is-hidden');
  }

  parent.appendChild(el);

  return {
    el,
    setText(value) {
      el.textContent = value;
      return el;
    },
    show() {
      el.classList.remove('is-hidden');
      return el;
    },
    hide() {
      el.classList.add('is-hidden');
      return el;
    },
    setVisible(value) {
      el.classList.toggle('is-hidden', !value);
      return el;
    },
    destroy() {
      el.remove();
    },
  };
}

export { DEFAULT_TEXT as DEFAULT_TOOLTIP_TEXT };
