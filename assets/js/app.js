/* =============================================================================
   app.js — Logika interaktif portofolio (edit KONTEN di data.js, bukan di sini)
   Nol dependency eksternal. Menghormati prefers-reduced-motion.
   ============================================================================= */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) { console.error("data.js belum termuat."); return; }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------------------------------- Label UI dwibahasa -- */
  var UI = {
    "nav.about": { id: "Tentang", en: "About" },
    "nav.help": { id: "Layanan", en: "Services" },
    "nav.exp": { id: "Pengalaman", en: "Experience" },
    "nav.portfolio": { id: "Portofolio", en: "Portfolio" },
    "nav.maps": { id: "Peta", en: "Maps" },
    "nav.certs": { id: "Sertifikasi", en: "Certifications" },
    "nav.contact": { id: "Kontak", en: "Contact" },
    "hero.eyebrow": { id: "Portofolio Interaktif", en: "Interactive Portfolio" },
    "hero.cta1": { id: "Lihat Portofolio", en: "View Portfolio" },
    "hero.cta2": { id: "Hubungi Saya", en: "Get in Touch" },
    "hero.roleSelect": {
  id: "Eksplorasi Berdasarkan Keahlian",
  en: "Explore by Expertise"
},
    "role.all.t": { id: "Gabungan", en: "Combined" },
    "role.all.d": { id: "Data Analis dan GIS/WebGIS", en: "Data Analytics and GIS/WebGIS" },
    "role.data.t": { id: "Data Analyst", en: "Data Analyst" },
    "role.data.d": { id: "Dashboard, BI, statistik & tata kelola data", en: "Dashboards, BI, statistics & data governance" },
    "role.gis.t": { id: "GIS & WebGIS", en: "GIS & WebGIS" },
    "role.gis.d": { id: "Analisis spasial, pemetaan & WebGIS", en: "Spatial analysis, mapping & WebGIS" },
    "about.eyebrow": { id: "Perkenalan", en: "Introduction" },
    "about.edu": { id: "Pendidikan", en: "Education" },
    "about.skills": { id: "Kompetensi Inti", en: "Core Competencies" },
    "help.eyebrow": { id: "Layanan", en: "Services" },
    "help.title": { id: "Bagaimana saya bisa membantu", en: "How I can help" },
    "help.sub": { id: "Dua bidang keahlian yang saling melengkapi. Klik untuk melihat rinciannya.", en: "Two complementary areas of expertise. Click to see the details." },
    "exp.eyebrow": { id: "Perjalanan Profesional", en: "Professional Journey" },
    "exp.title": { id: "Pengalaman lintas pemerintah, BUMN & swasta", en: "Experience across government, state-owned enterprise (SOE) & private sector" },
    "port.eyebrow": { id: "Portofolio", en: "Portfolio" },
    "port.title": { id: "Proyek & bukti dukung", en: "Projects & supporting evidence" },
    "port.sub": { id: "Saring sesuai kebutuhan Anda. Klik kartu untuk melihat bukti dukung: dashboard Tableau, tangkapan layar WebGIS, peta, dan cuplikan dokumen.", en: "Filter by what you need. Click a card to see supporting evidence: Tableau dashboards, WebGIS screenshots, maps, and document excerpts." },
    "filter.all": { id: "Semua", en: "All" },
    "filter.data": { id: "Data Analytics", en: "Data Analytics" },
    "filter.gis": { id: "GIS & WebGIS", en: "GIS & WebGIS" },
    "maps.eyebrow": { id: "Galeri Kartografi", en: "Cartography Gallery" },
    "maps.title": { id: "Peta & produk spasial", en: "Maps & spatial products" },
    "maps.sub": { id: "Kumpulan peta tematik, terestrial, dan hidrografi sebagai bukti keterampilan kartografi.", en: "A collection of thematic, terrestrial, and hydrographic maps demonstrating cartographic skill." },
    "certs.eyebrow": { id: "Sertifikasi", en: "Certifications" },
    "certs.title": { id: "Sertifikasi profesional", en: "Professional certifications" },
    "tst.eyebrow": { id: "Testimoni", en: "Testimonials" },
    "tst.title": { id: "Apa kata rekan kerja", en: "What colleagues say" },
    "contact.eyebrow": { id: "Mari Terhubung", en: "Let's Connect" },
    "contact.title": { id: "Terbuka untuk kolaborasi & peluang", en: "Open to collaboration & opportunities" },
    "contact.sub": { id: "Tertarik membahas peran di bidang data analytics, GIS/WebGIS, atau tata kelola data? Silakan hubungi saya.", en: "Interested in discussing roles in data analytics, GIS/WebGIS, or data governance? Feel free to reach out." },
    "contact.copy": { id: "Salin email", en: "Copy email" },
    "contact.copied": { id: "Tersalin!", en: "Copied!" },
    "contact.built": { id: "Dibuat dengan HTML, CSS & JavaScript · Situs statis", en: "Built with HTML, CSS & JavaScript · Static site" },
    "modal.impact": { id: "Dampak", en: "Impact" },
    "modal.tools": { id: "Perangkat", en: "Tools" },
    "modal.evidence": { id: "Bukti Dukung", en: "Supporting Evidence" },
    "modal.links": { id: "Tautan", en: "Links" },
    "evi.soon.tableau": { id: "Dashboard Tableau akan tersaji di sini", en: "Tableau dashboard will appear here" },
    "evi.soon.image": { id: "Tangkapan layar akan tersaji di sini", en: "Screenshot will appear here" },
    "evi.soon.map": { id: "Peta akan tersaji di sini", en: "Map will appear here" },
    "evi.soon.doc": { id: "Cuplikan dokumen akan tersaji di sini", en: "Document excerpt will appear here" },
    "evi.open": { id: "Buka tautan", en: "Open link" },
    "proj.evidence": { id: "bukti dukung", en: "evidence" },
    "proj.view": { id: "Lihat detail", en: "View details" },
    "kind.tableau": { id: "Dashboard", en: "Dashboard" },
    "kind.image": { id: "WebGIS", en: "WebGIS" },
    "kind.map": { id: "Peta", en: "Map" },
    "kind.doc": { id: "Dokumen", en: "Document" },
    "kind.link": { id: "Tautan", en: "Link" },
    "link.live": { id: "Aplikasi Langsung", en: "Live app" },
    "link.tableau": { id: "Tableau Public", en: "Tableau Public" },
    "link.github": { id: "GitHub", en: "GitHub" },
    "link.doc": { id: "Dokumen", en: "Document" },
    "link.link": { id: "Kunjungi", en: "Visit" }
  };

  var lang = "id", role = "all", filter = "all";
  function t(k) { return (UI[k] && UI[k][lang]) || k; }
  function tv(o) { return o ? (o[lang] || o.id || o.en || "") : ""; }
  function el(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var ICON = {
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6z"/><path d="M9 4v14M15 6v14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4"/></svg>',
    tree: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M12 8l5-3M12 8L7 5M12 14l5-3M12 14l-5-3"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M9 14l-1 7 4-2 4 2-1-7"/></svg>',
    evi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M6 3h8l5 5v13H6z"/></svg>',
    img: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5M19 5l-9 9M11 5H5v14h14v-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.9-2.6c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.2 1.6 5.1 1.9 5.1 1.9a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.6 9c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.4V21"/></svg>'
  };

  function disc(d) {
    if (d === "gis") return { cls: "pill--gis", text: "GIS/WebGIS" };
    if (d === "data") return { cls: "pill--data", text: "Data" };
    return { cls: "pill--both", text: "Data + GIS" };
  }
  function matches(itemDisc, want) {
    if (want === "all") return true;
    if (itemDisc === "both") return true;
    return itemDisc === want;
  }
  function inlineIco(svg, color) {
    return '<span class="ico" style="display:inline-flex;width:15px;height:15px;vertical-align:-2px' + (color ? ';color:' + color : '') + '">' + svg + '</span>';
  }

  /* Gambar dengan placeholder rapi bila belum ada file */
  function imgFallback(src, alt, phText, phClass) {
    var wrap = document.createElement("div");
    wrap.style.width = "100%";
    var img = new Image();
    img.alt = alt || ""; img.className = "evi-img";
    img.onload = function () { wrap.innerHTML = ""; wrap.appendChild(img); };
    img.onerror = function () {
      wrap.innerHTML = '<div class="' + (phClass || "evi-ph") + '">' + ICON.img + '<span>' + esc(phText) + '</span></div>';
    };
    if (src) img.src = src; else img.onerror();
    return wrap;
  }

  /* ================================================================ HERO -- */
  function renderHero() {
    el("hero-role").textContent = tv(S.profile.role);
    el("hero-tagline").textContent = tv(S.profile.tagline);
    var m = el("hero-meta");
    m.innerHTML =
      '<span>' + inlineIco(ICON.map) + esc(tv(S.profile.location)) + '</span>' +
      '<a href="mailto:' + esc(S.profile.email) + '">' + inlineIco(ICON.mail) + esc(S.profile.email) + '</a>' +
      '<a href="' + esc(S.profile.linkedin) + '" target="_blank" rel="noopener noreferrer">' + inlineIco(ICON.linkedin) + 'LinkedIn</a>';
    // Foto (bila ada)
    var ph = el("hero-photo");
    if (S.profile.photo) {
      var im = new Image();
      im.alt = "Wahyu Cahyaningrum Kusumawati";
      im.style.width = "100%"; im.style.height = "100%"; im.style.objectFit = "cover";
      im.onload = function () { ph.innerHTML = ""; ph.appendChild(im); };
      im.src = S.profile.photo; // jika gagal, placeholder bawaan tetap tampil
    }
  }

  /* =============================================================== ABOUT -- */
  function renderAbout() {
    el("about-intro").textContent = tv(S.profile.intro);
    var e = S.profile.education;
    function row(k, v) { return '<div class="row"><span class="k">' + esc(k) + '</span><span class="v">' + esc(v) + '</span></div>'; }
    el("edu-body").innerHTML =
      '<div style="font-size:18px;font-weight:700;color:var(--ink);margin-bottom:2px">' + esc(e.school) + '</div>' +
      '<div style="color:var(--muted);font-size:13.5px;margin-bottom:14px">' + esc(tv(e.degree)) + '</div>' +
      row(lang === "id" ? "Periode" : "Period", e.period) +
      row("GPA", e.gpa) +
      row(lang === "id" ? "Skripsi" : "Thesis", tv(e.thesis));
    // CV
    el("cv-id").href = S.cv.id.file; el("cv-id").querySelector("span").textContent = tv(S.cv.id.label);
    el("cv-en").href = S.cv.en.file; el("cv-en").querySelector("span").textContent = tv(S.cv.en.label);
  }

  function renderSkills() {
    var g = el("skills-grid");
    g.innerHTML = "";

    S.skills
        .filter(function (s) {
            return matches(s.discipline, role);
        })
        .forEach(function (s) {

            var c = document.createElement("div");
            c.className = "skill-card";

            var tags = "";

            s.items.forEach(function (item, index) {
                tags += '<span class="tag ' + (index >= 3 ? 'hidden' : '') + '">' +
                    esc(item) +
                    '</span>';
            });

            c.innerHTML =
                '<h4>' + esc(tv(s.group)) + '</h4>' +
                '<div class="tags">' +
                    tags +
                '</div>';

            if (s.items.length > 5) {
                var btn = document.createElement("button");
                btn.className = "skill-toggle";
                btn.innerHTML = tv({
    id: "Lihat Selengkapnya ▼",
    en: "See More ▼"
});

                btn.onclick = function () {

                    var hidden = c.querySelectorAll(".tag.hidden");

                    if (hidden.length > 0) {

                        hidden.forEach(function (tag) {
                            tag.classList.remove("hidden");
                        });

                        btn.innerHTML = "Show Less ▲";

                    } else {

                        c.querySelectorAll(".tag").forEach(function (tag, i) {
                            if (i >= 5) {
                                tag.classList.add("hidden");
                            }
                        });

                        btn.innerHTML = "See More ▼";
                    }

                };

                c.appendChild(btn);
            }

            g.appendChild(c);
        });
}

  /* ============================================================= SERVICES - */
  function renderServices() {
    var wrap = el("services"); wrap.innerHTML = "";
    S.services.forEach(function (sv, idx) {
      var open = idx === 0;
      var card = document.createElement("div");
      card.className = "svc" + (open ? " open" : "");
      var pts = sv.points.map(function (p) { return '<li>' + esc(tv(p)) + '</li>'; }).join("");
      var icon = sv.discipline === "data"
        ? '<svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'
        : '<svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
      card.innerHTML =
        '<button class="svc-head" aria-expanded="' + open + '">' +
          '<span class="svc-ico">' + icon + '</span>' +
          '<span class="txt"><h3>' + esc(tv(sv.title)) + '</h3><p>' + esc(tv(sv.blurb)) + '</p></span>' +
          '<span class="chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
        '</button>' +
        '<div class="svc-body"><ul>' + pts + '</ul></div>';
      var head = card.querySelector(".svc-head");
      head.addEventListener("click", function () {
        var isOpen = card.classList.toggle("open");
        head.setAttribute("aria-expanded", String(isOpen));
      });
      wrap.appendChild(card);
    });
  }

  /* =========================================================== EXPERIENCE - */
  function renderExperience() {
    var wrap = el("timeline"); wrap.innerHTML = "";
    S.experience.filter(function (x) { return matches(x.discipline, role); }).forEach(function (x) {
      var it = document.createElement("div"); it.className = "tl-item";
      it.innerHTML =
        '<div class="when">' + esc(x.period) + '</div>' +
        '<div class="body">' +
          '<div class="org">' + esc(x.org) + (x.location ? ' · ' + esc(x.location) : '') + '</div>' +
          '<h4>' + esc(tv(x.role)) + '</h4>' +
          '<div class="note">' + esc(tv(x.note)) + '</div>' +
        '</div>';
      wrap.appendChild(it);
    });
  }

  /* ============================================================ PROJECTS -- */
  function renderProjects() {
    var grid = el("proj-grid"); grid.innerHTML = "";
    var list = S.projects.filter(function (p) { return matches(p.discipline, filter); });
    el("filter-count").textContent = list.length + " " + (lang === "id" ? "proyek" : "projects");
    list.forEach(function (p) {
      var d = disc(p.discipline);
      var card = document.createElement("button"); card.className = "proj-card"; card.type = "button";
      var tools = (p.tools || []).slice(0, 5).map(function (tl) { return '<span class="tag">' + esc(tl) + '</span>'; }).join("");
      var eviN = (p.evidence || []).length;
      card.innerHTML =
        '<div class="top"><span class="org">' + esc(p.org) + '</span><span class="pill ' + d.cls + '">' + d.text + '</span></div>' +
        '<h3>' + esc(tv(p.title)) + '</h3>' +
        '<div class="type">' + esc(tv(p.type)) + '</div>' +
        '<div class="desc">' + esc(tv(p.summary)) + '</div>' +
        '<div class="tools">' + tools + '</div>' +
        '<div class="foot"><span class="evi-count">' + ICON.evi + eviN + ' ' + t("proj.evidence") + '</span>' +
        '<span class="open">' + t("proj.view") + ICON.arrow + '</span></div>';
      card.addEventListener("click", function () { openModal(p); });
      grid.appendChild(card);
    });
  }

  /* =============================================================== MODAL -- */
  function tableauEmbed(url) {
    var clean = url.split("?")[0];
    return clean + "?:embed=y&:showVizHome=no&:tabs=no&:toolbar=yes&:display_count=no";
  }
  function evidenceNode(ev) {
    var kindText = t("kind." + ev.kind);
    var item = document.createElement("div"); item.className = "evi-item";
    var cap = '<div class="evi-cap"><span class="t">' + esc(tv(ev.label)) + '</span><span class="kind">' + kindText + '</span></div>';

    if (ev.kind === "tableau") {
      if (ev.url) {
        item.innerHTML = cap + '<iframe class="evi-frame" src="' + esc(tableauEmbed(ev.url)) + '" loading="lazy" referrerpolicy="no-referrer"></iframe>';
      } else {
        item.innerHTML = cap + '<div class="evi-ph">' + ICON.img + '<span>' + esc(t("evi.soon.tableau")) + '</span></div>';
      }
      return item;
    }
    if (ev.kind === "link") {
      item.innerHTML = cap +
        '<a class="evi-link" href="' + esc(ev.url || "#") + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="t">' + esc(tv(ev.label)) + '</span>' + inlineIco(ICON.ext, "var(--accent-ink)") + '</a>';
      return item;
    }
    // image / map / doc
    item.innerHTML = cap;
    var phKey = ev.kind === "map" ? "evi.soon.map" : (ev.kind === "doc" ? "evi.soon.doc" : "evi.soon.image");
    var holder = imgFallback(ev.src, tv(ev.label), t(phKey));
    item.appendChild(holder);
    // klik gambar -> lightbox
    item.addEventListener("click", function (e) {
      var im = holder.querySelector("img");
      if (im && (e.target === im)) openLightbox(im.src, im.alt);
    });
    return item;
  }
  function openModal(p) {
    el("modal-title").textContent = tv(p.title);
    el("modal-sub").textContent = p.org + " · " + tv(p.type);
    var body = el("modal-body"); body.innerHTML = "";

    var sum = document.createElement("p"); sum.textContent = tv(p.summary); body.appendChild(sum);

    if (p.impact) {
      var il = document.createElement("div"); il.className = "blk-label"; il.textContent = t("modal.impact"); body.appendChild(il);
      var ip = document.createElement("p"); ip.textContent = tv(p.impact); body.appendChild(ip);
    }
    if (p.tools && p.tools.length) {
      var tl = document.createElement("div"); tl.className = "blk-label"; tl.textContent = t("modal.tools"); body.appendChild(tl);
      var tw = document.createElement("div"); tw.className = "modal-tools";
      tw.innerHTML = p.tools.map(function (x) { return '<span class="tag">' + esc(x) + '</span>'; }).join("");
      body.appendChild(tw);
    }
    // Tautan aksi
    var links = (p.links || []).filter(function (l) { return l.url; });
    if (links.length) {
      var ll = document.createElement("div"); ll.className = "blk-label"; ll.textContent = t("modal.links"); body.appendChild(ll);
      var lw = document.createElement("div"); lw.className = "modal-links";
      lw.innerHTML = links.map(function (l) {
        var label = l.label ? tv(l.label) : t("link." + (l.type || "link"));
        var ico = l.type === "github" ? ICON.github : (l.type === "tableau" ? ICON.evi : ICON.ext);
        return '<a class="btn btn-outline" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + ico + '<span>' + esc(label) + '</span></a>';
      }).join("");
      body.appendChild(lw);
    }
    if (p.evidence && p.evidence.length) {
      var el2 = document.createElement("div"); el2.className = "blk-label"; el2.textContent = t("modal.evidence"); body.appendChild(el2);
      var ew = document.createElement("div"); ew.className = "evi";
      p.evidence.forEach(function (ev) { ew.appendChild(evidenceNode(ev)); });
      body.appendChild(ew);
    }
    var modal = el("modal"); modal.classList.add("open"); document.body.style.overflow = "hidden";
    el("modal-close").focus();
  }
  function closeModal() { el("modal").classList.remove("open"); document.body.style.overflow = ""; }

/* ================================================================ MAPS -- */
/* ================================================================ MAPS -- */
function renderMaps() {
  var g = el("map-grid");
  g.innerHTML = "";

  (S.mapGallery || []).forEach(function (cat) {

    var card = document.createElement("div");
    card.className = "map-card";

    var tools = (cat.tools || [])
      .map(function(t){
        return '<span class="tag">'+esc(t)+'</span>';
      }).join("");

    card.innerHTML =
      '<div class="cap">' +
        '<h3>'+esc(tv(cat.category))+'</h3>' +
        '<p>'+esc(tv(cat.description))+'</p>' +
        '<div class="tools">'+tools+'</div>' +

        '<button class="btn btn-primary view-maps">' +
          'View Maps ' + ICON.arrow +
        '</button>' +
      '</div>';

    card.querySelector(".view-maps")
      .addEventListener("click", function(e){
        e.stopPropagation();
        openMapModal(cat);
      });

    g.appendChild(card);

  });
}
function openMapModal(map) {
  el("modal-title").textContent = tv(map.category);
  el("modal-sub").textContent = "";

  var body = el("modal-body");
  body.innerHTML = "";

  // deskripsi
  var desc = document.createElement("p");
  desc.textContent = tv(map.description);
  body.appendChild(desc);

  // tools
  if (map.tools && map.tools.length) {
    var tl = document.createElement("div");
    tl.className = "blk-label";
    tl.textContent = t("modal.tools");
    body.appendChild(tl);

    var tw = document.createElement("div");
    tw.className = "modal-tools";
    tw.innerHTML = map.tools.map(function(tool){
      return '<span class="tag">'+esc(tool)+'</span>';
    }).join("");
    body.appendChild(tw);
  }

  // gallery peta
  if (map.outputs && map.outputs.length) {
    var lbl = document.createElement("div");
    lbl.className = "blk-label";
    lbl.textContent = lang === "id" ? "Peta" : "Maps";
    body.appendChild(lbl);

    var grid = document.createElement("div");
    grid.className = "evi";

    map.outputs.forEach(function(out){

      var item = document.createElement("div");
      item.className = "evi-item";

      item.innerHTML =
        '<div class="evi-cap">' +
          '<span class="t">'+esc(tv(out.title))+'</span>' +
        '</div>';

      var holder = imgFallback(
        out.src,
        tv(out.title),
        lang==="id" ? "Peta akan tersaji" : "Map appears here"
      );

      item.appendChild(holder);

      item.addEventListener("click",function(e){
        var img = holder.querySelector("img");
        if(img && e.target===img){
          openLightbox(img.src,img.alt);
        }
      });

      grid.appendChild(item);
    });

    body.appendChild(grid);
  }

  var modal = el("modal");
  modal.classList.add("open");
  document.body.style.overflow="hidden";
}
  /* =============================================================== CERTS -- */
  function renderCerts() {
    var g = el("cert-grid"); g.innerHTML = "";
    S.certifications.filter(function (c) { return matches(c.discipline, role); }).forEach(function (c) {
      var card = document.createElement("div"); card.className = "cert-card";
      card.innerHTML =
        '<span class="badge">' + ICON.cert + '</span>' +
        '<div><h4>' + esc(c.name) + '</h4><div class="meta">' + esc(c.issuer) + ' · ' + esc(c.year) + '</div></div>';
      g.appendChild(card);
    });
  }

  /* ============================================================== FOOTER -- */
  function renderFooter() {
    el("footer-email").textContent = S.profile.email;
    var links = [];
    if (S.profile.linkedin) links.push('<a href="' + esc(S.profile.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.linkedin + 'LinkedIn</a>');
    if (S.profile.linktree) links.push('<a href="' + esc(S.profile.linktree) + '" target="_blank" rel="noopener noreferrer">' + ICON.tree + 'Linktree</a>');
    links.push('<a href="mailto:' + esc(S.profile.email) + '">' + ICON.mail + 'Email</a>');
    el("footer-links").innerHTML = links.join("");
    var year = new Date().getFullYear();
    el("copy-text").textContent = "© " + year + " Wahyu Cahyaningrum Kusumawati";
  }
/* =============================================================== STATS -- */
function renderStats() {

  if (!S.stats) return;

  // Judul section
  var eyebrow = document.querySelector('[data-i18n="stats.eyebrow"]');
  if (eyebrow) eyebrow.textContent = tv(S.stats.eyebrow);

  var title = document.querySelector('[data-i18n="stats.title"]');
  if (title) title.textContent = tv(S.stats.title);

  // Isi statistik
  var wrap = el("hero-stats");
  if (!wrap) return;

  wrap.innerHTML = "";

  S.stats.items.forEach(function(item){

    var stat = document.createElement("div");
    stat.className = "stat";

    stat.innerHTML =
      '<div class="icon">' +
        '<i class="fa-solid ' + item.icon + '"></i>' +
      '</div>' +

      '<div class="num" data-count="' + item.value + '"' +
      (item.suffix ? ' data-suffix="' + item.suffix + '"' : '') +
      '>0</div>' +

      '<span class="lbl">' +
        esc(tv(item.label)) +
      '</span>';

    wrap.appendChild(stat);

  });

  // Jalankan lagi animasi angka
  countUp();
}
  /* ============================================================= REVEAL --- */
  var io;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(function (n) { n.classList.add("in"); }); return;
    }
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]:not(.in)").forEach(function (n) { io.observe(n); });
  }

  /* =============================================================== i18n --- */
  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var k = n.getAttribute("data-i18n"); if (UI[k]) n.textContent = UI[k][lang];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".stat .lbl").forEach(function (s) {
      var v = s.getAttribute("data-" + lang); if (v) s.textContent = v;
    });
  }

  function renderAll() {
    applyStaticI18n();
    renderHero();
renderAbout();
renderSkills();
renderServices();
renderExperience();
renderProjects();
renderMaps();
renderCerts();
renderFooter();
renderStats();
updateRoleHint();
observeReveal();
  }

  /* ============================================================== EVENTS -- */
  function setLang(l) {
    lang = l;
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === l;
      b.classList.toggle("active", on); b.setAttribute("aria-pressed", String(on));
    });
    try { localStorage.setItem("wck2_lang", l); } catch (e) {}
    renderAll();
  }
  function updateRoleHint() { var h = el("role-hint"); if (h) h.textContent = t("role." + role + ".d"); }
  // Satu keadaan bersama: toggle hero & chip portofolio mengendalikan hal yang sama.
  // doScroll=true (dari hero) mengantar turun ke portofolio; dari chip tidak (sudah di situ).
  function setRole(r) {
    role = r;
    filter = r;

    document.body.setAttribute("data-accent", r);

    document.querySelectorAll(".role-opt").forEach(function (c) {
      var on = c.getAttribute("data-role") === r;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", String(on));
    });

    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle(
        "active",
        c.getAttribute("data-filter") === r
      );
    });

    updateRoleHint();

    try {
      localStorage.setItem("wck2_role", r);
    } catch (e) {}

    renderSkills();
    renderExperience();
    renderProjects();
    renderCerts();
}

  function openLightbox(src, alt) { var lb = el("lightbox"); el("lightbox-img").src = src; el("lightbox-img").alt = alt || ""; lb.classList.add("open"); }
  function closeLightbox() { el("lightbox").classList.remove("open"); el("lightbox-img").src = ""; }

  function copyEmail() {
    var lbl = el("copy-email-label"), orig = t("contact.copy");
    function done() { lbl.textContent = t("contact.copied"); setTimeout(function () { lbl.textContent = orig; }, 1600); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(S.profile.email).then(done, function () { fallbackCopy(S.profile.email); done(); });
    } else { fallbackCopy(S.profile.email); done(); }
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(ta);
  }

  function bind() {
    document.querySelectorAll(".lang-toggle button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
    document.querySelectorAll(".role-opt").forEach(function (c) { c.addEventListener("click", function () { setRole(c.getAttribute("data-role"), true); }); });
    document.querySelectorAll(".chip").forEach(function (c) { c.addEventListener("click", function () { setRole(c.getAttribute("data-filter"), false); }); });
    el("modal-close").addEventListener("click", closeModal);
    el("modal").addEventListener("click", function (e) { if (e.target === el("modal")) closeModal(); });
    el("lightbox").addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModal(); closeLightbox(); } });
    el("copy-email").addEventListener("click", copyEmail);
    // burger
    var burger = el("burger"), links = el("nav-links");
    burger.addEventListener("click", function () {
      var show = links.classList.toggle("show");
      burger.setAttribute("aria-expanded", String(show));
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("show"); burger.setAttribute("aria-expanded", "false"); }); });
    // scroll progress + nav elevation
    var prog = el("scroll-progress"), nav = el("nav");
    window.addEventListener("scroll", function () {
      var h = document.documentElement, top = h.scrollTop || document.body.scrollTop || 0, max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (top / max * 100) : 0).toFixed(2) + "%";
      nav.classList.toggle("scrolled", top > 8);
    }, { passive: true });
  }

  /* Hitung-naik statistik */
  function countUp() {
    var nums = document.querySelectorAll(".stat .num");
    function run(n) {
      var target = parseFloat(n.getAttribute("data-count")) || 0, suf = n.getAttribute("data-suffix") || "";
      if (reduce) { n.innerHTML = target + (suf ? '<span class="suf">' + suf + '</span>' : ''); return; }
      var start = null, dur = 1300;
      function tick(ts) {
        if (!start) start = ts; var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        n.innerHTML = Math.round(target * e) + (suf ? '<span class="suf">' + suf + '</span>' : '');
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    if ("IntersectionObserver" in window) {
      var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { run(e.target); o.unobserve(e.target); } }); }, { threshold: .4 });
      nums.forEach(function (n) { o.observe(n); });
    } else { nums.forEach(run); }
  }

  /* ================================================================ INIT -- */
  function init() {
    try {
      var sl = localStorage.getItem("wck2_lang"); if (sl) lang = sl;
      var sr = localStorage.getItem("wck2_role"); if (sr) role = sr;
    } catch (e) {}
    filter = role;
    document.body.setAttribute("data-accent", role);
    bind();
    setLang(lang);
    document.querySelectorAll(".role-opt").forEach(function (c) { var on = c.getAttribute("data-role") === role; c.classList.toggle("active", on); c.setAttribute("aria-pressed", String(on)); });
    document.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c.getAttribute("data-filter") === filter); });
    countUp();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
