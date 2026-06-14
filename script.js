// ═══════════════════════════════════════════════════
//  TABLICE OBCIĄŻALNOŚCI — PN-HD 60364-5-52
// ═══════════════════════════════════════════════════
const IZ={
  1.5: {Cu_PVC_1F:{A1:13,A2:13,B1:15,B2:15,C:17.5,D1:22,D2:25,E:19,F:19},Cu_PVC_3F:{A1:11,A2:11,B1:13,B2:13,C:15.5,D1:18,D2:21,E:17,F:17},Cu_XLPE_1F:{A1:15.5,A2:15.5,B1:18.5,B2:18.5,C:22,D1:26,D2:30,E:23,F:23},Cu_XLPE_3F:{A1:13,A2:13,B1:16,B2:16,C:19.5,D1:22,D2:26,E:20,F:20}},
  2.5: {Cu_PVC_1F:{A1:17.5,A2:18,B1:20,B2:20,C:24,D1:29,D2:32,E:26,F:26},Cu_PVC_3F:{A1:15,A2:16,B1:17.5,B2:17.5,C:21,D1:24,D2:28,E:23,F:23},Cu_XLPE_1F:{A1:21,A2:22,B1:25,B2:25,C:30,D1:34,D2:38,E:31,F:31},Cu_XLPE_3F:{A1:18,A2:19,B1:21,B2:21,C:26,D1:29,D2:33,E:27,F:27}},
  4:   {Cu_PVC_1F:{A1:23,A2:24,B1:27,B2:27,C:32,D1:38,D2:42,E:35,F:35},Cu_PVC_3F:{A1:20,A2:21,B1:24,B2:24,C:28,D1:31,D2:37,E:31,F:30},Cu_XLPE_1F:{A1:28,A2:30,B1:34,B2:34,C:40,D1:44,D2:50,E:42,F:42},Cu_XLPE_3F:{A1:24,A2:26,B1:29,B2:29,C:35,D1:37,D2:44,E:37,F:36}},
  6:   {Cu_PVC_1F:{A1:29,A2:31,B1:34,B2:34,C:41,D1:48,D2:54,E:45,F:44},Cu_PVC_3F:{A1:25,A2:28,B1:30,B2:30,C:36,D1:40,D2:46,E:40,F:38},Cu_XLPE_1F:{A1:36,A2:38,B1:43,B2:43,C:51,D1:56,D2:64,E:54,F:53},Cu_XLPE_3F:{A1:31,A2:33,B1:37,B2:37,C:44,D1:47,D2:55,E:47,F:46}},
  10:  {Cu_PVC_1F:{A1:39,A2:42,B1:46,B2:46,C:57,D1:63,D2:72,E:61,F:59},Cu_PVC_3F:{A1:34,A2:37,B1:41,B2:41,C:50,D1:54,D2:62,E:54,F:52},Cu_XLPE_1F:{A1:50,A2:53,B1:60,B2:60,C:70,D1:73,D2:84,E:75,F:72},Cu_XLPE_3F:{A1:43,A2:46,B1:52,B2:52,C:60,D1:62,D2:73,E:65,F:63}},
  16:  {Cu_PVC_1F:{A1:52,A2:56,B1:62,B2:62,C:76,D1:81,D2:95,E:81,F:79},Cu_PVC_3F:{A1:45,A2:49,B1:54,B2:54,C:68,D1:70,D2:84,E:73,F:70},Cu_XLPE_1F:{A1:66,A2:70,B1:80,B2:80,C:94,D1:95,D2:110,E:100,F:97},Cu_XLPE_3F:{A1:57,A2:61,B1:69,B2:69,C:82,D1:82,D2:97,E:87,F:84}},
  25:  {Cu_PVC_1F:{A1:68,A2:73,B1:80,B2:80,C:101,D1:101,D2:119,E:106,F:103},Cu_PVC_3F:{A1:60,A2:64,B1:70,B2:70,C:89,D1:86,D2:105,E:95,F:91},Cu_XLPE_1F:{A1:84,A2:90,B1:101,B2:101,C:119,D1:119,D2:140,E:127,F:123},Cu_XLPE_3F:{A1:73,A2:78,B1:87,B2:87,C:103,D1:102,D2:124,E:110,F:107}},
  35:  {Cu_PVC_1F:{A1:83,A2:89,B1:99,B2:99,C:125,D1:122,D2:145,E:131,F:127},Cu_PVC_3F:{A1:73,A2:79,B1:86,B2:86,C:110,D1:103,D2:128,E:117,F:112},Cu_XLPE_1F:{A1:103,A2:110,B1:126,B2:126,C:148,D1:143,D2:170,E:158,F:152},Cu_XLPE_3F:{A1:89,A2:95,B1:108,B2:108,C:129,D1:122,D2:150,E:137,F:132}},
  50:  {Cu_PVC_1F:{A1:99,A2:108,B1:118,B2:118,C:151,D1:144,D2:173,E:158,F:153},Cu_PVC_3F:{A1:89,A2:96,B1:104,B2:104,C:134,D1:122,D2:154,E:141,F:135},Cu_XLPE_1F:{A1:125,A2:135,B1:153,B2:153,C:182,D1:169,D2:204,E:192,F:185},Cu_XLPE_3F:{A1:108,A2:117,B1:133,B2:133,C:159,D1:144,D2:180,E:167,F:161}},
  70:  {Cu_PVC_1F:{A1:125,A2:136,B1:149,B2:149,C:192,D1:178,D2:213,E:200,F:194},Cu_PVC_3F:{A1:112,A2:122,B1:133,B2:133,C:171,D1:151,D2:190,E:179,F:172},Cu_XLPE_1F:{A1:160,A2:173,B1:196,B2:196,C:234,D1:209,D2:253,E:246,F:237},Cu_XLPE_3F:{A1:138,A2:150,B1:171,B2:171,C:203,D1:178,D2:224,E:213,F:205}},
  95:  {Cu_PVC_1F:{A1:150,A2:164,B1:179,B2:179,C:232,D1:211,D2:252,E:241,F:233},Cu_PVC_3F:{A1:135,A2:148,B1:161,B2:161,C:207,D1:179,D2:225,E:216,F:207},Cu_XLPE_1F:{A1:195,A2:210,B1:238,B2:238,C:284,D1:249,D2:300,E:298,F:288},Cu_XLPE_3F:{A1:169,A2:183,B1:207,B2:207,C:248,D1:211,D2:266,E:259,F:250}},
  120: {Cu_PVC_1F:{A1:172,A2:188,B1:206,B2:206,C:269,D1:240,D2:287,E:278,F:268},Cu_PVC_3F:{A1:155,A2:169,B1:186,B2:186,C:240,D1:203,D2:257,E:249,F:239},Cu_XLPE_1F:{A1:226,A2:244,B1:276,B2:276,C:330,D1:285,D2:344,E:346,F:334},Cu_XLPE_3F:{A1:195,A2:212,B1:240,B2:240,C:288,D1:242,D2:306,E:299,F:288}},
  150: {Cu_PVC_1F:{A1:195,A2:216,B1:232,B2:232,C:300,D1:271,D2:324,E:318,F:307},Cu_PVC_3F:{A1:176,A2:193,B1:211,B2:211,C:271,D1:230,D2:292,E:285,F:273},Cu_XLPE_1F:{A1:261,A2:282,B1:319,B2:319,C:381,D1:323,D2:392,E:399,F:384},Cu_XLPE_3F:{A1:226,A2:245,B1:278,B2:278,C:334,D1:274,D2:349,E:344,F:332}},
  185: {Cu_PVC_1F:{A1:222,A2:245,B1:265,B2:265,C:341,D1:304,D2:365,E:362,F:349},Cu_PVC_3F:{A1:201,A2:221,B1:240,B2:240,C:308,D1:258,D2:329,E:324,F:311},Cu_XLPE_1F:{A1:298,A2:322,B1:364,B2:364,C:436,D1:365,D2:445,E:456,F:440},Cu_XLPE_3F:{A1:261,A2:282,B1:318,B2:318,C:383,D1:310,D2:397,E:393,F:379}},
  240: {Cu_PVC_1F:{A1:261,A2:286,B1:312,B2:312,C:400,D1:354,D2:425,E:424,F:409},Cu_PVC_3F:{A1:236,A2:259,B1:283,B2:283,C:361,D1:299,D2:383,E:380,F:365},Cu_XLPE_1F:{A1:352,A2:380,B1:430,B2:430,C:515,D1:422,D2:516,E:538,F:520},Cu_XLPE_3F:{A1:308,A2:333,B1:376,B2:376,C:452,D1:358,D2:460,E:464,F:447}},
  300: {Cu_PVC_1F:{A1:298,A2:328,B1:358,B2:358,C:458,D1:400,D2:485,E:486,F:469},Cu_PVC_3F:{A1:270,A2:297,B1:324,B2:324,C:415,D1:340,D2:436,E:435,F:419},Cu_XLPE_1F:{A1:402,A2:435,B1:497,B2:497,C:594,D1:477,D2:590,E:621,F:599},Cu_XLPE_3F:{A1:352,A2:381,B1:435,B2:435,C:524,D1:405,D2:530,E:535,F:516}},
};
const SECS=Object.keys(IZ).map(Number).sort((a,b)=>a-b);
const MCB=[0.5,1,1.6,2,3,4,6,10,13,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630];
const FUSE=[2,4,6,10,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630,800,1000];
const FP={
  B:{name:'Wyłącznik B',std:'PN-EN 60898',i1r:1.13,i2r:1.45,mlo:3,mhi:5,note:'Oświetlenie, gniazda. Mag. 3–5×I_n.'},
  C:{name:'Wyłącznik C',std:'PN-EN 60898',i1r:1.13,i2r:1.45,mlo:5,mhi:10,note:'Silniki, transformatory. Mag. 5–10×I_n.'},
  D:{name:'Wyłącznik D',std:'PN-EN 60898',i1r:1.13,i2r:1.45,mlo:10,mhi:20,note:'Duże rozruchy — spawarki, UPS. Mag. 10–20×I_n.'},
  gG:{name:'Wkładka gG',std:'PN-EN 60269-1',i1r:1.25,i2r:1.60,mlo:null,mhi:null,note:'Pełna ochrona przeciążeniowa i zwarciowa kabla.'},
  gF:{name:'Wkładka gF',std:'PN-EN 60269-4',i1r:1.25,i2r:1.60,mlo:null,mhi:null,note:'Kable elastyczne, lepsza ochrona przy małych prądach.'},
};
const MD={A1:'Przewód 1-żył. w rurce instalacyjnej w izolowanej ścianie.',A2:'Kabel wielożył. w rurce instalacyjnej w izolowanej ścianie.',B1:'Przewód 1-żył. w rurce instalacyjnej na ścianie / stropie.',B2:'Kabel wielożył. w rurce instalacyjnej na ścianie / stropie.',C:'Kabel wielożył. bezpośrednio na ścianie lub stropie.',D1:'Kabel wielożył. w rurze ochronnej zakopany w ziemi.',D2:'Kabel wielożył. bezpośrednio zakopany w ziemi.',E:'Kabel na drabince kablowej lub swobodnie w powietrzu.',F:'Kable na drabince — dotykające się wzajemnie.'};

