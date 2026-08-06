const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('menu-open',open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}
const header=document.getElementById('siteHeader');
if(header){
  const updateHeader=()=>header.classList.toggle('sticky',window.scrollY>80);
  updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
const quoteForm=document.getElementById('quoteForm');
if(quoteForm){
 quoteForm.addEventListener('submit',e=>{
   e.preventDefault();const d=new FormData(quoteForm);
   const subject=`Freight enquiry: ${d.get('origin')} to ${d.get('destination')}`;
   const body=[`Name: ${d.get('name')}`,`Company: ${d.get('company')}`,`Email: ${d.get('email')}`,`Phone: ${d.get('phone')||'Not provided'}`,`Origin: ${d.get('origin')}`,`Destination: ${d.get('destination')}`,`Mode: ${d.get('mode')}`,`Cargo: ${d.get('cargo')||'Not provided'}`,'','Details:',d.get('details')].join('\n');
   location.href=`mailto:info@visionfreights.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 });
}
const trackingForm=document.getElementById('trackingForm');
if(trackingForm){
 trackingForm.addEventListener('submit',e=>{
  e.preventDefault();const ref=document.getElementById('trackingInput').value.trim().toUpperCase();
  const out=document.getElementById('trackingResult');
  out.innerHTML=ref==='VFL-DEMO'?`<div class="timeline"><div class="done"><strong>Booking confirmed</strong><small>Mohali, Punjab</small></div><div class="done"><strong>Cargo received</strong><small>Origin facility</small></div><div class="done"><strong>In transit</strong><small>Current milestone</small></div><div><strong>Export departure</strong><small>Awaiting update</small></div><div><strong>Destination arrival</strong><small>Schedule pending</small></div></div>`:`<p style="padding:14px;border:1px solid #ffd0cc;background:#fff3f1;border-radius:8px">Live carrier data is not connected yet. Use <strong>VFL-DEMO</strong> to preview tracking.</p>`;
 });
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
