/* EDIT YOUR WEBSITE HERE. All company details, service copy and FAQs are in this block.
   Images use local paths relative to index.html. No build step or server is required. */
const SITE = {
  companyName: 'EASYPLUMBING AND DRAINAGE LTD',
  phone: '07520 655636', phoneLink: '+447520655636',
  email: 'info@easy-plumbing.co.uk', domain: 'easy-plumbing.co.uk',
  address: '104 Arborfield Close, Slough, England, SL1 2JW', companyNumber: '16136933',
  areas: ['Slough', 'Reading', 'Guildford', 'Stevenage', 'Peterborough', 'Ipswich'],
  services: [
    {id:'emergency-repairs',title:'Emergency repairs',image:'assets/drain-repair.jpg',alt:'Worker exposing damaged drainage pipework in an excavated trench',short:'Urgent plumbing problems, leaks and damaged pipework.',intro:'An unexpected plumbing problem needs a clear next step. Call to describe what has happened and discuss a repair.',items:['Leaking or damaged plumbing','Problems with water supply or waste pipes','Repair options and replacement parts'],note:'Call to confirm current availability and response times. If safe, turn off the water supply to limit an active leak.'},
    {id:'bathroom-plumbing',title:'Bathroom plumbing',image:'assets/bathroom.jpg',alt:'Bath and shower fittings in a tiled bathroom',short:'Plumbing for showers, baths, basins and bathroom updates.',intro:'Planning a bathroom update or replacing a fitting? Talk to us about the plumbing for your bath, shower or basin.',items:['Bath, basin and shower plumbing','Replacement bathroom fittings','Water supply and waste connections'],note:'Share the fittings you have in mind and whether you need a repair, replacement or new installation.'},
    {id:'toilet-services',title:'Toilet services',image:'assets/toilet.jpg',alt:'Bathroom with a toilet beside a vanity basin',short:'Toilet installations, flush problems and repairs.',intro:'From a toilet that will not flush properly to a replacement installation, discuss the issue and the work needed.',items:['Flush and cistern problems','Leaks around toilet connections','Toilet installation and replacement'],note:'If your toilet is blocked, avoid repeated flushing and call to discuss the problem.'},
    {id:'leak-detection',title:'Leak detection',image:'assets/sink-connections.jpg',alt:'Water supply and waste pipe connections beneath a kitchen sink',short:'Investigating leaks and repairing affected pipework.',intro:'A drip, damp patch or unexplained water loss can point to a plumbing leak. Tell us what you have noticed so we can discuss an investigation.',items:['Investigating visible signs of leaks','Checking accessible plumbing connections','Discussing repairs to affected pipework'],note:'Let us know where the signs of a leak appear and whether the issue is constant or intermittent.'},
    {id:'water-heaters',title:'Water heaters',image:'assets/water-heaters.jpg',alt:'Installed hot water cylinder and connected pipework',short:'Installation and maintenance enquiries for water heaters.',intro:'If your hot water system needs attention, get in touch to discuss installation, maintenance or replacement options.',items:['Water heater installation enquiries','Maintenance and fault enquiries','Replacement options for existing systems'],note:'Share the make, model and any fault symptoms when you contact us. Work requirements and suitability will be discussed before booking.'},
    {id:'pipe-replacement',title:'Pipe replacement',image:'assets/drain-connection.jpg',alt:'New orange drainage junction connected to existing underground pipework',short:'Replacing damaged or ageing plumbing pipework.',intro:'Damaged or ageing pipes can cause recurring plumbing problems. Talk to us about replacing the affected sections and their connections.',items:['Replacing damaged pipe sections','Renewing existing plumbing connections','Pipework for plumbing alterations'],note:'Tell us where the pipework is located and whether it is accessible. Photos can help explain the job by email.'}
  ],
  faqs: [
    ['How do I book a service?', 'Call 07520 655636 or email info@easy-plumbing.co.uk. Include your postcode, a short description of the job and your contact details.'],
    ['Do you offer emergency repairs?', 'Emergency repairs are one of our services. Call to confirm current availability, response times and the next steps for your issue.'],
    ['Which areas do you serve?', 'We serve Slough, Reading, Guildford, Stevenage, Peterborough and Ipswich. Call with your postcode to confirm coverage for your job.'],
    ['Can you fix leaking pipes or a blocked toilet?', 'Contact us about leaking pipes, toilet faults or a blockage. Describe what is happening so we can discuss the work needed.'],
    ['Do you install bathrooms and replace old pipes?', 'Bathroom plumbing and pipe replacement are available. Tell us about the fittings or pipework you want to change so we can discuss the scope.'],
    ['How do I confirm costs and payment methods?', 'Ask about the cost, any call-out charge and accepted payment methods when you contact us, before agreeing to a visit.']
  ]
};
// End of editable content.
'use strict';
const $ = (s) => document.querySelector(s);
const escapeHTML = (s) => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const phoneLinks = () => {
  document.querySelectorAll('[data-phone]').forEach(a=>{a.href='tel:'+SITE.phoneLink;if(a.textContent.startsWith('Check'))a.textContent='Check your area: '+SITE.phone;else if(a.classList.contains('contact-phone'))a.textContent=SITE.phone;else a.textContent='Call '+SITE.phone;});
  document.querySelectorAll('[data-email]').forEach(a=>{a.href='mailto:'+SITE.email;a.textContent=SITE.email;});
};
$('#legal-name').textContent=SITE.companyName;
$('#legal-address').textContent=SITE.address;
$('#company-number').textContent=SITE.companyNumber;
$('#year').textContent=new Date().getFullYear();
$('#area-list').innerHTML=SITE.areas.map(x=>`<span>${escapeHTML(x)}</span>`).join('');
$('#service-grid').innerHTML=SITE.services.map((s,i)=>`<a class="service-card" href="#service/${s.id}"><div class="card-photo"><img src="${escapeHTML(s.image)}" alt="${escapeHTML(s.alt)}" width="720" height="480" loading="lazy"></div><span class="card-number">0${i+1} / PLUMBING SERVICES</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.short)}</p><span class="card-link">View service</span></a>`).join('');
$('#faq-list').innerHTML=SITE.faqs.map(([q,a])=>`<details><summary>${escapeHTML(q)}</summary><p>${escapeHTML(a)}</p></details>`).join('');
const menu=$('.menu-toggle'), nav=$('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';nav.classList.toggle('open',open);});
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.textContent='Menu';nav.classList.remove('open');}
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const defaultTitle=document.title;
function route(){
  const id=location.hash.startsWith('#service/')?location.hash.slice(9):null;
  const service=SITE.services.find(s=>s.id===id);
  $('#home-view').hidden=Boolean(service);$('#service-view').hidden=!service;
  if(service){
    $('#service-view').innerHTML=`<a class="back" href="#services">All services</a><div class="service-detail"><div><p class="eyebrow">EASYPLUMBING & DRAINAGE</p><h1 id="service-title" tabindex="-1">${escapeHTML(service.title)}</h1><p class="intro">${escapeHTML(service.intro)}</p><ul>${service.items.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ul><h2>Before you book</h2><p>${escapeHTML(service.note)}</p><a class="button" data-phone>Call ${escapeHTML(SITE.phone)}</a></div><img src="${escapeHTML(service.image)}" alt="${escapeHTML(service.alt)}" width="900" height="700"></div>`;
    document.title=service.title+' | EasyPlumbing & Drainage';phoneLinks();window.scrollTo(0,0);$('#service-title').focus({preventScroll:true});
  }else{
    document.title=defaultTitle;
    if(id){location.replace('#services');return;}
    const target=location.hash&&document.getElementById(location.hash.slice(1));
    if(target&&target.tagName!=='DIALOG')requestAnimationFrame(()=>target.scrollIntoView());
  }
  if(location.hash==='#privacy'&&!$('#privacy').open)$('#privacy').showModal();
  closeMenu();
}
document.querySelector('a[href="#privacy"]').addEventListener('click',e=>{e.preventDefault();$('#privacy').showModal();});
$('#privacy').addEventListener('click',e=>{if(e.target===$('#privacy'))$('#privacy').close();});
window.addEventListener('hashchange',route);phoneLinks();route();

// Keep the header available when reading upwards or using its controls.
const header = $('.header');
let previousScroll = Math.max(0, window.scrollY || 0);
let scrollQueued = false;
function updateHeader() {
  const current = Math.max(0, window.scrollY || 0);
  const delta = current - previousScroll;
  const interacting = header.contains(document.activeElement) || menu.getAttribute('aria-expanded') === 'true';
  if (current < 100 || interacting || delta < -5) header.classList.remove('header-hidden');
  else if (delta > 5) header.classList.add('header-hidden');
  if (Math.abs(delta) > 5 || current < 100) previousScroll = current;
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateHeader); }
}, {passive:true});
header.addEventListener('focusin', () => header.classList.remove('header-hidden'));
window.addEventListener('hashchange', () => header.classList.remove('header-hidden'));