// ═══ STATE ═══
let G=null; // {Ib,P_kW,cos,kT,k1-4,method,cond,ins,ph,volt,n,cpp,ft,userIn,candidates,autoIdx}
let gIdx=0; // aktualny indeks w SECS

// ═══ HELPERS ═══
function getIz(sec,method,cond,ph,ins){
  const d=IZ[sec]; if(!d) return null;
  const k=`${cond}_${ins}_${ph==='1'?'1F':'3F'}`;
  let t=d[k];
  if(!t&&cond==='Al'){
    const t2=d[`Cu_${ins}_${ph==='1'?'1F':'3F'}`];
    if(t2){const s={};Object.entries(t2).forEach(([k,v])=>s[k]=+(v*.78).toFixed(1));return s[method]??null;}
  }
  return t ? (t[method]??null) : null;
}
function nextS(v,arr){return arr.find(x=>x>=v)??arr[arr.length-1];}
function calcFuses(Ib,IzTot,ft,userIn){
  return(ft==='auto'?['B','C','D','gG','gF']:[ft]).map(t=>{
    const p=FP[t];
    const ser=['B','C','D'].includes(t)?MCB:FUSE;
    const In=userIn??nextS(Math.ceil(Ib),ser);
    const I2=+(In*p.i2r).toFixed(2);
    const i1=+(In*p.i1r).toFixed(2);
    const lim=+(1.45*IzTot).toFixed(2);
    const c1=Ib<=In,c2=In<=IzTot,c3=I2<=lim;
    return{t,name:p.name,std:p.std,In,I2,i1,lim,c1,c2,c3,ok:c1&&c2&&c3,note:p.note,mlo:p.mlo,mhi:p.mhi};
  });
}

