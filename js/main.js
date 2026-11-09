(function () {
  var SITE = window.SITE, DATA = window.DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  var ICONS = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
    whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    aperture: '<circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83m13.79-4-5.74 9.94"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', arrow: '<path d="M7 17 17 7M7 7h10v10"/>'
  };
  function icon(n, s, c) { return '<svg class="icon ' + (c || '') + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>'; }
  function hydrate(root) { $$('[data-icon]', root).forEach(function (el) { el.outerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('data-size') || 22, el.className); }); }
  function wa(t) { return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(t); }

  $$('[data-wa]').forEach(function (a) { a.href = wa('Olá, Lucas! Vi seu portfólio e gostaria de conversar sobre um trabalho.'); a.target = '_blank'; a.rel = 'noreferrer'; });
  $$('[data-ig]').forEach(function (a) { a.href = SITE.instagramUrl; a.target = '_blank'; a.rel = 'noreferrer'; a.textContent = '@' + SITE.instagramUser; });
  $$('[data-mail]').forEach(function (a) { a.href = 'mailto:' + SITE.email.split(' ')[0]; a.textContent = SITE.email; });
  $$('[data-site]').forEach(function (el) { el.textContent = SITE[el.getAttribute('data-site')]; });
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  if (SITE.replyTime) { var rt = $('#reply'); rt.textContent = 'Resposta ' + SITE.replyTime + '.'; rt.hidden = false; }

  /* ---------- "Fotos" de exemplo geradas em SVG ---------- */
  var DIM = { '3/4': [300, 400], '4/3': [400, 300], '1/1': [360, 360], '2/3': [300, 450] };
  var uid = 0;
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function person(cx, base, h, c) { var r = h * .12, w = h * .16; return '<circle cx="' + cx + '" cy="' + (base - h + r) + '" r="' + r + '" fill="' + c + '"/><rect x="' + (cx - w) + '" y="' + (base - h + r * 2.1) + '" width="' + w * 2 + '" height="' + (h - r * 2.1) + '" rx="' + w * .55 + '" fill="' + c + '"/>'; }
  function art(p, i) {
    var d = DIM[p.ratio] || DIM['4/3'], W = d[0], H = d[1], id = 'g' + (++uid), r = rng(i * 97 + 13), c = p.pal, s = '';
    s += '<defs><linearGradient id="' + id + 'b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/></linearGradient>' +
      '<radialGradient id="' + id + 'v" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient>' +
      '<filter id="' + id + 'f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="' + W * .012 + '"/></filter><filter id="' + id + 'g" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="' + W * .05 + '"/></filter></defs>';
    s += '<rect width="' + W + '" height="' + H + '" fill="url(#' + id + 'b)"/>';
    var k = p.kind, n;
    if (k === 'sunset' || k === 'couple' || k === 'family') {
      s += '<circle cx="' + W * .62 + '" cy="' + H * .5 + '" r="' + W * .2 + '" fill="#FFF1C9" opacity=".7" filter="url(#' + id + 'g)"/><circle cx="' + W * .62 + '" cy="' + H * .5 + '" r="' + W * .075 + '" fill="#FFF8E1"/>';
      s += '<path d="M0 ' + H * .7 + 'C' + W * .25 + ' ' + H * .6 + ' ' + W * .5 + ' ' + H * .72 + ' ' + W + ' ' + H * .62 + 'V' + H + 'H0Z" fill="' + c[2] + '" opacity=".8"/>';
      s += '<path d="M0 ' + H * .8 + 'C' + W * .3 + ' ' + H * .72 + ' ' + W * .6 + ' ' + H * .86 + ' ' + W + ' ' + H * .76 + 'V' + H + 'H0Z" fill="' + c[2] + '"/>';
      if (k === 'couple') { var b = H * .84, hh = H * (W > H ? .5 : .36); s += person(W * .42, b, hh, '#120d12') + '<path d="M' + W * .56 + ' ' + (b - hh * .66) + 'L' + (W * .56 - hh * .3) + ' ' + b + 'H' + (W * .56 + hh * .3) + 'Z" fill="#120d12"/><circle cx="' + W * .56 + '" cy="' + (b - hh * .88) + '" r="' + hh * .11 + '" fill="#120d12"/>'; }
      if (k === 'family') { var b2 = H * .85, h2 = H * .46; s += person(W * .34, b2, h2, '#14120e') + person(W * .66, b2, h2 * .94, '#14120e') + person(W * .5, b2, h2 * .55, '#14120e'); }
    } else if (k === 'portrait') {
      for (n = 0; n < 16; n++) s += '<circle cx="' + r() * W + '" cy="' + r() * H * .7 + '" r="' + (W * .03 + r() * W * .07) + '" fill="#fff" opacity="' + (.1 + r() * .22) + '" filter="url(#' + id + 'f)"/>';
      s += '<path d="M' + W * .12 + ' ' + H + 'C' + W * .12 + ' ' + H * .78 + ' ' + W * .34 + ' ' + H * .74 + ' ' + W * .5 + ' ' + H * .72 + 'C' + W * .66 + ' ' + H * .74 + ' ' + W * .88 + ' ' + H * .78 + ' ' + W * .88 + ' ' + H + 'Z" fill="' + c[2] + '"/>';
      s += '<rect x="' + W * .44 + '" y="' + H * .56 + '" width="' + W * .12 + '" height="' + H * .18 + '" fill="' + c[2] + '"/><ellipse cx="' + W * .5 + '" cy="' + H * .43 + '" rx="' + W * .15 + '" ry="' + H * .14 + '" fill="' + c[2] + '"/>';
      s += '<path d="M' + W * .36 + ' ' + H * .4 + 'C' + W * .38 + ' ' + H * .3 + ' ' + W * .5 + ' ' + H * .25 + ' ' + W * .62 + ' ' + H * .34 + '" stroke="#fff" stroke-opacity=".45" stroke-width="' + W * .012 + '" fill="none" stroke-linecap="round"/>';
    } else if (k === 'arch') {
      for (n = 0; n < 4; n++) { var q = 1 - n * .2, aw = W * .42 * q, top = H * (.2 + n * .06), bot = H * (.85 - n * .02); s += '<path d="M' + (W / 2 - aw) + ' ' + bot + 'V' + (top + aw) + 'a' + aw + ' ' + aw + ' 0 0 1 ' + aw * 2 + ' 0V' + bot + 'Z" fill="' + (n % 2 ? c[1] : c[2]) + '" opacity="' + (.35 + n * .18) + '"/>'; }
      s += '<path d="M' + W * .2 + ' ' + H * .1 + 'L' + W * .55 + ' ' + H * .1 + 'L' + W * .85 + ' ' + H + 'L' + W * .3 + ' ' + H + 'Z" fill="#fff" opacity=".13" filter="url(#' + id + 'f)"/><rect y="' + H * .86 + '" width="' + W + '" height="' + H * .14 + '" fill="' + c[2] + '" opacity=".75"/>';
    } else if (k === 'party') {
      s += '<rect width="' + W + '" height="' + H + '" fill="' + c[0] + '"/>';
      for (n = 0; n < 34; n++) s += '<circle cx="' + r() * W + '" cy="' + r() * H + '" r="' + (W * .02 + r() * W * .08) + '" fill="' + c[1 + (n % 2)] + '" opacity="' + (.18 + r() * .5) + '" filter="url(#' + id + 'f)"/>';
      s += '<path d="M' + W * .1 + ' ' + H * .9 + 'L' + W * .45 + ' ' + H * .05 + 'M' + W * .9 + ' ' + H * .9 + 'L' + W * .6 + ' ' + H * .05 + '" stroke="#fff" stroke-opacity=".18" stroke-width="' + W * .02 + '" filter="url(#' + id + 'f)"/>' + person(W * .5, H * 1.02, H * .42, '#07050c');
    }
    s += '<rect width="' + W + '" height="' + H + '" fill="url(#' + id + 'v)"/>';
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Foto de exemplo: ' + p.title + '">' + s + '</svg>';
  }
  function media(p, i, alt) { return p.img ? '<img src="' + p.img + '" alt="' + (alt || p.title) + '" loading="lazy">' : art(p, i); }
  DATA.photos.forEach(function (p, i) { p.n = i; });

  /* ---------- Contact sheet (topo) ---------- */
  $('#sheet').innerHTML = [0, 1, 2].map(function (row) {
    return '<div class="strip">' + [0, 1, 2, 3].map(function (col) {
      var i = row * 4 + col, p = DATA.photos[i];
      return '<button type="button" class="cell' + (i === 5 ? ' is-pick' : '') + '" data-open="' + i + '" aria-label="Ampliar: ' + p.title + '">' + media(p, i) + '<span class="cell__no">' + pad(i + 1) + 'A</span></button>';
    }).join('') + '</div>';
  }).join('');
  var pickCell = $('.is-pick');
  pickCell.insertAdjacentHTML('beforeend', '<svg class="grease" viewBox="0 0 230 140" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M26 70C8 30 96 4 160 14c58 10 68 80 12 98C108 130 20 116 16 62c-2-22 24-40 56-48"/></svg>');

  /* ---------- Galeria ---------- */
  var filter = 'Todos', list = DATA.photos.slice();
  $('#filters').innerHTML = ['Todos'].concat(DATA.categories).map(function (c) { return '<button type="button" class="pill' + (c === 'Todos' ? ' is-on' : '') + '" data-filter="' + c + '" aria-pressed="' + (c === 'Todos') + '">' + c + '</button>'; }).join('');
  function renderGallery() {
    list = DATA.photos.filter(function (p) { return filter === 'Todos' || p.cat === filter; });
    var g = $('#gallery'); g.classList.remove('is-in'); void g.offsetWidth;
    g.innerHTML = list.map(function (p, i) {
      return '<button type="button" class="shot' + (p.img ? '' : ' is-ph') + '" style="aspect-ratio:' + p.ratio + '" data-pos="' + i + '" aria-label="Ampliar: ' + p.title + '">' + media(p, p.n) + '<span class="shot__no">' + pad(p.n + 1) + '</span><span class="shot__cap"><b>' + p.title + '</b><small>' + p.cat + '</small></span></button>';
    }).join('');
    g.classList.add('is-in');
  }
  $('#filters').addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]'); if (!b) return;
    filter = b.getAttribute('data-filter');
    $$('#filters .pill').forEach(function (x) { var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on); });
    renderGallery();
  });
  $('#gallery').addEventListener('click', function (e) { var b = e.target.closest('[data-pos]'); if (b) openLb(list, +b.getAttribute('data-pos'), b); });
  $('#sheet').addEventListener('click', function (e) { var b = e.target.closest('[data-open]'); if (b) openLb(DATA.photos, +b.getAttribute('data-open'), b); });
  renderGallery();

  /* ---------- Lightbox ---------- */
  var lb = $('#lb'), cur = 0, items = [], opener = null;
  function showLb() {
    var p = items[cur], d = DIM[p.ratio] || DIM['4/3'];
    $('#lb-media').innerHTML = p.img ? '<img src="' + p.img + '" alt="' + p.title + '">' : '<div class="lb__art" style="aspect-ratio:' + d[0] + '/' + d[1] + '">' + art(p, p.n) + '</div>';
    $('#lb-title').textContent = p.title; $('#lb-cat').textContent = p.cat; $('#lb-count').textContent = pad(cur + 1) + ' / ' + pad(items.length);
    $('#lb-cta').setAttribute('data-service', p.cat);
  }
  function openLb(l, i, from) { items = l; cur = i; opener = from; showLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; $('#lb-close').focus(); }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; if (opener && opener.focus) opener.focus(); }
  function step(n) { cur = (cur + n + items.length) % items.length; showLb(); }
  $('#lb-close').addEventListener('click', closeLb);
  $('#lb-prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  $('#lb-next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb__stage')) closeLb(); });
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) { if (e.key === 'Escape') setMenu(false); return; }
    if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1);
  });

  /* ---------- Serviços, etapas, sobre ---------- */
  $('#services').innerHTML = DATA.services.map(function (s, i) {
    return '<article class="svc reveal" data-delay="' + i * 80 + '"><span class="svc__no">' + pad(i + 1) + '</span><h3>' + s.name + '</h3><p>' + s.text + '</p><ul>' + s.list.map(function (l) { return '<li>' + icon('check', 16) + l + '</li>'; }).join('') + '</ul><a href="#orcamento" class="link" data-service="' + s.name + '">Pedir orçamento ' + icon('arrow', 16) + '</a></article>';
  }).join('');
  $('#steps').innerHTML = DATA.steps.map(function (s, i) { return '<li class="reveal" data-delay="' + i * 80 + '"><b>' + pad(i + 1) + '</b><div><h3>' + s.title + '</h3><p>' + s.text + '</p></div></li>'; }).join('');
  $('#about-title').textContent = DATA.about.title;
  $('#about-text').innerHTML = DATA.about.text.map(function (t) { return '<p>' + t + '</p>'; }).join('');
  $('#about-img').innerHTML = DATA.about.img ? '<img src="' + DATA.about.img + '" alt="Retrato de Lucas Melo" loading="lazy">' : art({ kind: 'portrait', ratio: '3/4', title: 'Retrato do fotógrafo (exemplo)', pal: ['#D8D3C8', '#9C9484', '#1E1B17'] }, 40);

  /* ---------- Depoimentos ---------- */
  var ti = 0, T = DATA.testimonials;
  $('#t-dots').innerHTML = T.map(function (_, i) { return '<button type="button" class="dot" data-i="' + i + '" aria-label="Depoimento ' + (i + 1) + '"></button>'; }).join('');
  function showT(i) {
    ti = (i + T.length) % T.length; var t = T[ti], box = $('#t-card');
    box.classList.remove('is-in'); void box.offsetWidth;
    $('#t-text').textContent = t.text; $('#t-name').textContent = t.name; $('#t-role').textContent = t.role + ' · depoimento de exemplo';
    box.classList.add('is-in');
    $$('#t-dots .dot').forEach(function (d, k) { d.classList.toggle('is-on', k === ti); d.setAttribute('aria-current', k === ti); });
  }
  $('#t-prev').addEventListener('click', function () { showT(ti - 1); });
  $('#t-next').addEventListener('click', function () { showT(ti + 1); });
  $('#t-dots').addEventListener('click', function (e) { var b = e.target.closest('[data-i]'); if (b) showT(+b.getAttribute('data-i')); });
  var tx = null, tc = $('#t-card');
  tc.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  tc.addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) showT(ti + (dx < 0 ? 1 : -1)); tx = null; });
  showT(0);

  /* ---------- Formulário de orçamento ---------- */
  var sel = $('#f-service');
  sel.innerHTML = '<option value="">Selecione</option>' + DATA.services.map(function (s) { return '<option>' + s.name + '</option>'; }).join('') + '<option>Outro</option>';
  var catToSvc = { 'Casamentos': 'Casamentos', 'Retratos': 'Retratos e ensaios', 'Famílias': 'Famílias e gestantes', 'Eventos': 'Eventos e corporativo' };
  function preset(v) { v = catToSvc[v] || v; for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text === v) sel.selectedIndex = i; }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-service]'); if (!a) return;
    preset(a.getAttribute('data-service'));
    if (a.id === 'lb-cta') { closeLb(); $('#orcamento').scrollIntoView({ behavior: 'smooth' }); }
  });
  var today = new Date(); $('#f-date').min = today.getFullYear() + '-' + pad(today.getMonth() + 1) + '-' + pad(today.getDate());

  var form = $('#quote'), msg = $('#f-msg');
  function setErr(k, t) { $('[data-err="' + k + '"]').textContent = t || ''; form[k].setAttribute('aria-invalid', t ? 'true' : 'false'); }
  function validate(v) {
    var e = {};
    if (v.nome.trim().length < 3) e.nome = 'Informe seu nome completo.';
    var d = v.telefone.replace(/\D/g, ''); if (d.length < 10 || d.length > 11) e.telefone = 'Informe um WhatsApp com DDD, por exemplo (81) 99999-9999.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Informe um e-mail válido.';
    if (!v.servico) e.servico = 'Escolha o tipo de trabalho.';
    if (v.mensagem.trim().length < 10) e.mensagem = 'Conte um pouco sobre o que você precisa (mínimo de 10 caracteres).';
    return e;
  }
  function setMsg(t, c) { msg.textContent = t; msg.className = 'form__msg ' + (c || ''); }
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var v = { nome: form.nome.value, telefone: form.telefone.value, email: form.email.value, servico: form.servico.value, data: form.data.value, cidade: form.cidade.value, mensagem: form.mensagem.value };
    var er = validate(v); ['nome', 'telefone', 'email', 'servico', 'mensagem'].forEach(function (k) { setErr(k, er[k]); });
    if (Object.keys(er).length) { var first = $('[aria-invalid="true"]', form); if (first) first.focus(); return; }
    var dt = v.data ? v.data.split('-').reverse().join('/') : 'a definir';
    var btn = $('button[type=submit]', form);
    if (SITE.formEndpoint) {
      btn.disabled = true; btn.firstChild.textContent = 'Enviando…';
      fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        .then(function (r) { if (!r.ok) throw new Error(); setMsg('Pedido enviado! Em breve você receberá o orçamento.', 'ok'); form.reset(); })
        .catch(function () { setMsg('Não foi possível enviar. Tente de novo ou chame no WhatsApp.', 'err'); })
        .then(function () { btn.disabled = false; btn.firstChild.textContent = 'Solicitar orçamento'; });
    } else {
      var t = 'Olá, Lucas! Gostaria de um orçamento.\nNome: ' + v.nome + '\nTrabalho: ' + v.servico + '\nData prevista: ' + dt + (v.cidade ? '\nCidade: ' + v.cidade : '') + '\nE-mail: ' + v.email + '\nTelefone: ' + v.telefone + '\n\n' + v.mensagem;
      window.open(wa(t), '_blank', 'noopener');
      setMsg('Pedido pronto! Envie a mensagem no WhatsApp que abrimos para você.', 'ok'); form.reset();
    }
  });
  $$('#quote input, #quote select, #quote textarea').forEach(function (el) { el.addEventListener('input', function () { if (el.name && $('[data-err="' + el.name + '"]')) setErr(el.name, ''); }); });

  hydrate(document);

  /* ---------- Menu, rolagem, animações ---------- */
  var header = $('.header'), nav = $('#nav'), burger = $('.burger');
  function onScroll() { header.classList.toggle('is-solid', window.scrollY > 24 || nav.classList.contains('is-open')); }
  function setMenu(o) { nav.classList.toggle('is-open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Fechar menu' : 'Abrir menu'); burger.innerHTML = icon(o ? 'x' : 'menu', 26); document.body.style.overflow = o ? 'hidden' : ''; onScroll(); }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  $$('a', nav).concat($$('.logo')).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('scroll', onScroll, { passive: true });
  burger.innerHTML = icon('menu', 26); onScroll();

  var rv = $$('.reveal');
  rv.forEach(function (el) { el.style.transitionDelay = (el.getAttribute('data-delay') || 0) + 'ms'; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('is-in'); });
})();
