// assets/js/data.js
const portfolioData = {
    site: {
        name: "Wahyu Cahyaningrum",
        title: "Portfolio | Wahyu Cahyaningrum Kusumawati"
    },
    nav: {
        about: { id: "Tentang", en: "About" },
        experience: { id: "Pengalaman", en: "Experience" },
        portfolio: { id: "Portofolio", en: "Portfolio" },
        contact: { id: "Kontak", en: "Contact" },
        cv_id: "Unduh CV (ID)",
        cv_en: "Download CV (EN)"
    },
    hero: {
        greeting: { id: "Halo, saya", en: "Hello, I'm" },
        name: "Wahyu Cahyaningrum Kusumawati",
        tagline: { 
            id: "Menjembatani analitik data dan rekayasa geospasial menjadi wawasan & alat bantu pengambilan keputusan.", 
            en: "Bridging data analytics and geospatial engineering into insights & decision-making tools." 
        },
        roles: {
            combined: { id: "Gabungan", en: "Combined" },
            data: { id: "Data Analyst", en: "Data Analyst" },
            gis: { id: "GIS & WebGIS", en: "GIS & WebGIS" }
        },
        stats: [
            { value: 19, label: { id: "Dashboard Polkam", en: "Polkam Dashboards" }, role: "data" },
            { value: 50, label: { id: "Peta Tematik Nasional", en: "National Thematic Maps" }, role: "gis" },
            { value: 4, label: { id: "Aplikasi WebGIS", en: "WebGIS Apps" }, role: "gis" },
            { value: 2, label: { id: "Sistem Tata Kelola", en: "Governance Systems" }, role: "data" }
        ]
    },
    about: {
        title: { id: "Tentang Saya", en: "About Me" },
        description: { 
            id: "Lulusan Teknik Geodesi, Universitas Gadjah Mada (GPA 3.53). Saya memiliki keahlian ganda yang seimbang di bidang Analisis Data dan Sistem Informasi Geografis (GIS). Berpengalaman dalam merancang tata kelola data pemerintahan dan mengembangkan WebGIS untuk pemetaan infrastruktur komersial.", 
            en: "Geodetic Engineering graduate from Universitas Gadjah Mada (GPA 3.53). I possess a balanced dual expertise in Data Analysis and Geographic Information Systems (GIS). Experienced in designing government data governance and developing WebGIS for commercial infrastructure mapping." 
        },
        skills_title: { id: "Kompetensi Inti", en: "Core Competencies" },
        skills: [
            { name: "Dashboard & Business Intelligence", role: "data" },
            { name: "Data Governance (ISO 19115)", role: "data" },
            { name: "Analisis Statistik & QC/QA/QE", role: "data" },
            { name: "Analisis Spasial", role: "gis" },
            { name: "Pengembangan WebGIS", role: "gis" },
            { name: "Survei Geodesi (GNSS)", role: "gis" }
        ]
    },
    portfolio: [
        {
            id: "polkam",
            role: "data",
            title: { id: "Dashboard Sosial-Politik Kemenko Polkam", en: "Socio-Political Dashboard Kemenko Polkam" },
            summary: { 
                id: "Pengembangan 19 dashboard interaktif untuk memonitor isu sosial-politik dan infrastruktur nasional.", 
                en: "Development of 19 interactive dashboards to monitor national socio-political and infrastructure issues." 
            },
            impact: { id: "Meningkatkan kecepatan perumusan kebijakan berbasis data.", en: "Accelerated data-driven policy formulation." },
            tools: ["Tableau", "Data Governance", "Analisis Statistik"],
            proof: { type: "tableau", url: "https://public.tableau.com/views/placeholder", watermark: false }
        },
        {
            id: "kai-asset",
            role: "gis",
            title: { id: "Pemetaan Aset & Dashboard PT KAI", en: "Asset Mapping & Dashboard PT KAI" },
            summary: { 
                id: "Visualisasi aset rel komersial PT KAI dalam bentuk peta tematik dan dashboard operasional.", 
                en: "Visualization of PT KAI's commercial rail assets in thematic maps and operational dashboards." 
            },
            impact: { id: "Optimalisasi pemantauan aset komersial.", en: "Optimized monitoring of commercial assets." },
            tools: ["QGIS", "Tableau", "Analisis Spasial"],
            proof: { type: "image", url: "assets/img/placeholder-kai.jpg", watermark: true } // Watermark aktif untuk data sensitif (dummy)
        },
        {
            id: "webgis-lintas",
            role: "gis",
            title: { id: "WebGIS LINTAS (3D)", en: "LINTAS WebGIS (3D)" },
            summary: { 
                id: "Aplikasi pemetaan 3D interaktif untuk visualisasi data spasial wilayah.", 
                en: "Interactive 3D mapping application for spatial data visualization." 
            },
            impact: { id: "Eksplorasi data spasial lebih imersif.", en: "More immersive spatial data exploration." },
            tools: ["JavaScript", "WebGIS", "Mapbox/Cesium"],
            proof: { type: "image", url: "assets/img/placeholder-lintas.jpg", watermark: false }
        },
        {
            id: "idi-governance",
            role: "data",
            title: { id: "Tata Kelola Data Geospasial IDI", en: "IDI Geospatial Data Governance" },
            summary: { 
                id: "Penyusunan SOP, metadata ISO 19115, dan proses QC/QA/QE untuk Indeks Demokrasi Indonesia.", 
                en: "Development of SOPs, ISO 19115 metadata, and QC/QA/QE processes for the Indonesian Democracy Index." 
            },
            impact: { id: "Standardisasi data geospasial nasional.", en: "Standardization of national geospatial data." },
            tools: ["ISO 19115", "Data Governance", "SOP"],
            proof: { type: "document", url: "assets/img/placeholder-doc.jpg", watermark: false }
        }
    ],
    footer: {
        text: { id: "Didesain & Dibangun secara mandiri oleh Wahyu Cahyaningrum Kusumawati.", en: "Designed & Built independently by Wahyu Cahyaningrum Kusumawati." }
    }
};