// ═══ UI ═══
let iMode='I';
function setMode(m){
  iMode=m;
  document.getElementById('modeI').style.display=m==='I'?'':'none';
  document.getElementById('modeP').style.display=m==='P'?'':'none';
  document.getElementById('tabI').classList.toggle('on',m==='I');
  document.getElementById('tabP').classList.toggle('on',m==='P');
}
function onVolt(){
  const v=document.getElementById('inV').value;
  document.getElementById('inPh').value=v==='400'?'3':'1';
}
function onNChange(){
  const n=parseInt(document.getElementById('inN').value);
  const el=document.getElementById('parNote');
  el.style.display=n>1?'':'none';
  if(n>1) el.textContent=`${n} kabli ułożonych równolegle. Każdy kabel przewodzi 1/${n} całkowitego prądu. Wymagane identyczne długości, przekroje i materiały (§523.6).`;
}
function updMDesc(){document.getElementById('mDesc').textContent=MD[document.getElementById('inM').value]||'';}
updMDesc();

// STEPPER
function step(d){
  if(!G) return;
  gIdx=Math.max(0,Math.min(SECS.length-1,gIdx+d));
  reRender();
}
function reRender(){
  if(!G) return;
  const {kT,method,cond,ins,ph,n,cpp,ft,userIn,Ib,candidates,autoIdx}=G;
  const sec=SECS[gIdx];
  const IzB=getIz(sec,method,cond,ph,ins);
  const IzC=IzB?+(IzB*kT).toFixed(2):0;
  const IzT=+(IzC*n*cpp).toFixed(2);
  const ok=IzT>=Ib;
  const cur={sec,IzB,IzC,IzT,ok,n,cpp};
  const fuses=ok?calcFuses(Ib,IzT,ft,userIn):[];
  render({...G,cur,fuses});
}

