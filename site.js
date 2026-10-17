/* ============================================================
   KONFIGURASI SITUS – edit di sini, berlaku untuk semua halaman
   ============================================================ */
const SITE = {
  name: "Evegrow.Digital",
  tagline: "Ubah gadget jadi sumber cuan",
  whatsapp: "6285750232420",            // ganti nomor WhatsApp (tanpa + dan 0 di depan)
  waText: "Halo kak, aku mau tanya",
  nav: [
    { label: "Beranda",   href: "index.html" },
    { label: "Produk",    href: "index.html#produk" },
    { label: "E-Course",  href: "belajar-ngonten.html" },
    { label: "Media Anak", href: "media-belajar-anak.html" },
    { label: "Tentang",   href: "index.html#tentang" },
    { label: "Testimoni", href: "index.html#bukti" },
    { label: "FAQ",       href: "index.html#faq" },
    { label: "Kontak",    href: "index.html#kontak" }
  ],
  // ganti username & link sosial media kamu
  socials: [
    { name: "Instagram", handle: "@evegrow.digital", href: "https://instagram.com/evegrow.digital" },
    { name: "TikTok",    handle: "@alynna.mia", href: "https://tiktok.com/@evegrowdigital" },
    { name: "Threads",   handle: "@evegrow.digital", href: "https://threads.net/@evegrow.digital" },
    { name: "Facebook",  handle: "Mimi Aliana", href: "https://facebook.com/mimialiana" },
    { name: "WhatsApp",  handle: "Chat langsung", href: null }   // otomatis dari nomor di atas
  ],
  legal: [
    { label: "Ketentuan Layanan",    href: "https://contoh.com/ketentuan-layanan" },
    { label: "Kebijakan Privasi",    href: "https://contoh.com/kebijakan-privasi" },
    { label: "Kebijakan Retur Dana", href: "https://contoh.com/kebijakan-retur-dana" },
    { label: "Kebijakan Pengiriman", href: "https://contoh.com/kebijakan-pengiriman" }
  ]
};

(function () {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.waText)}`;
  SITE.socials.forEach(s => { if (!s.href) s.href = wa; });

  const I = {
    Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    TikTok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.500 1.900 4.200 4.500 4.400v3.200c-1.600 0-3.100-.5-4.500-1.400V16a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.300a2.800 2.800 0 1 0 1.900 2.600V3H16z"/></svg>',
    Threads: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="12" y="18.500" text-anchor="middle" font-size="20" font-weight="700">@</text></svg>',
    Facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6.500c0-.7.2-1.100 1.200-1.100H17V2.200C16.600 2.100 15.600 2 14.500 2 12 2 10.300 3.500 10.300 6.200V8H7.500v3.600h2.800V22H14V11.600h2.600L17 8h-3z"/></svg>',
    WhatsApp: '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9 3 3.300 8.600 3.300 15.500c0 2.400.7 4.700 1.900 6.600L3 29l7.100-2.100c1.800 1 3.800 1.500 5.900 1.500 7 0 12.700-5.600 12.700-12.500S23 3 16 3zm6.500 17.500c-.3.800-1.600 1.500-2.200 1.600-.6.100-1.300.1-2.100-.1-.5-.2-1.200-.4-2-.8-3.500-1.500-5.800-5-6-5.300-.2-.2-1.400-1.900-1.400-3.600s.9-2.500 1.200-2.900c.3-.3.700-.4.900-.4h.7c.2 0 .5-.1.800.6.300.7 1 2.500 1.100 2.700.1.200.1.400 0 .6-.1.200-.2.400-.4.600l-.6.700c-.2.200-.4.400-.2.800.2.400 1 1.600 2.100 2.600 1.400 1.200 2.600 1.600 3 1.800.4.200.6.100.8-.1.200-.3 1-1.100 1.300-1.500.3-.4.500-.3.900-.2.400.1 2.300 1.100 2.700 1.300.4.200.6.300.7.400.1.200.1.800-.2 1.500z"/></svg>'
  };
  window.SITE_ICONS = I; window.SITE_WA = wa;

  let file = location.pathname.split('/').pop() || 'index.html';
  if (!file.includes('.')) file += '.html';

  const links = SITE.nav.map(n => {
    const base = n.href.split('#')[0];
    const active = !n.href.includes('#') && base === file ? ' class="active" aria-current="page"' : '';
    return `<a href="${n.href}"${active}>${n.label}</a>`;
  }).join('');

  const header = `
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="index.html"><span class="mark">E</span><span>${SITE.name}</span></a>
      <nav id="menu" class="menu" aria-label="Menu utama">
        ${links}
        <a class="btn-sm" href="${wa}" target="_blank" rel="noopener">Hubungi Aku</a>
      </nav>
      <button class="burger" aria-label="Buka menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
    </div>
  </header>`;

  const socialIcons = SITE.socials.map(s =>
    `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}">${I[s.name] || ''}</a>`).join('');

  const footer = `
  <footer class="site-footer">
    <div class="container foot">
      <div>
        <a class="brand light" href="index.html"><span class="mark">E</span><span>${SITE.name}</span></a>
        <p>${SITE.tagline}. Worksheet, game edukatif anak, dan course produk digital.</p>
        <div class="soc-row">${socialIcons}</div>
      </div>
      <div><h5>Menu</h5>${SITE.nav.slice(0,5).map(n => `<a href="${n.href}">${n.label}</a>`).join('')}</div>
      <div><h5>Informasi</h5>${SITE.legal.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}</div>
    </div>
    <div class="container copy">© ${new Date().getFullYear()} ${SITE.name}. Hasil setiap orang berbeda, tergantung usaha dan konsistensi.</div>
  </footer>
  <a class="wa" href="${wa}" target="_blank" rel="noopener" aria-label="Chat WhatsApp">${I.WhatsApp}</a>`;

  document.getElementById('site-header').innerHTML = header;
  document.getElementById('site-footer').innerHTML = footer;

  const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

  // kartu sosial media (halaman beranda)
  document.querySelectorAll('[data-socials]').forEach(box => {
    box.innerHTML = SITE.socials.map(s => `
      <a class="soc-card" href="${s.href}" target="_blank" rel="noopener">
        <span class="ic">${I[s.name] || ''}</span>
        <span><b>${s.name}</b><small>${s.handle}</small></span>
      </a>`).join('');
  });
})();
