const phrases=['🐍 Python Developer','💻 Full Stack Developer','🤖 Machine Learning Enthusiast','☁️ Cloud Engineer','⚛️ React Developer'];const typed=document.getElementById('typing');let pi=0;if(typed){typed.textContent=phrases[0];setInterval(()=>{pi=(pi+1)%phrases.length;typed.classList.remove('title-enter');void typed.offsetWidth;typed.textContent=phrases[pi];typed.classList.add('title-enter')},3200)}
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-tab]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-selected','false')});document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('selected');btn.setAttribute('aria-selected','true');document.getElementById(btn.dataset.tab).classList.add('active')}));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav nav a')];const spy=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-25% 0px -55% 0px'});sections.forEach(s=>spy.observe(s));
function particles(canvas){const ctx=canvas.getContext('2d');let w,h,pts=[];const resize=()=>{w=canvas.width=canvas.clientWidth;h=canvas.height=canvas.clientHeight;pts=Array.from({length:Math.min(34,Math.max(18,Math.floor(w/42)))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.38,vy:(Math.random()-.5)*.38,r:2+Math.random()*5}))};resize();window.addEventListener('resize',resize);let frame=0;function draw(){frame++;ctx.clearRect(0,0,w,h);for(let i=0;i<pts.length;i++){const a=pts[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;for(let j=i+1;j<pts.length;j++){const b=pts[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<Math.min(260,w*.32)){ctx.strokeStyle=`rgba(255,153,0,${.33*(1-dist/300)})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}ctx.fillStyle='rgba(220,224,230,.65)';ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)draw();else{ctx.fillStyle='#f90';pts.forEach(p=>ctx.fillRect(p.x,p.y,3,3))}}document.querySelectorAll('canvas.particles').forEach(particles);

// Local detail views for professional-experience portfolio cards.
(() => {
  const dialog = document.getElementById('project-dialog');
  if (!dialog) return;
  const details = {
    4: ['Contract Intelligence Platform', 'A conceptual illustration of contract upload, processing, extracted information, and review workflows. Professional experience with contract intelligence and cloud applications.', 'Python · FastAPI · Angular · Azure'],
    5: ['Clinical AI Document Extraction', 'A conceptual illustration of clinical document processing and structured information extraction. Professional experience with AI-assisted document workflows.', 'React · FastAPI · AWS · LLMs'],
    6: ['Cloud-Native Microservices', 'A conceptual illustration of independently deployed API services, data layers, and cloud infrastructure. Professional experience building cloud-ready API services.', 'Django · FastAPI · AWS · Docker']
  };
  document.querySelectorAll('.portfolio-detail-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.project);
      const data = details[id];
      if (!data) return;
      document.getElementById('project-dialog-title').textContent = data[0];
      document.getElementById('project-dialog-description').textContent = data[1];
      document.getElementById('project-dialog-tech').textContent = data[2];
      const img = document.getElementById('project-dialog-image');
      img.src = `project-${id}.svg`;
      img.alt = `Illustration of ${data[0]}`;
      dialog.showModal();
    });
  });
  dialog.querySelector('.project-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();

// Click a company to expand its full project experience beneath the cards.
for (const trigger of document.querySelectorAll('[data-experience-open]')) {
  trigger.addEventListener('click', () => {
    const target = document.getElementById(trigger.dataset.experienceOpen);
    if (!target) return;
    const opening = target.hidden;
    document.querySelectorAll('.experience-expanded').forEach(panel => panel.hidden = true);
    document.querySelectorAll('[data-experience-open]').forEach(card => card.setAttribute('aria-expanded','false'));
    if (opening) {
      target.hidden = false;
      trigger.setAttribute('aria-expanded','true');
      target.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
}
for (const close of document.querySelectorAll('[data-close-experience]')) {
  close.addEventListener('click', () => {
    const target = document.getElementById('exp-details-' + close.dataset.closeExperience);
    if (target) target.hidden = true;
    const trigger = document.querySelector('[data-experience-open="exp-details-' + close.dataset.closeExperience + '"]');
    if (trigger) { trigger.setAttribute('aria-expanded','false'); trigger.focus(); }
  });
}

// Click/tap flips a company card in place; hover also previews its back.
document.querySelectorAll('.experience-flip').forEach(card=>{
 card.addEventListener('click',()=>{
  const wasOpen=card.getAttribute('aria-pressed')==='true';
  document.querySelectorAll('.experience-flip').forEach(other=>other.setAttribute('aria-pressed','false'));
  card.setAttribute('aria-pressed',String(!wasOpen));
 });
 card.addEventListener('keydown',e=>{if(e.key==='Escape'){card.setAttribute('aria-pressed','false');card.blur();}});
});

// Rotating development philosophy quotes (pauses for reduced-motion preferences).
(() => {
 const section=document.querySelector('.philosophy-rotator');
 const quote=document.getElementById('philosophy-text');
 const byline=document.getElementById('philosophy-attribution');
 if(!section||!quote||!byline||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const sayings=[
 ['“Great software is built by turning complex problems into simple, reliable experiences.”','— My development philosophy'],
 ['“The best way to predict the future is to invent it.”','— Alan Kay'],
 ['“Simplicity is the ultimate sophistication.”','— A principle I build by'],
 ['“First, solve the problem. Then, write the code.”','— John Johnson'],
 ['“Technology is most powerful when it helps people do more.”','— My engineering mindset']
 ];
 let index=0;
 setInterval(()=>{
  section.classList.add('is-changing');
  setTimeout(()=>{index=(index+1)%sayings.length;quote.textContent=sayings[index][0];byline.textContent=sayings[index][1];section.classList.remove('is-changing')},480);
 },6000);
})();
