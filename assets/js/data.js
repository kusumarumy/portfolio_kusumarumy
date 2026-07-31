/* =============================================================================
   data.js — SATU-SATUNYA FILE YANG PERLU KAMU EDIT UNTUK MENGGANTI ISI
   -----------------------------------------------------------------------------
   Semua teks ditulis dua bahasa: { id: "...", en: "..." }.
   Setiap proyek diberi tag "discipline": 'gis' | 'data' | 'both'
   -> inilah yang membuat website memfilter portofolio sesuai kebutuhan pengunjung.

   BUKTI DUKUNG (evidence) tiap proyek berupa array. Jenis yang didukung:
     { kind:'tableau', url:'https://public.tableau.com/views/...' , label:{id,en} }
     { kind:'image',   src:'assets/img/screenshots/xxx.png',        label:{id,en} }
     { kind:'map',     src:'assets/img/maps/xxx.png',               label:{id,en} }
     { kind:'doc',     src:'assets/img/docs/xxx.png',               label:{id,en} }
     { kind:'link',    url:'https://...',                           label:{id,en} }
   TAUTAN AKSI (links) tiap proyek — tombol di panel detail (opsional):
     { type:'live'|'tableau'|'github'|'doc'|'link', url:'...', label:{id,en} }
   Cukup tambah/hapus item di array — website menyesuaikan otomatis.
   ============================================================================= */

