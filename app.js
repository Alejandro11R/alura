// ══════════════════════════════════════════════════════════
//  CATÁLOGO BASE DE SERVICIOS
// ══════════════════════════════════════════════════════════
const CATALOGO_BASE = [
  {nombre:'Manicura Semi',tiempo:2,costoTiempo:19642,costoMat:11636,margen:.30,precioFinal:45000},
  {nombre:'Sof Gel',tiempo:4,costoTiempo:39284,costoMat:13323,margen:.40,precioFinal:75000},
  {nombre:'Builder Gel',tiempo:3,costoTiempo:29463,costoMat:11200,margen:.35,precioFinal:55000},
  {nombre:'Recubrimiento Acrílico',tiempo:4,costoTiempo:39284,costoMat:12287,margen:.40,precioFinal:80000},
  {nombre:'Pedicura Básica',tiempo:2,costoTiempo:14731,costoMat:8497,margen:.40,precioFinal:37000},
  {nombre:'Pedicura Premium',tiempo:2.5,costoTiempo:24552,costoMat:11380,margen:.35,precioFinal:50000},
  {nombre:'Manicura Hombre',tiempo:.5,costoTiempo:5000,costoMat:5751,margen:.35,precioFinal:15000},
  {nombre:'Pedicura Hombre',tiempo:1.5,costoTiempo:14731,costoMat:7446,margen:.40,precioFinal:35000},
  {nombre:'PAQ Semi Manos+Pies',tiempo:4.5,costoTiempo:34373,costoMat:20200,margen:.30,precioFinal:75000},
  {nombre:'PAQ Premium Manicura+Pedicura',tiempo:4.5,costoTiempo:44194,costoMat:23016,margen:.30,precioFinal:85000},
  {nombre:'PAQ Gel Lover Sof Gel+Pedicura Básica',tiempo:6.5,costoTiempo:54015,costoMat:21820,margen:.30,precioFinal:99000},
  {nombre:'PAQ Caballero',tiempo:2,costoTiempo:19642,costoMat:13200,margen:.30,precioFinal:45000},
  {nombre:'Recubrimiento Rubber Base',tiempo:3,costoTiempo:29463,costoMat:12500,margen:.35,precioFinal:60000},
  {nombre:'Poligel',tiempo:3.5,costoTiempo:34373,costoMat:14000,margen:.35,precioFinal:70000},
];

