# Solar System

一个基于 `Three.js 0.160.0` 和 `Vite 5` 的纯 JavaScript 太阳系可视化项目。场景包含程序化太阳、八大行星、冥王星、主要卫星、土星环、天王星环、小行星带、Kuiper Veil、标签系统、时间控制、Deep-Space 总览和 Cinematic Tour 巡游镜头。

## 在线预览

- GitHub Pages: https://oscarmei070815-beep.github.io/sun/

## 预览参考

- 截图参考目录：`./图片/`
- 需求与执行约束：`./prompt.txt`

## 技术栈

- `three@0.160.0`
- `vite@^5.4.0`
- 原生 JavaScript + 原生 DOM + CSS
- Three.js addons 统一通过 `three/addons/...` 导入

## 启动命令

### npm

```bash
npm install
npm run dev
```

### pnpm

```bash
pnpm install
pnpm dev
```

## 构建命令

### npm

```bash
npm run build
```

### pnpm

```bash
pnpm build
```

构建产物输出到 `dist/`，`vite.config.js` 已设置 `base: './'`，便于静态部署到 GitHub Pages 子路径。

## 操作提示

`点击行星或卫星进行聚焦。拖拽旋转视角，滚轮缩放。可以重点观察地球夜侧、土星环、木星风暴和小行星带。`

## 目录结构

```text
.
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ .gitignore
├─ prompt.txt
├─ 图片/
├─ trash/
│  └─ qa-screenshots/
├─ src/
│  ├─ main.js
│  ├─ styles.css
│  ├─ core/
│  ├─ data/
│  ├─ bodies/
│  ├─ materials/
│  ├─ animation/
│  ├─ ui/
│  └─ utils/
└─ dist/ (构建后生成)
```

## 主要模块说明

- `src/main.js`
  负责主场景装配、UI 接线、点击聚焦、动画帧循环和所有模块集成。
- `src/core/*`
  负责 Scene、Camera、Renderer、Composer、OrbitControls 和 resize 处理。
- `src/data/*`
  负责天体配置、缩放参数和描述文案。
- `src/bodies/*`
  负责太阳、行星、卫星、环、小行星带、Kuiper Veil、彗星和星场工厂。
- `src/materials/*`
  负责太阳 shader、地球夜景/大气、环材质和其他行星程序化材质。
- `src/animation/*`
  负责时间倍率、公转自转、相机跟随、Deep-Space 视角和 Cinematic Tour。
- `src/ui/*`
  负责左侧控制面板、信息卡、标签管理和底部提示条。
- `src/utils/*`
  负责程序化纹理、随机数、性能分级和投影辅助。

## 已知限制

- 行星地表、地球大陆、土星环条纹和星云全部为程序化近似，不是天文贴图级精确复刻；目标是接近参考视频的视觉语言，而不是做科学数据库级地图还原。
- 土星本体投射到环面的阴影使用 shader 近似，而不是真实阴影贴图。

## 临时文件

- `trash/qa-screenshots/` 保存本轮浏览器验证截图，包括 Deep-Space、Sun、Saturn、Uranus 四个固定视角。
