import { Vector3 } from 'three';

const HIDDEN_TRANSFORM = 'translate(-50%, -100%) translate(-9999px, -9999px)';
const LAYOUT_PADDING = 8;
const DEFAULT_SLOT = Object.freeze({ ax: 0.5, ay: 1, dx: 0, dy: 0 });
const LAYOUT_SLOTS = Object.freeze({
  top: { ax: 0.5, ay: 1, dx: 0, dy: -10 },
  topLeft: { ax: 1, ay: 1, dx: -12, dy: -10 },
  topRight: { ax: 0, ay: 1, dx: 12, dy: -10 },
  right: { ax: 0, ay: 0.5, dx: 12, dy: 0 },
  left: { ax: 1, ay: 0.5, dx: -12, dy: 0 },
  bottom: { ax: 0.5, ay: 0, dx: 0, dy: 10 },
  bottomLeft: { ax: 1, ay: 0, dx: -12, dy: 10 },
  bottomRight: { ax: 0, ay: 0, dx: 12, dy: 10 },
});

function toVector3(value, fallbackX = 0, fallbackY = 0, fallbackZ = 0) {
  if (value instanceof Vector3) {
    return value.clone();
  }
  if (Array.isArray(value)) {
    return new Vector3(value[0] ?? fallbackX, value[1] ?? fallbackY, value[2] ?? fallbackZ);
  }
  if (value && typeof value === 'object') {
    return new Vector3(value.x ?? fallbackX, value.y ?? fallbackY, value.z ?? fallbackZ);
  }
  return new Vector3(fallbackX, fallbackY, fallbackZ);
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function expandRect(rect, padding = LAYOUT_PADDING) {
  return {
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding,
  };
}

function measureOverflow(rect, width, height, padding = LAYOUT_PADDING) {
  return (
    Math.max(0, padding - rect.left) +
    Math.max(0, padding - rect.top) +
    Math.max(0, rect.right - (width - padding)) +
    Math.max(0, rect.bottom - (height - padding))
  );
}

function measureOverlapArea(rect, occupiedRects) {
  let overlap = 0;

  for (const occupied of occupiedRects) {
    const width = Math.max(0, Math.min(rect.right, occupied.right) - Math.max(rect.left, occupied.left));
    const height = Math.max(0, Math.min(rect.bottom, occupied.bottom) - Math.max(rect.top, occupied.top));
    overlap += width * height;
  }

  return overlap;
}

function getSlotOrder(x, y, viewWidth, viewHeight) {
  const centerX = viewWidth * 0.5;
  const centerY = viewHeight * 0.5;
  const nearCenterX = Math.abs(x - centerX) < viewWidth * 0.12;
  const nearCenterY = Math.abs(y - centerY) < viewHeight * 0.16;

  if (nearCenterX && nearCenterY) {
    return [
      LAYOUT_SLOTS.top,
      LAYOUT_SLOTS.topLeft,
      LAYOUT_SLOTS.topRight,
      LAYOUT_SLOTS.left,
      LAYOUT_SLOTS.right,
      LAYOUT_SLOTS.bottomLeft,
      LAYOUT_SLOTS.bottomRight,
      LAYOUT_SLOTS.bottom,
    ];
  }

  if (x < centerX && y < centerY) {
    return [
      LAYOUT_SLOTS.topLeft,
      LAYOUT_SLOTS.left,
      LAYOUT_SLOTS.top,
      LAYOUT_SLOTS.bottomLeft,
      LAYOUT_SLOTS.right,
      LAYOUT_SLOTS.topRight,
      LAYOUT_SLOTS.bottom,
      LAYOUT_SLOTS.bottomRight,
    ];
  }

  if (x >= centerX && y < centerY) {
    return [
      LAYOUT_SLOTS.topRight,
      LAYOUT_SLOTS.right,
      LAYOUT_SLOTS.top,
      LAYOUT_SLOTS.bottomRight,
      LAYOUT_SLOTS.left,
      LAYOUT_SLOTS.topLeft,
      LAYOUT_SLOTS.bottom,
      LAYOUT_SLOTS.bottomLeft,
    ];
  }

  if (x < centerX && y >= centerY) {
    return [
      LAYOUT_SLOTS.bottomLeft,
      LAYOUT_SLOTS.left,
      LAYOUT_SLOTS.bottom,
      LAYOUT_SLOTS.topLeft,
      LAYOUT_SLOTS.right,
      LAYOUT_SLOTS.bottomRight,
      LAYOUT_SLOTS.top,
      LAYOUT_SLOTS.topRight,
    ];
  }

  return [
    LAYOUT_SLOTS.bottomRight,
    LAYOUT_SLOTS.right,
    LAYOUT_SLOTS.bottom,
    LAYOUT_SLOTS.topRight,
    LAYOUT_SLOTS.left,
    LAYOUT_SLOTS.bottomLeft,
    LAYOUT_SLOTS.top,
    LAYOUT_SLOTS.topLeft,
  ];
}

export function createLabelManager({
  parent = document.body,
  camera = null,
  onLabelClick = null,
  className = '',
  visible = true,
} = {}) {
  const root = document.createElement('div');
  root.className = ['solar-label-layer', className].filter(Boolean).join(' ');
  root.hidden = !visible;
  parent.appendChild(root);

  const items = new Map();
  const tempWorld = new Vector3();
  const tempProjected = new Vector3();
  const tempZero = new Vector3();

  function hideItem(item) {
    item.el.classList.remove('is-visible');
    item.el.style.opacity = '0';
    item.el.style.transform = HIDDEN_TRANSFORM;
  }

  function getItemSize(item) {
    const rect = item.el.getBoundingClientRect();
    return {
      width: rect.width || item.el.offsetWidth || Math.max(48, item.text.length * 8 + 20),
      height: rect.height || item.el.offsetHeight || 24,
    };
  }

  function createPlacement(candidate, slot = DEFAULT_SLOT) {
    const left = candidate.x - candidate.width * slot.ax + slot.dx;
    const top = candidate.y - candidate.height * slot.ay + slot.dy;

    return {
      slot,
      x: candidate.x + slot.dx,
      y: candidate.y + slot.dy,
      rect: {
        left,
        top,
        right: left + candidate.width,
        bottom: top + candidate.height,
      },
    };
  }

  function applyPlacement(candidate, placement) {
    const { item } = candidate;
    const { slot } = placement;
    item.el.classList.add('is-visible');
    item.el.style.opacity = candidate.opacity.toFixed(3);
    item.el.style.transform =
      `translate(${(-slot.ax * 100).toFixed(0)}%, ${(-slot.ay * 100).toFixed(0)}%) ` +
      `translate(${placement.x.toFixed(2)}px, ${placement.y.toFixed(2)}px)`;
    item.el.style.zIndex = String(Math.round((1 - candidate.z) * 1000));
    item.el.dataset.state =
      item.id === item.activeId ? 'focused' : item.id === item.hoveredId ? 'hovered' : 'idle';
  }

  function syncItemVisibility(item) {
    const selected = item.id === item.activeId;
    const hovered = item.id === item.hoveredId;
    item.el.classList.toggle('is-focused', selected);
    item.el.classList.toggle('solar-label--dim', item.dimmed && !selected && !hovered);
  }

  function addLabel({
    id,
    text,
    object3D,
    offset = tempZero,
    fadeStart = 160,
    fadeEnd = 320,
    minOpacity = 0.22,
    alwaysVisible = false,
    dimmed = false,
    ariaLabel = text,
  }) {
    if (!id) {
      throw new Error('Label id is required.');
    }
    if (!object3D) {
      throw new Error(`Label "${id}" requires an attached object3D.`);
    }

    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'solar-label';
    el.textContent = text;
    el.setAttribute('aria-label', ariaLabel || text);

    const item = {
      id,
      text,
      object3D,
      el,
      offset: toVector3(offset),
      fadeStart,
      fadeEnd,
      minOpacity,
      alwaysVisible,
      dimmed,
      order: items.size,
      layoutPriority: 0,
      activeId: null,
      hoveredId: null,
      visible: true,
    };

    el.addEventListener('click', (event) => {
      if (typeof onLabelClick === 'function') {
        onLabelClick(item, event);
      }
    });

    root.appendChild(el);
    items.set(id, item);
    syncItemVisibility(item);
    return item;
  }

  function removeLabel(id) {
    const item = items.get(id);
    if (!item) {
      return false;
    }
    item.el.remove();
    items.delete(id);
    return true;
  }

  function setLabelState(id, patch = {}) {
    const item = items.get(id);
    if (!item) {
      return null;
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'text')) {
      item.text = patch.text;
      item.el.textContent = patch.text;
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'visible')) {
      item.visible = Boolean(patch.visible);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'dimmed')) {
      item.dimmed = Boolean(patch.dimmed);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'offset')) {
      item.offset = toVector3(patch.offset);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'fadeStart')) {
      item.fadeStart = Number(patch.fadeStart);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'fadeEnd')) {
      item.fadeEnd = Number(patch.fadeEnd);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'minOpacity')) {
      item.minOpacity = Number(patch.minOpacity);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'alwaysVisible')) {
      item.alwaysVisible = Boolean(patch.alwaysVisible);
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'layoutPriority')) {
      item.layoutPriority = Number(patch.layoutPriority);
    }
    syncItemVisibility(item);
    return item;
  }

  function setActiveLabel(id = null) {
    for (const item of items.values()) {
      item.activeId = id;
      syncItemVisibility(item);
    }
  }

  function setHoveredLabel(id = null) {
    for (const item of items.values()) {
      item.hoveredId = id;
      syncItemVisibility(item);
    }
  }

  function setVisible(value) {
    root.hidden = !value;
  }

  function update({
    camera: nextCamera = camera,
    width,
    height,
    viewport = null,
    activeId = null,
    hoveredId = null,
  } = {}) {
    if (!nextCamera) {
      return 0;
    }

    const rect = viewport || root.getBoundingClientRect();
    const viewWidth = width ?? rect.width ?? window.innerWidth;
    const viewHeight = height ?? rect.height ?? window.innerHeight;
    let visibleCount = 0;
    const protectedCandidates = [];
    const normalCandidates = [];

    if (root.hidden) {
      for (const item of items.values()) {
        item.activeId = activeId;
        item.hoveredId = hoveredId;
        syncItemVisibility(item);
        hideItem(item);
      }
      return 0;
    }

    nextCamera.updateMatrixWorld?.(true);

    for (const item of items.values()) {
      item.activeId = activeId;
      item.hoveredId = hoveredId;
      syncItemVisibility(item);

      if (!item.visible || root.hidden) {
        hideItem(item);
        continue;
      }

      item.object3D.getWorldPosition(tempWorld);
      tempWorld.add(item.offset);
      tempProjected.copy(tempWorld).project(nextCamera);

      if (tempProjected.z < -1 || tempProjected.z > 1) {
        hideItem(item);
        continue;
      }

      const x = ((tempProjected.x + 1) * 0.5) * viewWidth;
      const y = ((1 - tempProjected.y) * 0.5) * viewHeight;
      const inBounds = x > -48 && x < viewWidth + 48 && y > -48 && y < viewHeight + 48;
      if (!inBounds) {
        hideItem(item);
        continue;
      }

      const distance = nextCamera.position.distanceTo(tempWorld);
      let opacity = 1;
      if (!item.alwaysVisible) {
        const fadeRange = Math.max(1, item.fadeEnd - item.fadeStart);
        if (distance <= item.fadeStart) {
          opacity = 1;
        } else if (distance >= item.fadeEnd) {
          opacity = 0;
        } else {
          opacity = 1 - (distance - item.fadeStart) / fadeRange;
        }
      }
      if (item.dimmed && item.id !== activeId && item.id !== hoveredId) {
        opacity *= 0.72;
      }
      if (opacity <= 0) {
        hideItem(item);
        continue;
      }
      opacity = clamp01(Math.max(item.minOpacity, opacity));

      const size = getItemSize(item);
      const candidate = {
        item,
        x,
        y,
        z: tempProjected.z,
        opacity,
        width: size.width,
        height: size.height,
        active: item.id === activeId,
        hovered: item.id === hoveredId,
        layoutPriority: item.layoutPriority ?? 0,
        order: item.order ?? 0,
      };

      if (item.alwaysVisible) {
        protectedCandidates.push(candidate);
      } else {
        normalCandidates.push(candidate);
      }
    }

    const protectedLayoutEnabled = protectedCandidates.length >= 2;
    const occupiedRects = [];

    if (protectedLayoutEnabled) {
      protectedCandidates.sort((a, b) => {
        const stateDelta = Number(b.active || b.hovered) - Number(a.active || a.hovered);
        if (stateDelta !== 0) {
          return stateDelta;
        }
        const priorityDelta = (b.layoutPriority ?? 0) - (a.layoutPriority ?? 0);
        if (priorityDelta !== 0) {
          return priorityDelta;
        }
        return (a.order ?? 0) - (b.order ?? 0);
      });

      for (const candidate of protectedCandidates) {
        const slotOrder = getSlotOrder(candidate.x, candidate.y, viewWidth, viewHeight);
        let chosenPlacement = null;
        let fallbackPlacement = null;
        let fallbackScore = Number.POSITIVE_INFINITY;

        for (const slot of slotOrder) {
          const placement = createPlacement(candidate, slot);
          const expandedRect = expandRect(placement.rect);
          const overflow = measureOverflow(placement.rect, viewWidth, viewHeight);
          const overlap = measureOverlapArea(expandedRect, occupiedRects);
          const score = overflow * 1000 + overlap;

          if (score < fallbackScore) {
            fallbackScore = score;
            fallbackPlacement = placement;
          }

          if (overflow === 0 && overlap === 0) {
            chosenPlacement = placement;
            break;
          }
        }

        if (!chosenPlacement && (candidate.active || candidate.hovered)) {
          chosenPlacement = fallbackPlacement;
        }

        if (!chosenPlacement) {
          hideItem(candidate.item);
          continue;
        }

        applyPlacement(candidate, chosenPlacement);
        occupiedRects.push(expandRect(chosenPlacement.rect));
        visibleCount += 1;
      }
    }

    const remainingCandidates = protectedLayoutEnabled
      ? normalCandidates
      : [...protectedCandidates, ...normalCandidates];

    for (const candidate of remainingCandidates) {
      const placement = createPlacement(candidate, DEFAULT_SLOT);
      const expandedRect = expandRect(placement.rect);
      const overflow = measureOverflow(placement.rect, viewWidth, viewHeight);
      const blockedByProtected = protectedLayoutEnabled && occupiedRects.some((rect) => rectsOverlap(expandedRect, rect));

      if (overflow > 0 || blockedByProtected) {
        hideItem(candidate.item);
        continue;
      }

      applyPlacement(candidate, placement);
      visibleCount += 1;
    }

    return visibleCount;
  }

  function clear() {
    for (const item of items.values()) {
      item.el.remove();
    }
    items.clear();
  }

  function destroy() {
    clear();
    root.remove();
  }

  return {
    root,
    addLabel,
    removeLabel,
    setLabelState,
    setActiveLabel,
    setHoveredLabel,
    setVisible,
    update,
    clear,
    destroy,
    items,
  };
}
