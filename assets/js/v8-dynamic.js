(() => {
  const sceneAssets = {
    sea: ['sea-port.webp', 'ship.webp', 'moving-ship', 'Container vessel moving across an international port'],
    air: ['air-cargo-terminal.webp', 'plane.webp', 'moving-plane', 'Cargo aircraft flying above an international cargo terminal'],
    rail: ['rail-terminal.webp', 'train.webp', 'moving-train', 'Intermodal train moving across a rail terminal'],
    road: ['road-terminal.webp', 'truck.webp', 'moving-truck', 'Container truck moving through a logistics corridor'],
    warehouse: ['warehouse.webp', 'forklift.webp', 'moving-forklift', 'Forklift moving cargo inside a modern warehouse']
  };
  const pageModes = { 'services.html': 'rail', 'quote.html': 'air', 'tracking.html': 'sea', 'about.html': 'road', 'contact.html': 'warehouse' };
  const page = location.pathname.split('/').pop() || 'index.html';
  const hero = document.querySelector('.page-hero');
  const mode = pageModes[page];
  if (hero && mode && sceneAssets[mode]) {
    const [background, vehicle, motionClass, description] = sceneAssets[mode];
    hero.classList.add('v8-live-hero');
    hero.insertAdjacentHTML('afterbegin', `<div class="page-motion-scene scene-shell scene-${mode}" aria-hidden="true"><img class="scene-bg" src="assets/images/scenes/${background}" alt="" width="1600" height="900"><img class="scene-vehicle ${motionClass}" src="assets/images/vehicles/${vehicle}" alt="${description}" width="1400" loading="eager"></div>`);
  }
  const animatedScenes = [...document.querySelectorAll('.scene-shell')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('scene-paused', !entry.isIntersecting);
      entry.target.querySelectorAll('.scene-vehicle,.wake,.flight-trail,.road-shadow,.crane-rail i,.crane-rail b').forEach(item => item.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused');
    }), { rootMargin: '160px 0px', threshold: 0.01 });
    animatedScenes.forEach(scene => observer.observe(scene));
  }
  const modeVideos = [...document.querySelectorAll('.mode-scene .mode-video')];
  const syncModeVideos = () => modeVideos.forEach(video => {
    const active = video.closest('.mode-scene')?.classList.contains('active');
    if (active) video.play().catch(() => {}); else video.pause();
  });
  document.querySelectorAll('.mode-tabs [data-mode]').forEach(tab => {
    tab.addEventListener('click', () => requestAnimationFrame(syncModeVideos));
    tab.addEventListener('keydown', () => requestAnimationFrame(syncModeVideos));
  });
  syncModeVideos();
})();