window.SITE = {

  /* ---------------------------------------------------------------- PROFIL -- */
  profile: {
    name: "Wahyu Cahyaningrum Kusumawati",
    // Nama panggilan untuk sapaan orang-pertama di bagian perkenalan
    firstName: "Wahyu",
    role: {
      id: "Data Analyst • Geospatial Analyst • GIS & WebGIS Specialist • Data Governance",
      en: "Data Analyst • Geospatial Analyst • GIS & WebGIS Specialist • Data Governance"
},
    location: { id: "Cibinong, Bogor, Indonesia", en: "Cibinong, Bogor, Indonesiaa" },
    email: "wahyucahyaningrumkusumawati@gmail.com",
    phone: "+62 858-4811-0918",
    linkedin: "https://www.linkedin.com/in/wahyu-cahyaningrum-kusumawati/",
    linktree: "https://linktr.ee/kusumarumy",
    // Foto profil (opsional). Taruh file di assets/img/people/ lalu isi nama di sini.
    photo: "assets/img/people/ningrum.jpg",
    tagline:{
id:"Mengubah data kompleks menjadi insight yang dapat ditindaklanjuti melalui analisis data, dashboard interaktif, dan solusi geospasial berbasis GIS & WebGIS.",
en:"Transforming complex data into actionable insights through data analytics, interactive dashboards, and GIS & WebGIS solutions."
},
    // Perkenalan orang-pertama (gaya hangat, seperti referensi)
intro:{
id:"Halo, saya Wahyu Cahyaningrum Kusumawati. Saya berfokus pada Data Analytics, Geospatial Analytics, GIS, WebGIS Development, serta Data Governance untuk mengubah data statistik maupun spasial menjadi dashboard interaktif, peta tematik, dan sistem pendukung keputusan. Saya memiliki pengalaman mengembangkan solusi berbasis data bagi instansi pemerintah, BUMN, dan sektor swasta guna mendukung analisis, perencanaan, serta pengambilan keputusan yang lebih efektif.",
en:"Hello, I'm Wahyu Cahyaningrum Kusumawati. I specialize in Data Analytics, Geospatial Analytics, GIS, WebGIS Development, and Data Governance, transforming statistical and geospatial data into interactive dashboards, thematic maps, and decision-support systems. I have experience delivering data-driven solutions for government institutions, state-owned enterprises, and private organizations to support analysis, planning, and informed decision-making."
},
    summary:{
id:"Lulusan Teknik Geodesi Universitas Gadjah Mada dengan pengalaman dalam Data Analytics, Business Intelligence, Geospatial Analytics, GIS & WebGIS Development, Spatial Database, serta Data Governance. Berpengalaman mengembangkan dashboard interaktif, melakukan analisis statistik dan spasial, membangun WebGIS, serta menyusun tata kelola data geospasial untuk mendukung monitoring, evaluasi, dan pengambilan keputusan berbasis bukti.",
en:"Geodetic Engineering graduate from Universitas Gadjah Mada experienced in Data Analytics, Business Intelligence, Geospatial Analytics, GIS & WebGIS Development, Spatial Databases, and Data Governance. Experienced in building interactive dashboards, performing statistical and spatial analysis, developing WebGIS applications, and implementing geospatial data governance to support evidence-based decision-making."
},
    education: {
      school: "Universitas Gadjah Mada",
      degree: { id: "Sarjana Teknik — Teknik Geodesi", en: "Bachelor of Engineering — Geodetic Engineering" },
      period: "2021 – 2025",
      gpa: "3.53 / 4.00",
      thesis: {
        id: "Pembuatan Sistem Informasi Aset Unit Komersialisasi Non Angkutan PT KAI di Stasiun Solo Balapan",
        en: "Development of an Asset Information System for PT KAI’s Non Transportation Commercial Unit at Solo Balapan Station."
      }
    },
    lastUpdated: "2026-07"
  },

  /* --------------------------------------------------------- CV (unduhan) --- */
  cv: {
  id: {
    file: "assets/cv/ind.pdf",
    label: { id: "CV — Bahasa Indonesia", en: "CV — Indonesian" }
  },
  en: {
    file: "https://drive.google.com/uc?export=download&id=10LfDmSjpPy00LDI9vbwuqG6qEqlr8Dss",
    label: { id: "CV — English", en: "CV — English" }
  }
},
/* ------------------------------------------------------------- STATISTICS --- */
stats: {
  eyebrow: {
    id: "HIGHLIGHT PROFESIONAL",
    en: "PROFESSIONAL HIGHLIGHTS"
  },

  title: {
    id: "Sekilas Pengalaman",
    en: "Experience at a Glance"
  },

  items: [
    {
      value: 12,
      suffix: "",
      icon: "fa-folder-open",
      label: {
        id: "Proyek",
        en: "Projects"
      }
    },
    {
      value: 20,
      suffix: "",
      icon: "fa-chart-column",
      label: {
        id: "Dashboard",
        en: "Dashboards"
      }
    },
    {
      value: 50,
      suffix: "+",
      icon: "fa-map-location-dot",
      label: {
        id: "Peta Tematik",
        en: "Thematic Maps"
      }
    },
    {
      value: 5,
      suffix: "",
      icon: "fa-briefcase",
      label: {
        id: "Pengalaman Profesional",
        en: "Professional Experiences"
      }
    },
    {
      value: 8,
      suffix: "",
      icon: "fa-award",
      label: {
        id: "Sertifikasi",
        en: "Certifications"
      }
    }
  ]
},
  /* ------------------------------------------ BAGAIMANA SAYA BISA MEMBANTU -- */
  /* Dua kartu keahlian yang bisa di-expand (accordion). */
  services: [
    {
      discipline: "data",
      title: { id: "Data Analytics & Business Intelligence", en: "Data Analytics & Business Intelligence" },
      blurb: {
        id: "Mengubah data mentah menjadi dashboard interaktif dan wawasan yang siap dipakai untuk monitoring, evaluasi, dan pengambilan kebijakan.",
        en: "Turning raw data into interactive dashboards and ready-to-use insights for monitoring, evaluation, and policy-making."
      },
      points: [
        { id: "Dashboard interaktif (Tableau, Power BI) untuk monitoring & pelaporan.", en: "Interactive dashboards (Tableau, Power BI) for monitoring & reporting." },
        { id: "Pembersihan, validasi, integrasi, dan transformasi data.", en: "Data cleaning, validation, integration, and transformation." },
        { id: "Analisis statistik & indeks kinerja (KPI, gap analysis).", en: "Statistical analysis & performance indices (KPI, gap analysis)." },
        { id: "Tata kelola data: SOP, metadata ISO 19115, kerangka QC/QA/QE.", en: "Data governance: SOP, ISO 19115 metadata, QC/QA/QE frameworks." }
      ]
    },
    {
      discipline: "gis",
      title: { id: "GIS, WebGIS & Survei Geodesi", en: "GIS, WebGIS & Geodetic Survey" },
      blurb: {
        id: "Merancang analisis spasial, peta tematik, dan aplikasi WebGIS full-stack — dari akuisisi data lapangan hingga visualisasi interaktif.",
        en: "Designing spatial analysis, thematic maps, and full-stack WebGIS applications — from field data acquisition to interactive visualization."
      },
      points: [
        { id: "Pengembangan WebGIS 2D & 3D (Leaflet, Cesium, PostGIS).", en: "2D & 3D WebGIS development (Leaflet, Cesium, PostGIS)." },
        { id: "Analisis spasial & pemetaan tematik (QGIS, ArcGIS).", en: "Spatial analysis & thematic mapping (QGIS, ArcGIS)." },
        { id: "Survei batas & aset berbasis GNSS/RTK, georeferensi.", en: "GNSS/RTK boundary & asset surveys, georeferencing." },
        { id: "Basis data spasial & manajemen aset geospasial.", en: "Spatial databases & geospatial asset management." }
      ]
    }
  ],

  /* -------------------------------------------------- KOMPETENSI / SKILLS --- */
skills: [

  {
    group: { id: "Analitik & Visualisasi Data", en: "Data Analytics & Visualization" },
    items: [
      "Python",
      "Tableau",
      "Power BI",
      "Microsoft Excel",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Reporting",
      "Business Intelligence"
    ],
    discipline: "data"
  },

  {
    group: { id: "Basis Data & Manajemen Data", en: "Database & Data Management" },
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "PostGIS",
      "DBeaver",
      "Database Management",
      "Spatial Database",
      "Data Integration",
      "Data Extraction"
    ],
    discipline: "both"
  },

  {
    group: { id: "Pemrosesan & Kualitas Data", en: "Data Processing & Quality" },
    items: [
      "Data Cleaning",
      "Data Validation",
      "Data Transformation",
      "Data Standardization",
      "Metadata Management",
      "Quality Control (QC)",
      "Quality Assurance (QA)",
      "Quality Evaluation (QE)",
      "SOP Development",
      "ETL (Extract, Transform, Load)"
    ],
    discipline: "data"
  },

  {
    group: { id: "Pemrograman & Pengembangan WebGIS", en: "Programming & WebGIS Development" },
    items: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Leaflet JS",
      "Cesium JS",
      "Fetch API",
      "Git",
      "GitHub",
      "RESTful API",
      "GeoServer",
    ],
    discipline: "gis"
  },

  {
    group: { id: "GIS & Pemetaan", en: "GIS & Mapping" },
    items: [
      "ArcGIS",
      "QGIS",
      "AutoCAD",
      "Global Mapper",
      "SketchUp"
    ],
    discipline: "gis"
  },

  {
    group: { id: "Pemrosesan Spasial", en: "Spatial Processing" },
    items: [
      "Spatial Analysis",
      "Georeferencing",
      "Digitizing",
      "Spatial Data Validation",
      "3D Terrain Modeling",
      "Spatial Query"
    ],
    discipline: "gis"
  },

  {
    group: { id: "Survei & Pengukuran Geospasial", en: "Surveying & Geospatial Measurement" },
    items: [
      "GNSS/GPS",
      "Total Station",
      "Theodolite",
      "Automatic Level"
    ],
    discipline: "gis"
  },

  {
    group: { id: "Monitoring & Evaluasi", en: "Monitoring & Evaluation" },
    items: [
      "KPI Analysis",
      "Performance Measurement",
      "Performance Evaluation",
      "Gap Analysis",
      "Index Assessment"
    ],
    discipline: "data"
  },

  {
    group: { id: "Desain & Dokumentasi", en: "Design & Documentation" },
    items: [
      "Figma",
      "draw.io",
      "Lucidchart"
    ],
    discipline: "both"
  },

  {
    group: { id: "Version Control & Deployment", en: "Version Control & Deployment" },
    items: [
      "Git",
      "GitHub",
      "Vercel"
    ],
    discipline: "gis"
  }

],

  /* -------------------------------------------------- PENGALAMAN (ringkas) -- */