const INVENTARIO_BASE = [
  {codigo:'ES-01',marca:'Hola Señorita',nombre:'Esmalte #01',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-413',marca:'Hola Señorita',nombre:'Esmalte #413',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-147',marca:'Hola Señorita',nombre:'Esmalte #147',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-54',marca:'Hola Señorita',nombre:'Esmalte #54',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-57',marca:'Hola Señorita',nombre:'Esmalte #57',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-371',marca:'Hola Señorita',nombre:'Esmalte #371',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-121',marca:'Hola Señorita',nombre:'Esmalte #121',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-357',marca:'Hola Señorita',nombre:'Esmalte #357',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-32',marca:'Hola Señorita',nombre:'Esmalte #32',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-387',marca:'Hola Señorita',nombre:'Esmalte #387',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-380',marca:'Hola Señorita',nombre:'Esmalte #380',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-422',marca:'Hola Señorita',nombre:'Esmalte #422',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-70',marca:'Hola Señorita',nombre:'Esmalte #70',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-313',marca:'Hola Señorita',nombre:'Esmalte #313',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-51',marca:'Hola Señorita',nombre:'Esmalte #51',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-39',marca:'Hola Señorita',nombre:'Esmalte #39',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-52',marca:'Hola Señorita',nombre:'Esmalte #52',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-26',marca:'Hola Señorita',nombre:'Esmalte #26',categoria:'ESMALTE',stock:2,min:2,costo:13000},
  {codigo:'ES-80',marca:'Hola Señorita',nombre:'Esmalte #80',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-85',marca:'Hola Señorita',nombre:'Esmalte #85',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-300',marca:'Hola Señorita',nombre:'Esmalte #300',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-140',marca:'Hola Señorita',nombre:'Esmalte #140',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-309',marca:'Hola Señorita',nombre:'Esmalte #309',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-120',marca:'Hola Señorita',nombre:'Esmalte #120',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-366',marca:'Hola Señorita',nombre:'Esmalte #366',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'ES-146',marca:'Hola Señorita',nombre:'Esmalte #146',categoria:'ESMALTE',stock:1,min:2,costo:13000},
  {codigo:'BT-136',marca:'Hola Señorita',nombre:'Base Translúcida #136',categoria:'BASE TRANSLUCIDA',stock:1,min:2,costo:26000},
  {codigo:'GN-01',marca:'Nash',nombre:'Color Gel Nash',categoria:'GEL',stock:3,min:2,costo:24000},
  {codigo:'BG-01',marca:'General',nombre:'Builder Gel',categoria:'GEL',stock:2,min:1,costo:35000},
  {codigo:'AC-01',marca:'General',nombre:'Acrílico',categoria:'ACRÍLICO',stock:2,min:1,costo:27000},
  {codigo:'IN-01',marca:'General',nombre:'Alcohol',categoria:'INSUMO',stock:3,min:2,costo:4000},
  {codigo:'IN-02',marca:'General',nombre:'Bolsa esterilización',categoria:'INSUMO',stock:5,min:3,costo:9000},
  {codigo:'IN-03',marca:'General',nombre:'Desinfectante superficies',categoria:'INSUMO',stock:2,min:2,costo:6000},
  {codigo:'IN-04',marca:'General',nombre:'Guantes',categoria:'INSUMO',stock:4,min:3,costo:17000},
  {codigo:'IN-05',marca:'General',nombre:'Tapabocas',categoria:'INSUMO',stock:5,min:3,costo:0},
  {codigo:'IN-06',marca:'General',nombre:'Toallas sin motas',categoria:'INSUMO',stock:3,min:2,costo:16800},
  {codigo:'IN-07',marca:'General',nombre:'Protein Bond',categoria:'INSUMO',stock:2,min:2,costo:28000},
  {codigo:'IN-08',marca:'General',nombre:'Anti Hongos',categoria:'INSUMO',stock:3,min:2,costo:10000},
  {codigo:'IN-09',marca:'General',nombre:'Aceite de Cutícula',categoria:'INSUMO',stock:2,min:2,costo:7000},
  {codigo:'IN-10',marca:'General',nombre:'Crema Hidratante',categoria:'INSUMO',stock:2,min:2,costo:17000},
  {codigo:'IN-11',marca:'General',nombre:'Exfoliante',categoria:'INSUMO',stock:1,min:2,costo:12000},
  {codigo:'IN-12',marca:'General',nombre:'Base Coat',categoria:'INSUMO',stock:1,min:2,costo:24000},
];

// ══════════════════════════════════════════════════════════
//  ESTADO LOCAL (Firebase sincroniza en background)
// ══════════════════════════════════════════════════════════
const State = {
  servicios: CATALOGO_BASE.map(s=>({...s,id:'base_'+s.nombre,esBase:true})),
  inventario: INVENTARIO_BASE.map(i=>({...i,id:'base_'+i.codigo,esBase:true})),
  finanzas: [], clientes: [], agenda: [], reservas: [],
  txFilter:'all', txType:'in', invFiltro:'TODOS', resFiltro:'todas',
  currentSection:'cotizador'
};

const fmt = n => '$'+Math.round(n||0).toLocaleString('es-CO');
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DIAS2 = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
const MES3  = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];

// ── Firebase helpers ───────────────────────────────────
async function fbGet(colName) {
  if (!window._fbReady) return [];
  try {
    const snap = await window._getDocs(window._col(window._db, colName));
    return snap.docs.map(d=>({...d.data(), _id:d.id}));
  } catch(e) { console.warn('fbGet error', colName, e); return []; }
}

async function fbAdd(colName, data) {
  if (!window._fbReady) return null;
  try {
    const ref = await window._addDoc(window._col(window._db, colName), data);
    return ref.id;
  } catch(e) { console.error('fbAdd error', e); return null; }
}

async function fbDel(colName, id) {
  if (!window._fbReady) return;
  try { await window._deleteDoc(window._doc(window._db, colName, id)); }
  catch(e) { console.error('fbDel error', e); }
}

// ── UI helpers ─────────────────────────────────────────
function showToast(msg, d=2500) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),d);
}
function showLoader(s){document.getElementById('global-loader').classList.toggle('show',s)}
function setLoading(id,l,lbl){const b=document.getElementById(id);if(!b)return;b.disabled=l;b.textContent=l?'Guardando...':lbl}
function openModal(id){document.getElementById(id).classList.add('open');if(id==='modal-tx')document.getElementById('tx-date').valueAsDate=new Date();if(id==='modal-agenda'){document.getElementById('ag-fecha').valueAsDate=new Date();poblarDl()}}
function closeModal(id){document.getElementById(id).classList.remove('open')}

// Close modals on backdrop click
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.modal-overlay').forEach(o=>{
    o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open')});
  });
  initApp();
});