// ═══ MAIN CALC ═══
function calc(){
  const volt=parseInt(document.getElementById('inV').value);
  const ph=document.getElementById('inPh').value;
  const method=document.getElementById('inM').value;
  const cond=document.getElementById('inCond').value;
  const ins=document.getElementById('inIns').value;
  const ft=document.getElementById('inFT').value;
  const userIn=parseFloat(document.getElementById('inIn').value)||null;
  const n=parseInt(document.getElementById('inN').value)||1;
  const cpp=parseInt(document.getElementById('inCpp').value)||1;
  const k1=parseFloat(document.getElementById('k1').value)||1;
  const k2=parseFloat(document.getElementById('k2').value)||1;
  const k3=parseFloat(document.getElementById('k3').value)||1;
  const k4=parseFloat(document.getElementById('k4').value)||1;
  const kT=+(k1*k2*k3*k4).toFixed(4);

  let Ib,P_kW=null,cosV=null;
  if(iMode==='I'){
    Ib=parseFloat(document.getElementById('inIb').value);
    if(!Ib||Ib<=0){err('Podaj prąd obliczeniowy I<sub>B</sub> > 0 A.');return;}
  } else {
    const P=parseFloat(document.getElementById('inP').value);
    const cf=parseFloat(document.getElementById('inCos').value)||.85;
    const et=parseFloat(document.getElementById('inEta').value)||1;
    const ef=parseFloat(document.getElementById('inEff').value)||1;
    if(!P||P<=0){err('Podaj moc P > 0 kW.');return;}
    const Pe=(P*1000*et)/ef;
    Ib=+(ph==='3'?Pe/(Math.sqrt(3)*volt*cf):Pe/(volt*cf)).toFixed(2);
    P_kW=P; cosV=cf;
  }

  const IbPerPath=+(Ib/(n*cpp)).toFixed(2);
  const candidates=SECS.map(s=>{
    const IzB=getIz(s,method,cond,ph,ins); if(IzB===null) return null;
    const IzC=+(IzB*kT).toFixed(2);
    const IzT=+(IzC*n*cpp).toFixed(2);
    return{s,IzB,IzC,IzT,ok:IzT>=Ib};
  }).filter(Boolean);

  const autoC=candidates.find(c=>c.ok);
  const autoIdx=autoC?SECS.indexOf(autoC.s):SECS.length-1;
  gIdx=autoIdx;

  const cur=autoC
    ?{sec:autoC.s,IzB:autoC.IzB,IzC:autoC.IzC,IzT:autoC.IzT,ok:true,n,cpp}
    :{sec:SECS[SECS.length-1],IzB:getIz(SECS[SECS.length-1],method,cond,ph,ins),IzC:0,IzT:0,ok:false,n,cpp};
  if(!autoC&&cur.IzB){cur.IzC=+(cur.IzB*kT).toFixed(2);cur.IzT=+(cur.IzC*n*cpp).toFixed(2);}

  const fuses=cur.ok?calcFuses(Ib,cur.IzT,ft,userIn):[];
  G={Ib,P_kW,cosV,IbPerPath,kT,k1,k2,k3,k4,method,cond,ins,ph,volt,n,cpp,ft,userIn,candidates,autoIdx,cur,fuses};
  pulseAnim();
  render(G);
}

function err(m){document.getElementById('rArea').innerHTML=`<div class="sb err"><div class="sdot"></div><span>${m}</span></div>`;}