experience: [

  {
    org: "Kementerian Koordinator Bidang Politik dan Keamanan Republik Indonesia",
    location: "DKI Jakarta",
    role: {
      id: "Surveyor Pemetaan / Data Analyst (Magang)",
      en: "Mapping Surveyor / Data Analyst (Internship)"
    },
    period: "Des 2025 – Jun 2026",
    year: "2025",
    discipline: "both",
    note: {
      id: "Mengolah, membersihkan, memvalidasi, dan menganalisis data statistik & geospasial; menghasilkan 19 dashboard Tableau, 1 dashboard Power BI, 50 peta tematik, dokumentasi tata kelola data (SOP, SPD, Metadata, QC/QE/QA), serta WebGIS nasional untuk mendukung monitoring, evaluasi, dan pengambilan keputusan berbasis bukti.",
      en: "Processed, cleaned, validated, and analyzed statistical & geospatial datasets; developed 19 Tableau dashboards, 1 Power BI dashboard, 50 thematic maps, data governance documentation (SOP, SPD, Metadata, QC/QE/QA), and a national WebGIS to support evidence-based monitoring, evaluation, and decision-making."
    }
  },

  {
    org: "PT Kereta Api Indonesia (Persero) DAOP 6 Yogyakarta Region 6.4",
    location: "Remote",
    role: {
      id: "GIS Specialist (Freelance)",
      en: "GIS Specialist (Freelance)"
    },
    period: "Sep 2025 – Apr 2026",
    year: "2025",
    discipline: "gis",
    note: {
      id: "Mengolah, mendigitasi, dan memvalidasi data geospasial aset perkeretaapian di Terminal Kebon Polo, Grabag, Tegalsari, Secang, Kranggan, Kertosari, Mojotengah, Payaman, dan Jambewangi; menghasilkan peta tematik, lampiran pemetaan, serta laporan teknis.",
      en: "Processed, digitized, and validated railway asset geospatial data across Kebon Polo Terminal, Grabag, Tegalsari, Secang, Kranggan, Kertosari, Mojotengah, Payaman, and Jambewangi; produced thematic maps, mapping appendices, and technical reports."
    }
  },

  {
    org: "PT Total Geo Survey",
    location: "Yogyakarta",
    role: {
      id: "Full Stack WebGIS Developer (Kontrak)",
      en: "Full Stack WebGIS Developer (Contract)"
    },
    period: "Sep 2025 – Des 2025",
    year: "2025",
    discipline: "gis",
    note: {
      id: "Mengembangkan WebGIS SITIJO (11 layer infrastruktur kota) dan WebGIS LINTAS (visualisasi 3D enam jembatan) menggunakan PostgreSQL/PostGIS, RESTful API, Leaflet JS, dan Cesium JS untuk mendukung perencanaan, monitoring, serta manajemen aset.",
      en: "Developed WebGIS SITIJO (11 urban infrastructure layers) and WebGIS LINTAS (3D visualization of six bridges) using PostgreSQL/PostGIS, RESTful APIs, Leaflet JS, and Cesium JS to support infrastructure planning, monitoring, and asset management."
    }
  },

  {
    org: "PT Kereta Api Indonesia (Persero) DAOP 6 Yogyakarta",
    location: "Yogyakarta",
    role: {
      id: "Geodetic Engineer (Magang)",
      en: "Geodetic Engineer (Internship)"
    },
    period: "Jan 2025 – Mar 2025",
    year: "2025",
    discipline: "gis",
    note: {
      id: "Melaksanakan survei GNSS RTK, pengolahan data, georeferensi Grondkaart, validasi data spasial, serta pembuatan peta tematik untuk aset perkeretaapian di Stasiun Solo Balapan, Klaten, Purwosari, dan Palur.",
      en: "Conducted GNSS RTK surveys, processed survey data, georeferenced historical Grondkaart maps, validated spatial data, and produced thematic maps for railway assets at Solo Balapan, Klaten, Purwosari, and Palur Stations."
    }
  },

  {
    org: "ATR/BPN Kabupaten Klaten",
    location: "Klaten",
    role: {
      id: "Asisten Digitalisasi Dokumen (Magang)",
      en: "Document Digitization Assistant (Internship)"
    },
    period: "Jan 2023 – Feb 2023",
    year: "2023",
    discipline: "both",
    note: {
      id: "Mendigitalisasi dan menata dokumen sertifikat tanah secara sistematis untuk mendukung manajemen data pertanahan serta meningkatkan aksesibilitas data.",
      en: "Digitized and systematically organized land certificate documents to support land data management and improve data accessibility."
    }
  }

],

  /* ------------------------------------------------------------- PROYEK ----- */
  projects: [

    /* ===== DATA ANALYTICS ===== */
    {
      id: "kemenko-dashboards",
      discipline: "data", featured: true,
      org: "Kemenko Polkam RI",
      title: { id: "Dashboard Analitik Sosial-Politik & Infrastruktur", en: "Socio-Political & Infrastructure Analytics Dashboards" },
      type: { id: "Visualisasi Data · Business Intelligence", en: "Data Visualization · Business Intelligence" },
      summary: {
        id: "20 dashboard Tableau interaktif yang mengubah data tata kelola, sosial-politik, infrastruktur, dan kelembagaan menjadi wawasan untuk monitoring, evaluasi, dan pengambilan kebijakan berbasis bukti. Mencakup pembersihan, validasi, integrasi, dan transformasi data sebelum visualisasi.",
        en: "20 interactive Tableau dashboards transforming governance, socio-political, infrastructure, and institutional data into insights for monitoring, evaluation, and evidence-based policy. Includes data cleaning, validation, integration, and transformation prior to visualization."
      },
      tools: ["Tableau", "Power BI", "Microsoft Excel", "SQL"],
      impact: {
        id: "Meningkatkan efisiensi monitoring & pelaporan serta akses pemangku kepentingan terhadap informasi strategis untuk evaluasi kebijakan.",
        en: "Improved monitoring & reporting efficiency and stakeholder access to strategic information for policy evaluation."
      },
      evidence: [
  {
    kind: "image",
    src: "assets/img/dashboard/ikkepp.png",
    label: {
      id: "Indeks Kepatuhan Kode Etik Penyelenggaraan Pemilu (IKKEPP), 2024",
      en: "Election Organizer Code of Ethics Compliance Index (IKKEPP), 2024"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/bts.png",
    label: {
      id: "Infrastruktur Telekomunikasi di Daerah (Jumlah BTS), 2025",
      en: "Regional Telecommunication Infrastructure (Number of BTS), 2025"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/anggaran26.png",
    label: {
      id: "Anggaran Layanan Sarana & Prasarana Internal Kemenko Polkam, 2026",
      en: "Internal Facilities & Infrastructure Service Budget, 2026"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/rekomendasi2224.png",
    label: {
      id: "Rekapitulasi Data Rekomendasi Kebijakan Kemenko Polkam, 2022–2024",
      en: "Kemenko Polkam Policy Recommendation Recapitulation, 2022–2024"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/rekomendasi25.png",
    label: {
      id: "Rekapitulasi Data Rekomendasi Kebijakan Kemenko Polkam, 2025",
      en: "Kemenko Polkam Policy Recommendation Recapitulation, 2025"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/prov.png",
    label: {
      id: "Indikator Daerah per Provinsi, 2022",
      en: "Regional Indicators by Province, 2022"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/coverage.png",
    label: {
      id: "Coverage Sinyal di Indonesia, 2023–2025",
      en: "Signal Coverage in Indonesia, 2023–2025"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/ikp.png",
    label: {
      id: "Indeks Kerawanan Pemilu (IKP), 2024",
      en: "Election Vulnerability Index (IKP), 2024"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/skt.png",
    label: {
      id: "Data Organisasi Masyarakat Ber-Surat Keterangan Terdaftar (SKT), 2024",
      en: "Registered Community Organizations (SKT), 2024"
    }
  },
  {
    kind: "image",
    src: "assets/img/dashboard/idi.png",
    label: {
      id: "Indeks Demokrasi Indonesia, 2021–2025",
      en: "Indonesian Democracy Index, 2021–2025"
    }
  }
],
      // Tautan aksi opsional (mis. profil Tableau Public). Kosongkan bila belum ada.
      links: [
        { type: "tableau", url: "", label: { id: "Profil Tableau Public", en: "Tableau Public profile" } }
      ]
    },
    {
      id: "kai-asset-dashboard",
      discipline: "data",
      org: "PT KAI (Individual Work)",
      title: { id: "Dashboard Aset Komersial Non-Angkutan PT KAI", en: "PT KAI Non-Transport Commercial Asset Dashboard" },
      type: { id: "Proyek Visualisasi Data", en: "Data Visualization Project" },
      summary: {
        id: "Dashboard interaktif untuk memvisualisasikan dan memantau aset komersial non-angkutan di Stasiun Solo Balapan, dengan filter dan KPI untuk mendukung komersialisasi dan pengambilan keputusan berbasis data.",
        en: "Interactive dashboard to visualize and monitor non-transport commercial assets at Solo Balapan Station, with filters and KPIs supporting commercialization and data-driven decisions."
      },
      tools: ["Tableau", "Microsoft Excel"],
      impact: { id: "Meningkatkan aksesibilitas informasi aset & mendukung monitoring berbasis data.",
                en: "Improved asset information accessibility & supported data-driven monitoring." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/solo.png", label: { id: "Dashboard Aset Komersial", en: "Commercial Asset Dashboard" } }
      ]
    },
    {
      id: "iksjig",
      discipline: "data",
      org: "Kemenko Polkam RI",
      title: { id: "Asesmen Kinerja Kelembagaan (IKSJIG)", en: "Institutional Performance Assessment (IKSJIG)" },
      type: { id: "Monitoring & Evaluasi · Gap Analysis", en: "Monitoring & Evaluation · Gap Analysis" },
      summary: {
        id: "Asesmen kesiapan kelembagaan dan analisis kesenjangan untuk Indeks Kinerja Simpul Jaringan Informasi Geospasial, dengan rekomendasi peningkatan kinerja dan kepatuhan terhadap standar nasional.",
        en: "Institutional readiness assessment and gap analysis for the Geospatial Information Network Node Performance Index, with recommendations to improve performance and compliance with national standards."
      },
      tools: ["Microsoft Excel", "QGIS", "Canva"],
      impact: { id: "Mendukung peningkatan kinerja kelembagaan & kesiapan asesmen IKSJIG 2026.",
                en: "Supported institutional performance improvement & readiness for the 2026 IKSJIG assessment." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/iksjig.png", label: { id: "Cuplikan Laporan Asesmen", en: "Assessment Report (excerpt)" } }
      ]
    },

    /* ===== DATA GOVERNANCE (both) ===== */
    {
      id: "data-governance-idi",
      discipline: "both", featured: true,
      org: "Kemenko Polkam RI",
      title: { id: "Tata Kelola Data Geospasial (Dataset IDI)", en: "Geospatial Data Governance (IDI Datasets)" },
      type: { id: "Data Governance · Metadata · QC/QA/QE", en: "Data Governance · Metadata · QC/QA/QE" },
      summary: {
        id: "Dokumentasi tata kelola data geospasial untuk Indeks Demokrasi Indonesia: SOP siklus hidup data, Spesifikasi Produk Data (SPD), metadata ISO 19115 (CatMDEdit), dan kerangka QC/QE/QA — untuk standardisasi, penjaminan mutu, dan interoperabilitas menuju integrasi Geoportal.",
        en: "Geospatial data governance documentation for the Indonesian Democracy Index: data-lifecycle SOP, Data Product Specifications (SPD), ISO 19115 metadata (CatMDEdit), and a QC/QE/QA framework — for standardization, quality assurance, and interoperability toward Geoportal integration."
      },
      tools: ["CatMDEdit", "Microsoft Excel", "QGIS"],
      impact: { id: "Meningkatkan standardisasi, manajemen mutu, dan interoperabilitas dataset IDI untuk integrasi data pemerintah (IKSJIG 2026).",
                en: "Improved standardization, quality management, and interoperability of IDI datasets for government data integration (IKSJIG 2026)." },
      evidence: [
        { kind: "doc", src: "assets/img/docs/sop.png", label: { id: "Cuplikan Standar Operasional Prosedur", en: "Data Lifecycle SOP (excerpt)" } },
        { kind: "doc", src: "assets/img/docs/spd.png", label: { id: "Cuplikan Spesifikasi Produk Data", en: "Data Product Specification (excerpt)" } },
        { kind: "doc", src: "assets/img/docs/metadata.png", label: { id: "Cuplikan Metadata ISO 19115", en: "ISO 19115 Metadata" } },
        { kind: "doc", src: "assets/img/docs/qc.png", label: { id: "Cuplikan Quality Control (QC)", en: "Quality Control (QC)" } },
         { kind: "doc", src: "assets/img/docs/qe.png", label: { id: "Cuplikan Quality Evaluation (QE)", en: "Quality Evaluation (QE)" } },
          { kind: "doc", src: "assets/img/docs/qa.png", label: { id: "Cuplikan Quality Assurance (QA)", en: "Quality Assurance (QA)" } }
      ]
    },

    /* ===== GIS / SPATIAL ANALYSIS ===== */
    {
      id: "kemenko-spatial",
      discipline: "gis", featured: true,
      org: "Kemenko Polkam RI",
      title: { id: "Pemrosesan Data Geospasial & Analisis Spasial Nasional", en: "National Geospatial Processing & Spatial Analysis" },
      type: { id: "GIS · Analisis Spasial · Pemetaan Tematik", en: "GIS · Spatial Analysis · Thematic Mapping" },
      summary: {
        id: "Pemrosesan, integrasi, dan analisis dataset geospasial & sosial-politik nasional untuk mendukung analisis kebijakan berbasis bukti. Menghasilkan peta tematik IDI, IKKEPP, IKUB, IKPN, IKP, kepadatan penduduk, konflik sosial, ormas terdaftar (SKT), dan infrastruktur telekomunikasi.",
        en: "Processing, integration, and analysis of national geospatial & socio-political datasets to support evidence-based policy analysis. Produced thematic maps for IDI, IKKEPP, IKUB, IKPN, IKP, population density, social conflict, registered CSOs (SKT), and telecom infrastructure."
      },
      tools: ["QGIS", "Microsoft Excel"],
      impact: { id: "Meningkatkan aksesibilitas & interoperabilitas informasi geospasial nasional untuk kolaborasi lintas lembaga.",
                en: "Improved accessibility & interoperability of national geospatial information for cross-agency collaboration." },
      evidence: [
        { kind: "map", src: "assets/img/maps/idi.png", label: { id: "Peta Tematik IDI", en: "IDI Thematic Map" } },
        { kind: "map", src: "assets/img/maps/konflik.png", label: { id: "Peta Konflik Sosial", en: "Social Conflict Map" } }
      ]
    },
    {
      id: "kai-region64",
      discipline: "gis",
      org: "PT KAI DAOP 6 — Region 6.4",
      title: { id: "Pemetaan Aset Rel & Manajemen Data Spasial", en: "Railway Asset Mapping & Spatial Data Management" },
      type: { id: "GIS · Manajemen Aset · Sertifikasi", en: "GIS · Asset Management · Certification" },
      summary: {
        id: "Pemrosesan & validasi data aset lahan rel di 9 segmen (Kebon Polo, Grabag, Tegalsari, Secang, Kranggan, Kertosari, Mojotengah, Payaman, Jambewangi). 5 peta tematik per area (sertifikasi, komersialisasi, patok batas, tata guna lahan, aset bermasalah) + lampiran & laporan analisis spasial.",
        en: "Processing & validation of railway land-asset data across 9 segments. Five thematic maps per area (certification, commercialization, boundary markers, land use, problematic assets) plus documentation appendices & a spatial analysis report."
      },
      tools: ["QGIS", "Microsoft Excel"],
      impact: { id: "Meningkatkan akurasi & konsistensi data aset rel untuk sertifikasi dan perencanaan pemanfaatan lahan.",
                en: "Improved accuracy & consistency of railway asset data for certification and land-use planning." },
      evidence: [
        { kind: "map", src: "assets/img/maps/kna.png", label: { id: "Peta Tematik Aset Rel", en: "Railway Asset Thematic Map" } }
      ]
    },
    {
      id: "kai-geodetic",
      discipline: "gis",
      org: "PT KAI DAOP 6",
      title: { id: "Survei Batas Aset GNSS (Solo Balapan, Klaten, Purwosari, Palur)", en: "GNSS Asset Boundary Surveys" },
      type: { id: "Survei Geodesi · GNSS · Georeferencing", en: "Geodetic Survey · GNSS · Georeferencing" },
      summary: {
        id: "Survei batas aset rel & non-rel berbasis GNSS RTK, integrasi dengan Grondkaart melalui georeferensi, validasi akurasi peta, digitasi fitur aset, serta produksi peta tematik untuk mendukung sertifikasi lahan dan manajemen aset.",
        en: "GNSS RTK boundary surveys of railway & non-railway assets, integration with historical Grondkaart via georeferencing, map-accuracy validation, feature digitizing, and thematic-map production supporting land certification and asset management."
      },
      tools: ["GNSS RTK", "ArcGIS", "QGIS", "AutoCAD", "Microsoft Excel"],
      impact: { id: "Mendukung sertifikasi aset rel melalui data batas tervalidasi & integrasi rekaman Grondkaart historis.",
                en: "Supported railway asset certification via validated boundary data & integration of historical Grondkaart records." },
      evidence: [
        { kind: "map", src: "assets/img/maps/klaten.png", label: { id: "Georeferensi Grondkaart", en: "Grondkaart Georeferencing" } }
      ]
    },

    /* ===== WEBGIS ===== */
    {
      id: "webgis-national",
      discipline: "gis", featured: true,
      org: "Kemenko Polkam RI",
      title: { id: "WebGIS Nasional — Konektivitas Digital & Demokrasi", en: "National WebGIS — Digital Connectivity & Democracy" },
      type: { id: "WebGIS · Full-Stack · Basis Data Spasial", en: "WebGIS · Full-Stack · Spatial Database" },
      summary: {
        id: "WebGIS nasional yang mengintegrasikan indikator demokrasi (IDI), infrastruktur BTS, dan cakupan sinyal 2G/3G/4G/5G untuk analisis spasial konektivitas digital dan perkembangan demokrasi di seluruh Indonesia.",
        en: "National WebGIS integrating democracy indicators (IDI), BTS infrastructure, and 2G/3G/4G/5G signal coverage for spatial analysis of digital connectivity and democratic development across Indonesia."
      },
      tools: ["PostgreSQL", "PostGIS", "QGIS", "PHP", "JavaScript", "Leaflet JS"],
      impact: { id: "Memungkinkan analisis spasial interaktif & meningkatkan akses informasi geospasial nasional untuk evaluasi kebijakan.",
                en: "Enabled interactive spatial analysis & improved access to national geospatial information for policy evaluation." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/idicoverage.png", label: { id: "Tampilan Peta IDI + BTS + Cakupan Sinyal", en: "IDI + BTS + Signal Coverage View" } }
      ]
    },
    {
      id: "webgis-sitijo",
      discipline: "gis",
      org: "PT Total Geo Survey — DPUPKP Kota Yogyakarta",
      title: { id: "WebGIS SITIJO — Sistem Informasi Infrastruktur 2D", en: "WebGIS SITIJO — 2D Infrastructure Information System" },
      type: { id: "WebGIS · 11 Layer Infrastruktur Kota", en: "WebGIS · 11 Urban Infrastructure Layers" },
      summary: {
        id: "Platform WebGIS untuk mengelola & memvisualisasikan 11 layer infrastruktur kota (jalan, bangunan, halte, drainase, jaringan fiber-optik, air limbah, listrik, air bersih) dengan integrasi basis data, filter, dan interaksi peta.",
        en: "WebGIS platform to manage & visualize 11 urban infrastructure layers (roads, buildings, bus shelters, drainage, fiber-optic, wastewater, electricity, water supply) with database integration, filtering, and map interaction."
      },
      tools: ["HTML", "PHP", "CSS", "JavaScript", "MySQL", "Leaflet JS", "Bootstrap"],
      impact: { id: "Meningkatkan aksesibilitas & kegunaan data infrastruktur untuk perencanaan dan monitoring tingkat kota.",
                en: "Improved accessibility & usability of infrastructure data for city-level planning and monitoring." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/sitijo.png", label: { id: "Tampilan Peta 2D SITIJO", en: "SITIJO 2D Map View" } }
      ]
    },
    {
      id: "webgis-lintas",
      discipline: "gis",
      org: "PT Total Geo Survey — DPUPKP Kota Yogyakarta",
      title: { id: "WebGIS LINTAS — Visualisasi 3D Jembatan", en: "WebGIS LINTAS — 3D Bridge Visualization" },
      type: { id: "WebGIS 3D · Cesium JS", en: "3D WebGIS · Cesium JS" },
      summary: {
        id: "Platform WebGIS 3D untuk memvisualisasikan struktur enam jembatan beserta lingkungannya menggunakan Cesium JS, mendukung analisis dan perencanaan infrastruktur.",
        en: "3D WebGIS platform visualizing six bridge structures and their surroundings using Cesium JS, supporting infrastructure analysis and planning."
      },
      tools: ["HTML", "PHP", "CSS", "JavaScript", "MySQL", "Cesium JS", "Bootstrap"],
      impact: { id: "Meningkatkan pemahaman spasial kondisi jembatan melalui visualisasi 3D untuk manajemen aset.",
                en: "Enhanced spatial understanding of bridge conditions via 3D visualization for asset management." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/lintas.png", label: { id: "Visualisasi 3D Jembatan", en: "3D Bridge Visualization" } }
      ]
    },
    {
      id: "webgis-siakna",
      discipline: "gis",
      org: "Tugas Akhir / Skripsi",
      title: { id: "WebGIS SIAKNA — Sistem Informasi Aset Komersial (Skripsi)", en: "WebGIS SIAKNA — Commercial Asset System (Thesis)" },
      type: { id: "Full-Stack WebGIS · Tugas Akhir", en: "Full-Stack WebGIS · Undergraduate Thesis" },
      summary: {
        id: "Aplikasi WebGIS full-stack untuk mengelola & memvisualisasikan aset komersial non-angkutan PT KAI di Stasiun Solo Balapan. Mengintegrasikan data spasial & atribut, CRUD aset, pencarian & filter, serta platform promosi aset untuk penyewaan.",
        en: "Full-stack WebGIS to manage & visualize PT KAI's non-transport commercial assets at Solo Balapan Station. Integrates spatial & attribute data, asset CRUD, search & filter, and a promotion platform for leasing."
      },
      tools: ["QGIS", "HTML", "PHP", "JavaScript", "CSS", "Bootstrap", "Leaflet JS", "MySQL"],
      impact: { id: "Mendigitalkan manajemen informasi aset & mendemonstrasikan integrasi GIS, web, dan basis data dalam satu sistem.",
                en: "Digitalized asset information management & demonstrated integration of GIS, web, and database into one system." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/siakna.png", label: { id: "Tampilan Peta & Info Aset", en: "Map & Asset Info View" } }
      ]
    },
    {
      id: "webgis-mejing",
      discipline: "gis",
      org: "KKN-PPM UGM",
      title: { id: "WebGIS Master Plan Desa Wisata Mejing Talun", en: "WebGIS Mejing Talun Tourism Village Master Plan" },
      type: { id: "WebGIS · 2D + 3D · Pengabdian Masyarakat", en: "WebGIS · 2D + 3D · Community Service" },
      summary: {
        id: "Prototipe WebGIS untuk mendukung master plan desa wisata dengan mengintegrasikan data geospasial 2D dan visualisasi model 3D untuk perencanaan pariwisata dan diseminasi informasi spasial.",
        en: "WebGIS prototype supporting a tourism-village master plan by integrating 2D geospatial data with 3D model visualization for tourism planning and spatial information dissemination."
      },
      tools: ["QGIS", "HTML", "PHP", "JavaScript", "CSS", "Bootstrap", "Leaflet JS", "SketchUp"],
      impact: { id: "Meningkatkan visualisasi spasial & aksesibilitas informasi untuk pengembangan desa wisata.",
                en: "Improved spatial visualization & information accessibility for tourism-village development." },
      evidence: [
        { kind: "image", src: "assets/img/dashboard/mejing.png", label: { id: "Prototipe WebGIS Desa Wisata", en: "Tourism Village WebGIS Prototype" } }
      ]
    }
  ],

 /* --------------------------------------- MAP GALLERY -------- */
mapGallery: [

  {
    category: {
      id: "Pemetaan Terestris",
      en: "Terrestrial Survey Mapping"
    },

    description: {
      id: "Produk kartografi hasil survei terestris untuk perencanaan jalan.",
      en: "Cartographic outputs from terrestrial surveys for road planning."
    },

    tools: [
      "QGIS",
      "AutoCAD Civil 3D",
      "Microsoft Excel"
    ],

    outputs: [
      {
  src: "assets/img/maps/horizontal.png",
  title: {
    id: "Peta Desain Lengkung Horizontal (Jalan)",
    en: "Horizontal Road Alignment Design"
  }
},
{
  src: "assets/img/maps/vertikal.png",
  title: {
    id: "Peta Desain Lengkung Vertikal Overpass (Jalan)",
    en: "Vertical Road Alignment Design (Overpass)"
  }
},
{
  src: "assets/img/maps/topografi.png",
  title: {
    id: "Peta Topografi",
    en: "Topographic Map"
  }
}
    ]
  },
{
  category: {
    id: "Pemetaan Pertambangan",
    en: "Mining Survey Mapping"
  },

  description: {
    id: "Produk kartografi untuk eksplorasi dan perencanaan tambang.",
    en: "Cartographic products for mining exploration and mine planning."
  },

  tools: [
    "Surpac"
  ],

  outputs: [
    {
      src: "assets/img/maps/sebaran.png",
      title: {
        id: "Peta Sebaran Titik Bor",
        en: "Drillhole Distribution Map"
      }
    },
    {
      src: "assets/img/maps/jalan.png",
      title: {
        id: "Peta Rencana Jalan Tambang",
        en: "Mine Haul Road Plan"
      }
    },
    {
      src: "assets/img/maps/floor.png",
      title: {
        id: "Peta Kontur Struktur Floor Seam A",
        en: "Floor Structure Contour Map (Seam A)"
      }
    },
    {
      src: "assets/img/maps/roof.png",
      title: {
        id: "Peta Kontur Struktur Roof Seam A",
        en: "Roof Structure Contour Map (Seam A)"
      }
    }
  ]
},
  {
    category: {
      id: "Pemetaan Hidrografi",
      en: "Hydrographic Survey Mapping"
    },

    description: {
  id: "Produk kartografi batimetri hasil survei hidrografi.",
  en: "Bathymetric maps produced from hydrographic surveys."
},

    tools: [
      "QGIS"
    ],

    outputs: [
  {
    src: "assets/img/maps/sermo.png",
    title: {
      id: "Peta Batimetri Waduk Sermo, Kabupaten Kulon Progo",
      en: "Bathymetric Map of Sermo Reservoir, Kulon Progo Regency"
    }
  },
  {
    src: "assets/img/maps/pelabuhan.png",
    title: {
      id: "Peta Batimetri Pelabuhan Cigading, Serang",
      en: "Bathymetric Map of Cigading Port, Serang"
    }
  }
]
  },

  {
    category: {
      id: "Sistem Informasi Geografis (SIG)",
      en: "Geographic Information System (GIS)"
    },

    description: {
  id: "Peta hasil analisis spasial untuk mitigasi bencana, perencanaan wilayah, dan pengelolaan sumber daya.",
  en: "Spatial analysis maps for disaster mitigation, regional planning, and resource management."
},

    tools: [
      "QGIS",
      "ArcGIS"
    ],

    outputs: [
  {
    src: "assets/img/maps/risiko.png",
    title: {
      id: "Peta Risiko Bencana Kebakaran Hutan Kabupaten Bogor",
      en: "Forest Fire Risk Map of Bogor Regency"
    }
  },
  {
    src: "assets/img/maps/bahaya.png",
    title: {
      id: "Peta Bahaya Tanah Longsor, Kecamatan Bandungan, Kabupaten Semarang",
      en: "Landslide Hazard Map of Bandungan District, Semarang Regency"
    }
  },
  {
    src: "assets/img/maps/bendungan.png",
    title: {
      id: "Peta Lokasi Alternatif Pembangunan Bendungan",
      en: "Alternative Dam Site Selection Map"
    }
  },
  {
      src: "assets/img/maps/lahan.png",
      title: {
        id: "Peta Penutup dan Penggunaan Lahan Kalurahan Wonolelo",
        en: "Land Cover and Land Use Map of Wonolelo Village"
      }
  },
  {
      src: "assets/img/maps/sarana.png",
      title: {
        id: "Peta Sarana dan Prasarana Kalurahan Wonolelo",
        en: "Public Facilities and Infrastructure Map of Wonolelo Village"
      }
  },
  {
      src: "assets/img/maps/citra.png",
      title: {
        id: "Peta Citra Kalurahan Wonolelo",
        en: "Satellite Imagery Map of Wonolelo Village"
      }
  },
  {
      src: "assets/img/maps/mejing.png",
      title: {
        id: "Peta Rencana Pengembangan Wisata Dusun Mejing, Desa Duren, Kecamatan Bandungan, Kabupaten Semarang",
        en: "Tourism Development Plan Map for Mejing Hamlet, Duren Village, Bandungan District, Semarang Regency"
      }
  }
]
  }

],

  /* --------------------------------------------------------- SERTIFIKASI --- */
  certifications: [
    { name: "Data Analyst (BNSP)", issuer: "BNSP", year: "2026", discipline: "data" },
    { name: "Fundamental of Data Analyst", issuer: "DQLab × Digital Talent Academy (Komdigi)", year: "2026", discipline: "data" },
    { name: "Associate Data Scientist + Python", issuer: "Digital Talent Academy (Komdigi)", year: "2026", discipline: "data" },
    { name: "Data Scientist Supervisor", issuer: "Digital Talent Academy (Komdigi)", year: "2026", discipline: "data" },
    { name: "Full-Stack Development", issuer: "Digital Talent Academy (Komdigi)", year: "2026", discipline: "gis" },
    { name: "Intermediate Assistant Web Developer", issuer: "Digital Talent Academy (Komdigi)", year: "2026", discipline: "gis" },
    { name: "Google AI Essentials", issuer: "Google × Coursera", year: "2026", discipline: "data" },
    { name: "Getting Started with Imagery & Remote Sensing", issuer: "ESRI Training", year: "2025", discipline: "gis" }
  ],

  /* ---------------------------------------------------------- TESTIMONI ---- */
  /* GANTI dengan kutipan asli dari dosen pembimbing / atasan magang bila sudah ada.
     Foto opsional: taruh di assets/img/people/ lalu isi 'photo'. Kosongkan untuk
     menampilkan inisial otomatis. */
  testimonials: [
    {
      quote: {
        id: "Wahyu cepat memahami kebutuhan data kami dan menerjemahkannya menjadi peta serta dashboard yang jelas. Teliti, mandiri, dan enak diajak berkoordinasi.",
        en: "Wahyu quickly grasped our data needs and translated them into clear maps and dashboards. Thorough, independent, and easy to coordinate with."
      },
      name: "— (Nama pemberi testimoni)",
      role: { id: "Jabatan · Institusi", en: "Title · Institution" },
      photo: ""
    },
    {
      quote: {
        id: "Kemampuannya menjembatani sisi teknis geospasial dengan analisis data membuat hasil pekerjaannya mudah dipakai oleh pengambil keputusan.",
        en: "Her ability to bridge the technical geospatial side with data analysis makes her work easy for decision-makers to use."
      },
      name: "— (Nama pemberi testimoni)",
      role: { id: "Jabatan · Institusi", en: "Title · Institution" },
      photo: ""
    },
    {
      quote: {
        id: "Hasil WebGIS dan dokumentasi tata kelola datanya rapi dan sesuai standar. Sangat membantu proses integrasi data kami.",
        en: "Her WebGIS deliverables and data-governance documentation were tidy and standards-compliant. It greatly helped our data integration process."
      },
      name: "— (Nama pemberi testimoni)",
      role: { id: "Jabatan · Institusi", en: "Title · Institution" },
      photo: ""
    }
  ]
};
