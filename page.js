// Merender isi halaman dalam dari window.PAGE (header & footer ada di site.js)
(function () {
  const P = window.PAGE, app = document.getElementById('app');
  const esc = t => String(t ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const ph = "this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23E5D6FA%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%235B2D91%22 font-size=%2218%22>Gambar</text></svg>'";

  document.title = P.title + ' – Evegrow.Digital';
  let h = `<div class="page-head"><div class="container">
      <div class="crumb"><a href="index.html">Beranda</a> / ${esc(P.title)}</div>
      <h1>${esc(P.heading)}</h1><p>${esc(P.intro)}</p></div></div>`;
  if (P.hero) h += `<div class="page-hero"><img src="${esc(P.hero)}" alt="" onerror="this.parentNode.remove()"></div>`;

  h += `<div class="inner"><div class="container">`;
  (P.sections || []).forEach(sec => {
    h += `<div class="group"><h2>${esc(sec.title)}</h2>`;
    if (sec.type === 'list') {
      h += `<ul class="list">${sec.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
    } else {
      h += `<div class="grid">` + sec.items.map(p => `
        <div class="card">
          <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="${ph}">
          <div class="b"><h4>${esc(p.name)}</h4>
            ${p.desc ? `<p>${esc(p.desc)}</p>` : ''}
            ${p.price ? `<span class="price">${esc(p.price)}</span>` : ''}
            <a class="buy" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.button || 'Lihat produk')}</a>
          </div></div>`).join('') + `</div>`;
    }
    h += `</div>`;
  });
  h += `<div class="actions">` + (P.buttons || []).map(b =>
    `<a class="btn ${b.soft ? 'soft' : ''}" href="${esc(b.link)}" ${/^https?:/.test(b.link) ? 'target="_blank" rel="noopener"' : ''}>${esc(b.label)}</a>`).join('') + `</div>`;
  h += `</div></div>`;
  app.innerHTML = h;
})();
      