// ═══ RENDER ═══
function render(R){
  const{Ib,P_kW,cosV,IbPerPath,kT,k1,k2,k3,k4,method,cond,ins,ph,volt,n,cpp,ft,userIn,candidates,autoIdx,cur,fuses}=R;
  const sec=cur.sec; const isM=gIdx!==autoIdx;
  const area=document.getElementById('rArea');

  // STATUS
  let st='';
  if(!cur.ok){
    st=`<div class="sb err"><div class="sdot"></div><span>Przekrój <strong>${sec} mm²</strong> nie spełnia warunków — I<sub>z,tot</sub> = ${cur.IzT} A &lt; I<sub>B</sub> = ${Ib} A. Zwiększ przekrój lub liczbę kabli równoległych.</span></div>`;
  } else {
    const mg=+(((cur.IzT-Ib)/Ib)*100).toFixed(1);
    const cl=mg>35?'warn':'ok';
    st=`<div class="sb ${cl}"><div class="sdot"></div><span>${cl==='ok'?`Dobór prawidłowy — rezerwa ${mg}%${isM?' (przekrój zmieniony ręcznie)':''}.`:`Duża rezerwa ${mg}%. Rozważ mniejszy przekrój lub mniej kabli równoległych.`}</span></div>`;
  }

  // STEPPER
  const autoSec=candidates.find(c=>c.ok)?.s;
  const sNote=!cur.ok
    ?`<div class="snote mod">⚠ Nie spełnia warunków — I_z,tot = ${cur.IzT} A &lt; ${Ib} A</div>`
    :isM
      ?`<div class="snote mod">Zmieniony ręcznie. Automatycznie zalecany: ${autoSec} mm²</div>`
      :`<div class="snote good">✓ Przekrój optymalny</div>`;

  const step=`<div class="sbox">
    <div class="sbox-lbl">Przekrój żyły — zmień ręcznie <span class="tip" data-tip="Kliknij − lub + aby zmienić przekrój i zobaczyć wpływ na wyniki">?</span></div>
    <div class="srow">
      <button class="sbtn" onclick="step(-1)" ${gIdx===0?'disabled':''} aria-label="Zmniejsz przekrój">−</button>
      <div class="sdisplay">${sec} mm²</div>
      <button class="sbtn" onclick="step(+1)" ${gIdx===SECS.length-1?'disabled':''} aria-label="Zwiększ przekrój">+</button>
    </div>
    ${sNote}
    ${n>1?`<div class="snote" style="margin-top:.3rem">Układ: ${n} kable × ${cpp} żył/fazę = <strong>${n*cpp} żył/fazę</strong> · I<sub>B</sub>/żyłę = <strong>${IbPerPath} A</strong></div>`:''}
  </div>`;

  // HERO
  const cL=cond==='Cu'?'miedź':'aluminium';
  const pL=ph==='1'?'1-faz.':'3-faz.';
  const iL=ins==='PVC'?'PVC 70°C':'XLPE 90°C';
  const hero=`<div class="rhero">
    <div>
      <div class="rhl">Przekrój żyły ${isM?'(ręczny)':'(zalecany)'}</div>
      <div class="rhv">${sec}<span>mm²</span></div>
      <div class="rhs">${cL} · ${iL} · ${pL} · metoda ${method}</div>
      ${n>1?`<div class="rh-par">⊕ ${n}×${cpp} żył/fazę · Σ I<sub>z</sub> = ${cur.IzT} A</div>`:''}
    </div>
    ${cableSVG(cur,ph)}
  </div>`;

  // CARDS
  const cards=`<div class="cgrid">
    <div class="card"><div class="cl">Prąd I<sub>B</sub></div>
      <div class="cv">${Ib}<span class="cu">A</span></div>
      <div class="cs">${P_kW?`${P_kW} kW, cosφ=${cosV}`:'Podany bezpośrednio'}</div></div>
    ${n>1
      ?`<div class="card hl"><div class="cl">I<sub>B</sub>/żyłę (÷${n*cpp})</div>
          <div class="cv">${IbPerPath}<span class="cu">A</span></div>
          <div class="cs">na 1 żyłę / kabel</div></div>`
      :`<div class="card"><div class="cl">I<sub>z,min</sub> wymagane</div>
          <div class="cv">${+(Ib/kT).toFixed(2)}<span class="cu">A</span></div>
          <div class="cs">I<sub>B</sub> / k<sub>tot</sub></div></div>`}
    <div class="card"><div class="cl">k<sub>total</sub></div>
      <div class="cv">${kT}</div>
      <div class="cs">${k1}×${k2}×${k3}×${k4}</div></div>
    ${cur.IzB?`
    <div class="card ${isM?'':'hl'}"><div class="cl">I<sub>z</sub> / kabel (koryg.)</div>
      <div class="cv">${cur.IzC}<span class="cu">A</span></div>
      <div class="cs">Baza: ${cur.IzB} A</div></div>
    <div class="card ${n>1?'hl':''}"><div class="cl">I<sub>z,total</sub></div>
      <div class="cv">${cur.IzT}<span class="cu">A</span></div>
      <div class="cs">${n>1?`${n}×${cpp}×${cur.IzC} A`:'Jeden kabel'}</div></div>
    <div class="card"><div class="cl">Rezerwa</div>
      <div class="cv">${cur.ok?`+${+((cur.IzT-Ib)/Ib*100).toFixed(1)}`:'n/d'}<span class="cu">${cur.ok?'%':''}</span></div>
      <div class="cs">${cur.ok?'powyżej I_B':'nie spełnia'}</div></div>`:''}
  </div>`;

  // PARALLEL VIS
  const parVis=n>1?parallelVis(cur,ph,cond):'' ;

  // FUSES
  let fuseSec='';
  if(cur.ok&&fuses.length){
    const fcards=fuses.map(f=>{
      const cl=f.ok?'fok':'fbad';
      const sb=f.ok?`<span class="badge bok">✓ Spełnia</span>`:`<span class="badge bno">✗ Nie spełnia</span>`;
      const ck=v=>v?`<span class="badge bok" style="font-size:.58rem;padding:1px 5px">✓</span>`:`<span class="badge bno" style="font-size:.58rem;padding:1px 5px">✗</span>`;
      return`<div class="fcard ${cl}">
        <div class="fhead"><span class="ftype">${f.name}</span>${sb}</div>
        <div class="fbody">
          <div class="frow"><span>I<sub>n</sub></span><strong>${f.In} A</strong></div>
          <div class="frow"><span>I<sub>1</sub> (niedział.)</span><strong>${f.i1} A</strong></div>
          <div class="frow"><span>I<sub>2</sub> (zadziałanie)</span><strong>${f.I2} A</strong></div>
          <div class="frow"><span>1,45·I<sub>z,tot</sub></span><strong>${f.lim} A</strong></div>
          ${f.mlo?`<div class="frow"><span>Mag. wyzwol.</span><strong>${f.mlo}–${f.mhi}×I<sub>n</sub></strong></div>`:''}
          <div style="margin-top:.32rem;display:flex;flex-direction:column;gap:.15rem">
            <div class="frow">${ck(f.c1)} I<sub>B</sub>≤I<sub>n</sub>: ${Ib}≤${f.In}</div>
            <div class="frow">${ck(f.c2)} I<sub>n</sub>≤I<sub>z,tot</sub>: ${f.In}≤${cur.IzT}</div>
            <div class="frow">${ck(f.c3)} I<sub>2</sub>≤1,45·I<sub>z</sub>: ${f.I2}≤${f.lim}</div>
          </div>
        </div>
        <div class="fnote">${f.note}<br><span style="opacity:.7">${f.std}</span></div>
      </div>`;
    }).join('');
    fuseSec=`<div class="panel">
      <div class="ph"><div class="phi">🛡️</div><h2>Zabezpieczenie — PN-HD 60364-4-43 §433</h2></div>
      <div class="pb">
        <p style="font-size:.7rem;color:var(--gray-text);margin-bottom:.8rem;line-height:1.5">
          Warunki: <strong>I<sub>B</sub>≤I<sub>n</sub>≤I<sub>z,tot</sub></strong> i <strong>I<sub>2</sub>≤1,45·I<sub>z,tot</sub></strong>.
          ${n>1?`I<sub>z,tot</sub> = ${n}×${cpp}×${cur.IzC} = <strong>${cur.IzT} A</strong>.`:''}
        </p>
        <div class="fgrid2">${fcards}</div>
      </div>
    </div>`;
  }

  // TABLE
  const trows=candidates.map(c=>{
    const isCur=c.s===sec;
    const isAuto=c.s===candidates.find(x=>x.ok)?.s;
    const trCl=isCur?(isM?'manual':'rec'):'';
    const bh=isCur&&isM?`<span class="badge bmod">⊙ Ręczny</span>`
      :isAuto?`<span class="badge bbest">★ Optymalny</span>`
      :c.ok?`<span class="badge bok">✓ Spełnia</span>`
      :`<span class="badge bno">✗ Za mały</span>`;
    const mg=c.ok?`+${+((c.IzT-Ib)/Ib*100).toFixed(1)}%`:'—';
    return`<tr class="${trCl}">
      <td><strong>${c.s} mm²</strong></td>
      <td>${c.IzB} A</td>
      <td>${c.IzC} A</td>
      <td>${n>1?`<strong>${c.IzT} A</strong>`:c.IzT+' A'}</td>
      <td>${mg}</td><td>${bh}</td></tr>`;
  }).join('');

  const tbl=`<div class="tpanel">
    <div class="tph">
      <h3>${method} · ${cond} · ${ins} · ${ph}F${n>1?` · ${n}×${cpp} równ.`:''}</h3>
      <span class="badge binfo">PN-HD 60364-5-52</span>
    </div>
    <div class="tscroll"><table>
      <thead><tr>
        <th>Przekrój</th><th>I<sub>z</sub> bazowe</th><th>I<sub>z</sub> koryg.</th>
        <th>I<sub>z,total</sub></th><th>Rezerwa</th><th>Status</th>
      </tr></thead>
      <tbody>${trows}</tbody>
    </table></div>
  </div>`;

  // NORM CHECK
  const bf=fuses.find(f=>f.ok)??fuses[0];
  const nrows=cur.ok?[
    ['I<sub>B</sub> ≤ I<sub>z,total</sub>',`${Ib} A ≤ ${cur.IzT} A`,Ib<=cur.IzT],
    ...(bf?[['I<sub>B</sub> ≤ I<sub>n</sub>',`${Ib} A ≤ ${bf.In} A`,bf.c1],
            ['I<sub>n</sub> ≤ I<sub>z,tot</sub>',`${bf.In} A ≤ ${cur.IzT} A`,bf.c2],
            ['I<sub>2</sub> ≤ 1,45·I<sub>z,tot</sub>',`${bf.I2} A ≤ ${bf.lim} A`,bf.c3]]:[]),
    ['k<sub>tot</sub>=k₁·k₂·k₃·k₄',`${k1}×${k2}×${k3}×${k4}=${kT}`,true],
    ...(n>1?[['I<sub>B</sub>/(n×cpp)',`${Ib}/(${n}×${cpp})=${IbPerPath} A/kabel`,true]]:[]),
  ].map(([c,v,ok])=>`<tr><td>${c}</td><td>${v}</td>
    <td><span class="badge ${ok?'bok':'bno'}">${ok?'✓ Spełniony':'✗ Niespełniony'}</span></td></tr>`).join(''):'' ;

  const norm=`<div class="panel ctbl">
    <div class="ph"><div class="phi">📋</div><h2>Warunki normatywne</h2></div>
    <div style="padding:0">
      ${nrows?`<div class="tscroll"><table>
        <thead><tr><th>Warunek</th><th>Wartości</th><th>Status</th></tr></thead>
        <tbody>${nrows}</tbody>
      </table></div>`
      :`<div style="padding:1rem;color:var(--gray-text);font-size:.82rem">Brak wyników lub przekrój nie spełnia warunków.</div>`}
    </div>
  </div>`;

  area.innerHTML=st+step+hero+cards+parVis+fuseSec+tbl+norm;
}

