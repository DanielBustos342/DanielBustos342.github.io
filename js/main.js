/* DuoTech - Servicio Técnico | comportamiento */
// Marca que hay JavaScript (activa las animaciones de aparición) antes del primer pintado
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded',function(){
  var hd=document.getElementById('hd'),bar=document.getElementById('bar'),root=document.documentElement;
  function sc(){var y=window.scrollY,h=document.body.scrollHeight-innerHeight;
  hd.classList.toggle('s',y>30);bar.style.transform='scaleX('+(h>0?y/h:0)+')';root.style.setProperty('--y',y)}
  addEventListener('scroll',sc,{passive:true});sc();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  document.querySelectorAll('.svc').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
  var chips=document.querySelectorAll('#flt .chip'),works=document.querySelectorAll('.work');
  chips.forEach(function(b){b.addEventListener('click',function(){
  chips.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
  works.forEach(function(w){var hide=b.dataset.f!=='all'&&w.dataset.c!==b.dataset.f;w.hidden=hide;
  if(!hide){w.classList.add('in');w.classList.remove('pop');void w.offsetWidth;w.classList.add('pop')}})})});

  var F='font-family="Bricolage Grotesque,sans-serif" font-weight="800" text-anchor="middle"';
  function phone(bad){var s='<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice"><rect width="800" height="450" fill="'+(bad?'#1c1217':'#0b1a33')+'"/><rect x="300" y="30" width="200" height="390" rx="30" fill="#0a0f1e" stroke="'+(bad?'#6b7390':'#0a9ee6')+'" stroke-width="4"/>';
  if(bad){s+='<rect x="316" y="62" width="168" height="326" rx="14" fill="#060810"/><rect x="316" y="120" width="168" height="6" fill="#e0338a" opacity=".8"/><rect x="316" y="250" width="168" height="4" fill="#27d17a" opacity=".7"/><path d="M470 66L398 190L432 258L352 384M398 190L322 170M432 258L484 296M398 190L440 120M398 190L350 250" stroke="#e8f0ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>'}
  else{s+='<defs><linearGradient id="gp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a9ee6"/><stop offset="1" stop-color="#1a2f8f"/></linearGradient></defs><rect x="316" y="62" width="168" height="326" rx="14" fill="url(#gp)"/><text x="400" y="130" '+F+' fill="#fff" font-size="44">9:41</text>';
  for(var i=0;i<9;i++)s+='<rect x="'+(324+(i%3)*58)+'" y="'+(190+Math.floor(i/3)*60)+'" width="44" height="44" rx="12" fill="#fff" opacity="'+(i%2?.25:.45)+'"/>'}
  return s+'</svg>'}
  function pc(bad){var s='<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice"><rect width="800" height="450" fill="'+(bad?'#1c1217':'#0b1a33')+'"/><rect x="200" y="50" width="400" height="260" rx="14" fill="#0a0f1e" stroke="'+(bad?'#6b7390':'#0a9ee6')+'" stroke-width="4"/><rect x="216" y="66" width="368" height="228" rx="6" fill="'+(bad?'#2a0f12':'#0d2a4a')+'"/><text x="400" y="190" '+F+' font-size="78" fill="'+(bad?'#ff5a4d':'#4fd0ff')+'">'+(bad?'92°C':'41°C')+'</text><text x="400" y="240" '+F+' font-size="22" font-weight="500" fill="#c9d3ee">'+(bad?'Sobrecalentada y ruidosa':'Temperatura normal')+'</text><path d="M150 320H650L680 352H120Z" fill="#151d35" stroke="'+(bad?'#6b7390':'#0a9ee6')+'" stroke-width="3"/>';
  if(bad)for(var i=0;i<46;i++)s+='<circle cx="'+(150+(i*97)%500)+'" cy="'+(324+(i*53)%24)+'" r="'+(1.5+i%3)+'" fill="#9a9aa6" opacity=".6"/>';
  return s+'</svg>'}
  var cases={cel:phone,pc:pc},ba=document.getElementById('ba'),rng=ba.querySelector('input'),touched=false;
  function setP(v){ba.style.setProperty('--p',v+'%');rng.value=v}
  function loadCase(k){ba.querySelector('.before').innerHTML=cases[k](true);ba.querySelector('.after').innerHTML=cases[k](false)}
  loadCase('cel');
  rng.addEventListener('input',function(){touched=true;setP(rng.value)});
  document.querySelectorAll('#bachips .chip').forEach(function(b,_,all){b.addEventListener('click',function(){all.forEach(function(x){x.setAttribute('aria-pressed',x===b)});loadCase(b.dataset.k);setP(50)})});
  new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;var t0=null;(function f(t){t0=t0||t;var k=(t-t0)/2200;if(k>=1||touched){if(!touched)setP(50);return}setP(50+40*Math.sin(k*Math.PI*2)*(1-k));requestAnimationFrame(f)})(performance.now())}},{threshold:.6}).observe(ba);
  /* Presupuesto por WhatsApp */
  var WA='5493815795254';
  var PROBS={
    'Celular':['Pantalla rota','Batería','No carga','Se mojó','No enciende','Otro'],
    'Notebook':['No enciende','Está lenta','Pantalla','Se recalienta','Virus','Otro'],
    'Computadora':['No enciende','Está lenta','No da imagen','Se recalienta','Virus','Otro'],
    'Consola':['No da imagen (HDMI)','Joystick','No lee discos','Se recalienta','No enciende','Otro']
  };
  function checkedVal(n){var c=document.querySelector('input[name="'+n+'"]:checked');return c?c.value:''}
  function updateMsg(){
    var m=document.getElementById('q-model').value.trim();
    var t='Hola DuoTech, quiero consultar por una reparación.\nEquipo: '+checkedVal('dev')+'\nProblema: '+checkedVal('prob')+(m?'\nModelo: '+m:'');
    document.getElementById('q-prev').textContent=t;
    document.getElementById('q-go').href='https://wa.me/'+WA+'?text='+encodeURIComponent(t);
  }
  function renderProbs(){
    document.getElementById('q-prob').innerHTML=PROBS[checkedVal('dev')].map(function(p,i){
      return '<label class="opt"><input type="radio" name="prob" value="'+p+'"'+(i?'':' checked')+'><span>'+p+'</span></label>'}).join('');
    updateMsg();
  }
  document.getElementById('qf').addEventListener('change',function(e){e.target.name==='dev'?renderProbs():updateMsg()});
  document.getElementById('q-model').addEventListener('input',updateMsg);
  renderProbs();

  /* Botón flotante de WhatsApp: aparece al bajar */
  var waBtn=document.getElementById('wa');
  function waVis(){waBtn.classList.toggle('show',window.scrollY>500)}
  addEventListener('scroll',waVis,{passive:true});waVis();
});