// ── Navigation ──────────────────────────────────────────
function showSection(id,btn){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(btn)btn.classList.add('active');
  State.currentSection=id;
  if(id==='servicios')renderServicios();
  if(id==='inventario')renderInventario();
  if(id==='finanzas')renderFinanzas();
  if(id==='clientes')renderClientes();
  if(id==='agenda')renderAgenda();
  if(id==='reservas')loadReservas();
}

// ══════════════════════════════════════════════════════════
//  INIT — carga datos de Firebase
// ══════════════════════════════════════════════════════════
async function initApp(){
  showLoader(true);
  const load = async()=>{
    const [svcs,inv,fin,cli,ag] = await Promise.all([
      fbGet('servicios'), fbGet('inventario'), fbGet('finanzas'),
      fbGet('clientes'), fbGet('agenda')
    ]);
    // Merge base + firebase custom
    State.servicios = [
      ...CATALOGO_BASE.map(s=>({...s,id:'base_'+s.nombre,esBase:true})),
      ...svcs.map(s=>({Nombre:s.nombre,Tiempo:s.tiempo,CostoTiempo:s.costoTiempo||0,CostoMateriales:s.costoMat||0,Margen:s.margen||.35,PrecioFinal:s.precioFinal,id:s._id,esBase:false}))
    ];
    State.inventario = [
      ...INVENTARIO_BASE.map(i=>({...i,id:'base_'+i.codigo,esBase:true})),
      ...inv.map(i=>({...i,id:i._id,esBase:false}))
    ];
    State.finanzas = fin.map(f=>({...f,id:f._id}));
    State.clientes = cli.map(c=>({...c,id:c._id}));
    State.agenda   = ag.map(a=>({...a,id:a._id}));
    populateCotSelect();
    showLoader(false);
    renderAgenda();
  };
  if(window._fbReady){ await load(); }
  else { window.addEventListener('fbReady',load); setTimeout(()=>{showLoader(false);renderAgenda();},8000); }
}

async function loadReservas(){
  const res = await fbGet('reservas');
  State.reservas = res.map(r=>({...r,id:r._id}));
  renderReservas();
}

// ══════════════════════════════════════════════════════════
//  COTIZADOR
// ══════════════════════════════════════════════════════════
function populateCotSelect(){
  const sel=document.getElementById('cot-service');
  sel.innerHTML='<option value="">— Selecciona —</option>';
  State.servicios.forEach((s,i)=>sel.innerHTML+=`<option value="${i}">${s.nombre||s.Nombre}</option>`);
}

function calcCotizador(){
  const idx=parseInt(document.getElementById('cot-service').value);
  if(isNaN(idx))return;
  const s=State.servicios[idx];
  if(!s)return;
  const margin=parseInt(document.getElementById('cot-slider').value)/100;
  let extras=0;
  document.querySelectorAll('.extra-chip input:checked').forEach(cb=>extras+=parseFloat(cb.value)||0);
  const ct=parseFloat(s.CostoTiempo||s.costoTiempo)||0;
  const cm=parseFloat(s.CostoMateriales||s.costoMat)||0;
  const total=ct+cm+extras;
  const sug=total*(1+margin);
  document.getElementById('cot-price').textContent=fmt(sug);
  document.getElementById('cot-cost').textContent=fmt(total);
  document.getElementById('cot-gain').textContent=fmt(sug-total);
  document.getElementById('cot-time').textContent=(s.Tiempo||s.tiempo||0)+'h';
  document.getElementById('cot-real').textContent=fmt(parseFloat(s.PrecioFinal||s.precioFinal)||0);
}

// ══════════════════════════════════════════════════════════
//  SERVICIOS
// ══════════════════════════════════════════════════════════
function renderServicios(){
  const list=document.getElementById('services-list');
  if(!State.servicios.length){list.innerHTML='<p class="empty-msg">No hay servicios ✨</p>';return}
  list.innerHTML=State.servicios.map(s=>{
    const ct=parseFloat(s.CostoTiempo||s.costoTiempo)||0;
    const cm=parseFloat(s.CostoMateriales||s.costoMat)||0;
    const m=parseFloat(s.Margen||s.margen)||0;
    const pf=parseFloat(s.PrecioFinal||s.precioFinal)||0;
    return`<div class="svc-item"><div><div class="svc-name">${s.Nombre||s.nombre}</div><div class="svc-meta">⏱ ${s.Tiempo||s.tiempo}h · Margen ${Math.round(m*100)}%</div></div><div><div class="svc-price">${fmt(pf)}</div><div class="svc-suggested">Sugerido: ${fmt((ct+cm)*(1+m))}</div></div></div>`;
  }).join('');
}