// ═══ SVG: przekrój kabla ═══
function cableSVG(cur,ph){
  const p3=ph==='3';
  return`<svg width="94" height="94" viewBox="0 0 110 110" style="flex-shrink:0">
    <circle cx="55" cy="55" r="50" fill="#1E3560" stroke="#F5C400" stroke-width="2.5"/>
    <circle cx="55" cy="55" r="33" fill="#0F1F3D"/>
    ${p3?`<circle cx="55" cy="31" r="8" fill="#1E3560" stroke="#EF4444" stroke-width="2"/>
    <text x="55" y="35" text-anchor="middle" font-family="Space Grotesk" font-size="7" font-weight="700" fill="#EF4444">L1</text>
    <circle cx="36" cy="63" r="8" fill="#1E3560" stroke="#3B82F6" stroke-width="2"/>
    <text x="36" y="67" text-anchor="middle" font-family="Space Grotesk" font-size="7" font-weight="700" fill="#3B82F6">L2</text>
    <circle cx="74" cy="63" r="8" fill="#1E3560" stroke="#F5C400" stroke-width="2"/>
    <text x="74" y="67" text-anchor="middle" font-family="Space Grotesk" font-size="7" font-weight="700" fill="#F5C400">L3</text>
    <circle cx="55" cy="55" r="5" fill="#22C55E"/>`:
    `<circle cx="40" cy="55" r="8" fill="#1E3560" stroke="#EF4444" stroke-width="2"/>
    <text x="40" y="59" text-anchor="middle" font-family="Space Grotesk" font-size="7" font-weight="700" fill="#EF4444">L</text>
    <circle cx="70" cy="55" r="8" fill="#1E3560" stroke="#3B82F6" stroke-width="2"/>
    <text x="70" y="59" text-anchor="middle" font-family="Space Grotesk" font-size="7" font-weight="700" fill="#3B82F6">N</text>
    <circle cx="55" cy="55" r="5" fill="#22C55E"/>`}
  </svg>`;
}

