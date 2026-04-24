export function bindResize({
  camera,
  renderer,
  composer,
  labelRenderer
}) {
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    composer.setSize(width, height);
    composer.setPixelRatio(pixelRatio);
    labelRenderer.setSize(width, height);
  };

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}