async function saveServicio(){
  const nombre=document.getElementById('s-name').value.trim();
  const tiempo=parseFloat(document.getElementById('s-time').value);
  const precio=parseFloat(document.getElementById('s-price').value)||0;
  if(!nombre||!tiempo)return showToast('⚠️ Completa nombre y tiempo');
  setLoading('btn-sv',true,'Guardar servicio');
  const avg=CATALOGO_BASE.reduce((s,c)=>(s+(c.costoTiempo+c.costoMat)/c.tiempo),0)/CATALOGO_BASE.length;
  const ce=avg*tiempo;
  const id=await fbAdd('servicios',{nombre,tiempo,costoTiempo:ce*.62,costoMat:ce*.38,margen:precio>0?Math.max(0,(precio-ce)/precio):.35,precioFinal:precio});
  setLoading('btn-sv',false,'Guardar servicio');
  if(id){closeModal('modal-servicio');['s-name','s-time','s-price'].forEach(x=>document.getElementById(x).value='');showToast('✅ Servicio guardado');await initApp();}
  else showToast('❌ Error al guardar');
}

// ══════════════════════════════════════════════════════════
//  INVENTARIO
// ══════════════════════════════════════════════════════════
function renderInventario(){
  const list=document.getElementById('inv-list');
  const alerts=document.getElementById('inv-alerts');
  const bajos=State.inventario.filter(i=>(parseInt(i.Stock||i.stock)||0)<=(parseInt(i.StockMinimo||i.min)||0));
  alerts.style.display=bajos.length?'block':'none';
  if(bajos.length)alerts.innerHTML='⚠️ Stock bajo: '+bajos.map(b=>b.Nombre||b.nombre).join(', ');
  const cats=['TODOS',...new Set(State.inventario.map(i=>i.Categoria||i.categoria).filter(Boolean))];
  const filterHtml=cats.map(c=>`<button class="filter-chip ${c===State.invFiltro?'active':''}" onclick="setInvFiltro('${c}')">${c}</button>`).join('');
  const fil=State.invFiltro==='TODOS'?State.inventario:State.inventario.filter(i=>(i.Categoria||i.categoria)===State.invFiltro);
  list.innerHTML=`<div class="inv-filter">${filterHtml}</div>`+(fil.map(item=>{
    const st=parseInt(item.Stock||item.stock)||0;
    const mn=parseInt(item.StockMinimo||item.min)||0;
    const low=st<=mn;
    return`<div class="inv-item"><div><div class="inv-name">${item.Nombre||item.nombre}</div><div class="inv-sub">${item.Codigo||item.codigo} · ${item.Marca||item.marca}</div></div><div style="text-align:right"><span class="badge ${low?'badge-low':'badge-ok'}">${low?'⚠️ Bajo':'✓ OK'}</span><div class="inv-stock">${st} uds · ${fmt(item.CostoUnitario||item.costo)}</div></div></div>`;
  }).join('')||'<p class="empty-msg">Sin productos en esta categoría</p>');
}
function setInvFiltro(c){State.invFiltro=c;renderInventario()}

async function saveInventario(){
  const nombre=document.getElementById('i-name').value.trim();
  const cat=document.getElementById('i-cat').value;
  const stock=parseInt(document.getElementById('i-stock').value)||0;
  const min=parseInt(document.getElementById('i-min').value)||0;
  const costo=parseFloat(document.getElementById('i-cost').value)||0;
  if(!nombre)return showToast('⚠️ Ingresa el nombre');
  setLoading('btn-inv',true,'Guardar producto');
  const codigo=cat.substring(0,2).toUpperCase()+'-'+Date.now().toString().slice(-4);
  const id=await fbAdd('inventario',{Codigo:codigo,Marca:'General',Nombre:nombre,Categoria:cat,Stock:stock,StockMinimo:min,CostoUnitario:costo});
  setLoading('btn-inv',false,'Guardar producto');
  if(id){closeModal('modal-inv');['i-name','i-stock','i-min','i-cost'].forEach(x=>document.getElementById(x).value='');showToast('✅ Producto guardado');await initApp();}
  else showToast('❌ Error al guardar');
}

