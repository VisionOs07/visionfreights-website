(() => {
  const API = Object.freeze({ baseUrl: '', quotePath: '/api/public/quotes', trackingPath: '/api/public/tracking' });
  window.VisionFreightConfig = window.VisionFreightConfig || API;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tabs = [...document.querySelectorAll('.mode-tabs [data-mode]')];
  const stage = document.querySelector('.mode-stage');
  if (!tabs.length || !stage) return;
  const content = {
    sea: ['01 / 05','Ocean Freight','FCL, LCL, consolidation and project cargo coordination across international trade lanes.',['Route and carrier planning','Documentation coordination','Milestone visibility'],'Ocean freight'],
    air: ['02 / 05','Air Freight','Priority and standard air cargo planning for time-sensitive international movements.',['Airport-to-airport planning','Time-critical coordination','Cargo milestone updates'],'Air freight'],
    rail: ['03 / 05','Rail Freight','Reliable inland and cross-border rail options for containerised and industrial cargo.',['Intermodal route planning','Terminal coordination','Long-haul efficiency'],'Rail freight'],
    road: ['04 / 05','Road Transport','First mile, last mile and cross-border trucking coordinated around the shipment.',['Pickup and delivery','Cross-border support','Flexible vehicle planning'],'Road transport'],
    warehouse: ['05 / 05','Warehousing','Storage, handling and distribution support connected to the wider freight plan.',['Short and long-term storage','Cargo handling','Dispatch coordination'],'Warehousing']
  };
  const copy = stage.querySelector('.mode-copy');
  let timer;
  const activate = mode => {
    const data = content[mode]; if (!data) return;
    stage.dataset.activeMode = mode;
    tabs.forEach(tab => { const selected = tab.dataset.mode === mode; tab.classList.toggle('active', selected); tab.setAttribute('aria-selected', String(selected)); });
    document.querySelectorAll('.mode-scene').forEach(scene => scene.classList.toggle('active', scene.dataset.scene === mode));
    copy.innerHTML = `<span class="mode-number">${data[0]}</span><h3>${data[1]}</h3><p>${data[2]}</p><ul>${data[3].map(item => `<li>${item}</li>`).join('')}</ul><a href="quote.html?mode=${encodeURIComponent(data[4])}">Plan ${data[1].toLowerCase()} →</a>`;
  };
  const schedule = () => { if (reduceMotion) return; clearInterval(timer); timer = setInterval(() => { const current = tabs.findIndex(tab => tab.classList.contains('active')); activate(tabs[(current + 1) % tabs.length].dataset.mode); }, 8000); };
  tabs.forEach(tab => tab.addEventListener('click', () => { activate(tab.dataset.mode); schedule(); }));
  schedule();
  const params = new URLSearchParams(location.search);
  const requestedMode = params.get('mode');
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm && requestedMode && quoteForm.elements.mode) quoteForm.elements.mode.value = requestedMode;
})();