// ═══ SVG: UKŁAD RÓWNOLEGŁY ═══
function parallelVis(cur,ph,cond){
  const{sec,IzC,IzT,n,cpp}=cur;
  const p3=ph==='3';
  const Ib=G?.Ib??0;
  const IbPer=G?.IbPerPath??0;
  const condCol=cond==='Cu'?'#F59E0B':'#94A3B8';
  const maxShow=Math.min(n,5);

  // Definicje żył
  const baseC=p3?[{c:'#EF4444',l:'L1'},{c:'#3B82F6',l:'L2'},{c:'#F5C400',l:'L3'},{c:'#22C55E',l:'PE'}]
               :[{c:'#EF4444',l:'L'},{c:'#3B82F6',l:'N'},{c:'#22C55E',l:'PE'}];

  // Expand cpp
  function expand(bc){
    const out=[];
    bc.forEach(cd=>{
      if(cd.l==='PE'||cd.l==='N'){out.push(cd);}
      else{for(let j=0;j<cpp;j++) out.push({c:cd.c,l:cpp>1?cd.l+(j+1):cd.l});}
    });
    return out;
  }
  const conductors=expand(baseC);
  const tot=conductors.length;

  function makeCable(idx){
    const sz=66;
    const cx=sz/2,cy=sz/2,R=Math.floor(sz*.44);
    const cr=Math.max(4,Math.min(8,Math.floor(12/Math.ceil(Math.sqrt(tot)))));
    // place conductors on circle
    const pts=[];
    const inner=R-cr-2;
    if(tot<=5){
      const angleStep=360/tot;
      const offset=270;
      for(let k=0;k<tot;k++){
        const a=(offset+k*angleStep)*Math.PI/180;
        pts.push({x:cx+inner*Math.cos(a),y:cy+inner*Math.sin(a)});
      }
    } else {
      // two rings
      const ring1=Math.ceil(tot/2),ring2=tot-ring1;
      const r1=inner*.6,r2=inner;
      for(let k=0;k<ring1;k++){const a=(270+k*360/ring1)*Math.PI/180;pts.push({x:cx+r1*Math.cos(a),y:cy+r1*Math.sin(a)});}
      for(let k=0;k<ring2;k++){const a=(270+k*360/ring2)*Math.PI/180;pts.push({x:cx+r2*Math.cos(a),y:cy+r2*Math.sin(a)});}
    }
    const cSvgs=conductors.map((cd,k)=>{
      const p=pts[k]||{x:cx,y:cy};
      return`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${cr}" fill="#1E3560" stroke="${cd.c}" stroke-width="1.6"/>
      <text x="${p.x.toFixed(1)}" y="${(p.y+cr*.4).toFixed(1)}" text-anchor="middle" font-family="Space Grotesk" font-size="${Math.max(4,cr-1)}" font-weight="700" fill="${cd.c}">${cd.l}</text>`;
    }).join('');
    return`<div class="citem">
      <svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}">
        <circle cx="${cx}" cy="${cy}" r="${R+2}" fill="#162848" stroke="${condCol}" stroke-width="1.8"/>
        <circle cx="${cx}" cy="${cy}" r="${R-2}" fill="#0F1F3D"/>
        ${cSvgs}
      </svg>
      <span class="citem-lbl">Kabel ${idx+1}</span>
    </div>`;
  }

  let cablesHtml='';
  for(let i=0;i<maxShow;i++) cablesHtml+=makeCable(i);
  if(n>maxShow) cablesHtml+=`<div class="citem" style="justify-content:center;padding-top:16px">
    <div style="font-family:var(--fd);font-size:1.3rem;font-weight:700;color:var(--gray-text)">+${n-maxShow}</div>
    <span class="citem-lbl">więcej</span></div>`;

  return`<div class="parpanel">
    <div class="ph"><div class="phi">⊕</div><h2>Układ równoległy — ${n} kabli × ${cpp} żył/fazę · ${sec} mm²</h2></div>
    <div class="cables-row">${cablesHtml}</div>
    <div class="pstats">
      <div class="psc"><div class="psc-l">Kabli równolegle</div><div class="psc-v">${n} <span class="psc-u">szt.</span></div></div>
      <div class="psc"><div class="psc-l">Żył/fazę łącznie</div><div class="psc-v">${n*cpp} <span class="psc-u">żył</span></div></div>
      <div class="psc"><div class="psc-l">I<sub>z</sub>/kabel</div><div class="psc-v">${IzC} <span class="psc-u">A</span></div></div>
      <div class="psc"><div class="psc-l">I<sub>z,total</sub></div><div class="psc-v">${IzT} <span class="psc-u">A</span></div></div>
      <div class="psc"><div class="psc-l">I<sub>B</sub>/żyłę</div><div class="psc-v">${IbPer} <span class="psc-u">A</span></div></div>
      <div class="psc"><div class="psc-l">Przekrój</div><div class="psc-v">${sec} <span class="psc-u">mm²</span></div></div>
    </div>
    <div class="par-warn">⚠ §523.6: Kable równoległe muszą mieć <strong>identyczny przekrój, materiał żył, długość i metodę ułożenia</strong>. Prąd równoważnie dzielony tylko przy spełnieniu tych warunków.</div>
  </div>`;
}

// ═══ PULSE ANIM ═══
function pulseAnim(){
  const r=document.querySelector('#cableSVG #pulseRing')||document.querySelector('#pulseRing');
  if(!r) return;
  let t=0; r.setAttribute('opacity','.7'); r.setAttribute('r','68');
  const id=setInterval(()=>{
    t+=.05; r.setAttribute('r',68+t*14); r.setAttribute('opacity',Math.max(0,.7-t*.85));
    if(t>.85){clearInterval(id);r.setAttribute('opacity','0');r.setAttribute('r','68');}
  },28);
}