// ══════════════════════════════════════════════════════════
//  FINANZAS
// ══════════════════════════════════════════════════════════
function renderFinanzas(){
  const hoy=new Date();const mes=hoy.getMonth();const anio=hoy.getFullYear();
  document.getElementById('mes-nombre').textContent=MESES[mes]+' '+anio;
  const delMes=State.finanzas.filter(t=>{const f=new Date(t.fecha||t.Fecha);return f.getMonth()===mes&&f.getFullYear()===anio});
  const inc=delMes.filter(t=>(t.tipo||t.Tipo)==='in').reduce((a,t)=>a+(parseFloat(t.valor||t.Valor)||0),0);
  const exp=delMes.filter(t=>(t.tipo||t.Tipo)==='out').reduce((a,t)=>a+(parseFloat(t.valor||t.Valor)||0),0);
  const net=inc-exp;
  document.getElementById('mes-badge').textContent=`${delMes.filter(t=>(t.tipo||t.Tipo)==='in').length} servicios este mes`;
  document.getElementById('total-in').textContent=fmt(inc);
  document.getElementById('total-out').textContent=fmt(exp);
  document.getElementById('net-bal').textContent=fmt(net);
  document.getElementById('net-sub').textContent=net>=0?'✨ ¡Vas muy bien!':'⚠️ Gastos > Ingresos';
  renderChartSemanal(mes,anio);
  const fuente=State.txFilter==='all'?State.finanzas:State.finanzas.filter(t=>(t.tipo||t.Tipo)===State.txFilter);
  const list=document.getElementById('tx-list');
  if(!fuente.length){list.innerHTML='<p class="empty-msg">Sin movimientos</p>';return}
  list.innerHTML=[...fuente].reverse().map(t=>`
    <div class="tx-item">
      <div style="flex:1"><div class="tx-desc">${t.descripcion||t.Descripcion}</div><div class="tx-meta">${t.fecha||t.Fecha} · ${t.formaPago||t.FormaPago}</div></div>
      <div style="display:flex;align-items:center;gap:7px">
        <div class="tx-amount ${(t.tipo||t.Tipo)==='in'?'tx-in':'tx-out'}">${(t.tipo||t.Tipo)==='in'?'+':'−'}${fmt(parseFloat(t.valor||t.Valor))}</div>
        <button class="btn-delete" onclick="delTx('${t.id}')">🗑️</button>
      </div>
    </div>`).join('');
}

function renderChartSemanal(mes,anio){
  const sems=[0,0,0,0];
  State.finanzas.forEach(t=>{
    if((t.tipo||t.Tipo)!=='in')return;
    const f=new Date(t.fecha||t.Fecha);
    if(f.getMonth()!==mes||f.getFullYear()!==anio)return;
    sems[f.getDate()<=7?0:f.getDate()<=14?1:f.getDate()<=21?2:3]+=parseFloat(t.valor||t.Valor)||0;
  });
  const mx=Math.max(...sems,1);
  const card=document.getElementById('chart-card');
  card.style.display=sems.some(s=>s>0)?'block':'none';
  document.getElementById('weekly-chart').innerHTML=['Sem 1','Sem 2','Sem 3','Sem 4'].map((lbl,i)=>{
    const pct=(sems[i]/mx)*100;const em=sems[i]===0;
    return`<div class="week-bar-wrap"><div class="week-bar-val ${em?'empty':''}">${em?'—':'$'+Math.round(sems[i]/1000)+'k'}</div><div class="week-bar ${em?'empty':''}" style="height:${Math.max(pct,3)}%"></div><div class="week-label">${lbl}</div></div>`;
  }).join('');
}

function filterTx(t,btn){State.txFilter=t;document.querySelectorAll('#finanzas .pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderFinanzas()}
function setTxType(t,btn){State.txType=t;document.querySelectorAll('#modal-tx .pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}

async function saveFinanza(){
  const desc=document.getElementById('tx-desc').value.trim();
  const fecha=document.getElementById('tx-date').value;
  const valor=parseFloat(document.getElementById('tx-amount').value);
  const pago=document.getElementById('tx-pay').value;
  if(!desc||!fecha||!valor)return showToast('⚠️ Completa todos los campos');
  setLoading('btn-tx',true,'Registrar');
  const id=await fbAdd('finanzas',{tipo:State.txType,descripcion:desc,fecha,valor,formaPago:pago});
  setLoading('btn-tx',false,'Registrar');
  if(id){closeModal('modal-tx');['tx-desc','tx-amount'].forEach(x=>document.getElementById(x).value='');showToast('✅ Registrado');State.finanzas.push({tipo:State.txType,descripcion:desc,fecha,valor,formaPago:pago,id});renderFinanzas();}
  else showToast('❌ Error al guardar');
}

async function delTx(id){
  if(!confirm('¿Eliminar este movimiento?'))return;
  await fbDel('finanzas',id);
  State.finanzas=State.finanzas.filter(f=>f.id!==id);
  showToast('🗑️ Eliminado');renderFinanzas();
}

// ══════════════════════════════════════════════════════════
//  CLIENTES
// ══════════════════════════════════════════════════════════
function renderClientes(){
  const list=document.getElementById('clients-list');
  const q=(document.getElementById('client-search')?.value||'').toLowerCase();
  const fil=q?State.clientes.filter(c=>(c.nombre||c.Nombre||'').toLowerCase().includes(q)):State.clientes;
  if(!fil.length){list.innerHTML='<p class="empty-msg">No hay clientas aún 🌸</p>';return}
  list.innerHTML=fil.map(c=>{
    const nom=c.nombre||c.Nombre||'?';
    const tel=c.telefono||c.Telefono||'';
    const svc=c.servicioFavorito||c.ServicioFavorito||'';
    const notas=c.notas||c.Notas||'';
    const citas=parseInt(c.citas||c.Citas)||1;
    return`<div class="client-item">
      <div class="client-avatar">${nom.charAt(0).toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div class="client-name">${nom}</div>
        ${tel?`<div class="client-meta"><a href="tel:${tel}" style="color:var(--gold);text-decoration:none">📞 ${tel}</a></div>`:''}
        ${svc?`<div class="client-meta">💅 ${svc}</div>`:''}
        <div class="client-meta">${'⭐️'.repeat(Math.min(citas,5))} ${citas} cita${citas!==1?'s':''}</div>
        ${notas?`<div class="client-notes">💬 ${notas}</div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;flex-shrink:0">
        <button class="btn-cita" onclick="addCitaCount('${c.id}',this)">+1 cita</button>
        <button class="btn-delete" onclick="delCliente('${c.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

async function addCitaCount(id,btn){
  const c=State.clientes.find(x=>x.id===id);if(!c)return;
  const n=(parseInt(c.citas||c.Citas)||1)+1;
  await window._updateDoc(window._doc(window._db,'clientes',id),{citas:n});
  c.citas=n;showToast('⭐️ Cita registrada');renderClientes();
}

async function delCliente(id){
  if(!confirm('¿Eliminar esta clienta?'))return;
  await fbDel('clientes',id);
  State.clientes=State.clientes.filter(c=>c.id!==id);
  showToast('🗑️ Eliminada');renderClientes();
}

async function saveCliente(){
  const nombre=document.getElementById('c-name').value.trim();
  const telefono=document.getElementById('c-phone').value.trim();
  const fecha=document.getElementById('c-date').value;
  const svc=document.getElementById('c-service').value;
  const notas=document.getElementById('c-notes').value.trim();
  if(!nombre||!fecha)return showToast('⚠️ Ingresa nombre y fecha');
  setLoading('btn-cl',true,'Guardar clienta');
  const id=await fbAdd('clientes',{nombre,telefono,fechaPrimera:fecha,servicioFavorito:svc,notas,citas:1});
  setLoading('btn-cl',false,'Guardar clienta');
  if(id){closeModal('modal-client');['c-name','c-phone','c-date','c-notes'].forEach(x=>document.getElementById(x).value='');document.getElementById('c-service').selectedIndex=0;showToast('✅ Clienta guardada');State.clientes.push({nombre,telefono,fechaPrimera:fecha,servicioFavorito:svc,notas,citas:1,id});renderClientes();}
  else showToast('❌ Error al guardar');
}

// ══════════════════════════════════════════════════════════
//  AGENDA
// ══════════════════════════════════════════════════════════
function renderAgenda(){
  const hoy=new Date();const hoyStr=hoy.toISOString().split('T')[0];
  const DIAS=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  document.getElementById('agenda-hoy-fecha').textContent=`${DIAS[hoy.getDay()]}, ${hoy.getDate()} de ${MES3[hoy.getMonth()]}`;
  const todas=[...State.agenda].sort((a,b)=>((a.fecha||a.Fecha||'')+(a.hora||a.Hora||'')).localeCompare((b.fecha||b.Fecha||'')+(b.hora||b.Hora||'')));
  const deHoy=todas.filter(c=>(c.fecha||c.Fecha)===hoyStr);
  const prox=todas.filter(c=>(c.fecha||c.Fecha)>hoyStr);
  document.getElementById('agenda-count').textContent=deHoy.length;
  const lh=document.getElementById('agenda-hoy-list');
  lh.innerHTML=deHoy.length?deHoy.map(c=>citaHTML(c)).join(''):'<p class="empty-msg">Sin citas para hoy 🌟</p>';
  const lp=document.getElementById('agenda-prox-list');
  lp.innerHTML=prox.length?prox.map(c=>citaHTML(c,true)).join(''):'<p class="empty-msg">Sin citas próximas</p>';
}

function citaHTML(c,showFecha=false){
  const hora=(c.hora||c.Hora||'00:00');
  const [hh,mm]=hora.split(':');
  const h=parseInt(hh)||0;
  const ampm=h>=12?'PM':'AM';
  const h12=h%12||12;
  const hoyStr=new Date().toISOString().split('T')[0];
  const fecha=(c.fecha||c.Fecha||'');
  const pas=fecha&&fecha<hoyStr;
  let ftag='';
  if(showFecha&&fecha){const fd=new Date(fecha+'T12:00');ftag=`<span class="cita-fecha-tag">📅 ${DIAS2[fd.getDay()]} ${fd.getDate()} ${MES3[fd.getMonth()]}</span>`;}
  return`<div class="cita-item${pas?' cita-pasada':''}">
    <div class="cita-hora"><div class="cita-hora-text">${h12}:${mm||'00'}</div><div class="cita-hora-ampm">${ampm}</div></div>
    <div style="flex:1;min-width:0">
      <div class="cita-nombre">${c.nombre||c.Nombre||'—'}${pas?'<span class="badge-pasada">Pasada</span>':''}</div>
      <div class="cita-servicio">💅 ${c.servicio||c.Servicio||'—'}</div>
      ${(c.notas||c.Notas)?`<div class="cita-notas">💬 ${c.notas||c.Notas}</div>`:''}${ftag}
    </div>
    <button class="btn-delete" onclick="delCita('${c.id}')">🗑️</button>
  </div>`;
}

async function delCita(id){
  if(!confirm('¿Eliminar esta cita?'))return;
  await fbDel('agenda',id);
  State.agenda=State.agenda.filter(a=>a.id!==id);
  showToast('🗑️ Eliminada');renderAgenda();
}

async function limpiarPasadas(){
  const hoyStr=new Date().toISOString().split('T')[0];
  const pas=State.agenda.filter(c=>(c.fecha||c.Fecha)&&(c.fecha||c.Fecha)<hoyStr);
  if(!pas.length)return showToast('✅ No hay citas pasadas');
  if(!confirm(`¿Eliminar ${pas.length} cita(s) pasada(s)?`))return;
  await Promise.all(pas.map(c=>fbDel('agenda',c.id)));
  State.agenda=State.agenda.filter(c=>!(c.fecha||c.Fecha)||(c.fecha||c.Fecha)>=hoyStr);
  showToast(`🗑️ ${pas.length} cita(s) eliminada(s)`);renderAgenda();
}

async function saveAgenda(){
  const nombre=document.getElementById('ag-nombre').value.trim();
  const servicio=document.getElementById('ag-servicio').value;
  const fecha=document.getElementById('ag-fecha').value;
  const hora=document.getElementById('ag-hora').value;
  const notas=document.getElementById('ag-notas').value.trim();
  if(!nombre||!fecha||!hora)return showToast('⚠️ Ingresa nombre, fecha y hora');
  setLoading('btn-ag',true,'Confirmar cita');
  const id=await fbAdd('agenda',{nombre,servicio,fecha,hora,notas});
  setLoading('btn-ag',false,'Confirmar cita');
  if(id){closeModal('modal-agenda');document.getElementById('ag-nombre').value='';document.getElementById('ag-notas').value='';document.getElementById('ag-servicio').selectedIndex=0;showToast('✅ Cita agendada');State.agenda.push({nombre,servicio,fecha,hora,notas,id});renderAgenda();}
  else showToast('❌ Error al guardar');
}

function poblarDl(){
  const dl=document.getElementById('ag-dl');if(!dl)return;
  dl.innerHTML=State.clientes.map(c=>`<option value="${c.nombre||c.Nombre}">`).join('');
}

// ══════════════════════════════════════════════════════════
//  RESERVAS
// ══════════════════════════════════════════════════════════
function renderReservas(){
  const hoyStr=new Date().toISOString().split('T')[0];
  document.getElementById('reservas-count').textContent=State.reservas.length;
  let lista=[...State.reservas].map(r=>{
    let fs='';
    if(r.fecha instanceof Object&&r.fecha.toDate) fs=r.fecha.toDate().toISOString().split('T')[0];
    else fs=String(r.fecha||'').substring(0,10);
    return{...r,_fecha:fs};
  });
  if(State.resFiltro==='proximas')lista=lista.filter(r=>r._fecha>=hoyStr);
  if(State.resFiltro==='pasadas')lista=lista.filter(r=>r._fecha<hoyStr);
  lista.sort((a,b)=>a._fecha.localeCompare(b._fecha));
  const list=document.getElementById('reservas-list');
  if(!lista.length){list.innerHTML='<p class="empty-msg">No hay reservas para mostrar</p>';return}
  list.innerHTML=lista.map(r=>{
    const pas=r._fecha<hoyStr;
    const fd=r._fecha?new Date(r._fecha+'T12:00'):null;
    const fFmt=fd?`${DIAS2[fd.getDay()]} ${fd.getDate()} ${MES3[fd.getMonth()]}`:'—';
    const notas=String(r.notas||r.Notas||'');
    const waMatch=notas.match(/WA:(\d+)/);
    const tel=waMatch?waMatch[1]:(r.whatsapp||r.Whatsapp||'');
    const nota=notas.replace(/WA:\d+\s*·?\s*/,'').trim();
    const hora=r.hora||r.Hora||'—';
    let hFmt=hora;
    if(hora&&hora.length>=5){const[hh,mm]=hora.split(':');const h12=parseInt(hh)%12||12;const ap=parseInt(hh)>=12?'PM':'AM';hFmt=`${h12}:${mm} ${ap}`;}
    return`<div class="cita-item${pas?' cita-pasada':''}">
      <div class="cita-hora"><div class="cita-hora-text" style="font-size:12px">${hFmt.split(' ')[0]}</div><div class="cita-hora-ampm">${hFmt.split(' ')[1]||''}</div></div>
      <div style="flex:1;min-width:0">
        <div class="cita-nombre">${r.nombre||r.Nombre||'—'}${pas?'<span class="badge-pasada">Pasada</span>':'<span class="badge-online">ONLINE</span>'}</div>
        <div class="cita-servicio">💅 ${r.servicio||r.Servicio||'—'}</div>
        <span class="cita-fecha-tag">📅 ${fFmt}</span>
        ${tel?`<div class="client-meta" style="margin-top:3px"><a href="tel:${tel}" style="color:var(--gold);text-decoration:none;font-size:10px">📞 ${tel}</a></div>`:''}
        ${nota?`<div class="cita-notas">💬 ${nota}</div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;flex-shrink:0">
        ${tel?`<button class="btn-cita" onclick="confirmarWA('${tel}','${r.nombre||r.Nombre||''}','${r.servicio||r.Servicio||''}','${fFmt}','${hFmt}')">📲 WA</button>`:''}
        <button class="btn-delete" onclick="delReserva('${r.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function filterReservas(f,btn){State.resFiltro=f;document.querySelectorAll('#reservas .pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderReservas()}

async function delReserva(id){
  if(!confirm('¿Eliminar esta reserva?'))return;
  await fbDel('reservas',id);
  State.reservas=State.reservas.filter(r=>r.id!==id);
  showToast('🗑️ Reserva eliminada');renderReservas();
}

function confirmarWA(tel,nombre,servicio,fecha,hora){
  const msg=`Hola ${nombre} 💅✨\n\n¡Tu cita en *Alura Spa de Uñas* está confirmada!\n\n📅 ${fecha}\n⏰ ${hora}\n💅 ${servicio}\n\n¡Te esperamos puntual! 🌟\n_By Valentina Rodríguez_`;
  window.open(`https://wa.me/57${tel}?text=${encodeURIComponent(msg)}`,'_blank');
}

// ══════════════════════════════════════════════════════════
//  WHATSAPP
// ══════════════════════════════════════════════════════════
function abrirWhatsApp(){
  const sel=document.getElementById('wa-client');
  sel.innerHTML=State.clientes.length?State.clientes.map((c,i)=>`<option value="${i}">${c.nombre||c.Nombre}</option>`).join(''):'<option>Sin clientas</option>';
  const man=new Date();man.setDate(man.getDate()+1);
  document.getElementById('wa-fecha').valueAsDate=man;
  previewWA();openModal('modal-whatsapp');
}

function previewWA(){
  const idx=parseInt(document.getElementById('wa-client')?.value);
  const c=State.clientes[idx];
  const nom=c?.nombre||c?.Nombre||'clienta';
  const svc=document.getElementById('wa-service')?.value||'';
  const fecha=document.getElementById('wa-fecha')?.value||'';
  const hora=document.getElementById('wa-hora')?.value||'';
  const fFmt=fecha?new Date(fecha+'T12:00').toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'}):'';
  document.getElementById('wa-preview').textContent=`Hola ${nom} 💅✨\n\nTe recuerdo tu cita en *Alura Spa de Uñas*:\n\n📅 ${fFmt}\n⏰ ${hora} hrs\n💅 ${svc}\n\n¡Te esperamos! 🌟\n_By Valentina Rodríguez_`;
}

function enviarWA(){
  const idx=parseInt(document.getElementById('wa-client')?.value);
  const c=State.clientes[idx];
  const tel=(c?.telefono||c?.Telefono||'').replace(/\D/g,'');
  const msg=document.getElementById('wa-preview').textContent;
  const url=tel?`https://wa.me/57${tel}?text=${encodeURIComponent(msg)}`:`https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url,'_blank');closeModal('modal-whatsapp');showToast('📲 Abriendo WhatsApp...');
}