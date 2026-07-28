// assets/js/app.js
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'id';
    let currentRole = 'combined'; // 'combined', 'data', 'gis'

    // DOM Elements
    const elements = {
        langToggle: document.getElementById('lang-toggle'),
        roleButtons: document.querySelectorAll('.role-btn'),
        body: document.body,
        hamburger: document.getElementById('hamburger-btn'),
        mobileNav: document.getElementById('nav-links'),
        portfolioGrid: document.getElementById('portfolio-grid'),
        skillsGrid: document.getElementById('skills-grid'),
        statsGrid: document.getElementById('stats-grid'),
        modal: document.getElementById('project-modal'),
        modalClose: document.getElementById('modal-close')
    };

    // Initialize
    function init() {
        renderStaticText();
        renderSkills();
        renderStats();
        renderPortfolio();
        setupEventListeners();
        initScrollAnimations();
    }

    // Toggle Language
    function toggleLang() {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        elements.langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
        renderStaticText();
        renderSkills();
        renderStats();
        renderPortfolio();
    }

    // Render Static Texts based on data-i18n
    function renderStaticText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let data = portfolioData;
            keys.forEach(k => { if(data) data = data[k]; });
            if (data && data[currentLang]) {
                el.textContent = data[currentLang];
            }
        });
        document.title = portfolioData.site.title;
    }

    // Render Skills (Filtered)
    function renderSkills() {
        elements.skillsGrid.innerHTML = '';
        portfolioData.about.skills.forEach(skill => {
            if (currentRole === 'combined' || skill.role === currentRole) {
                const tag = document.createElement('span');
                tag.className = 'skill-tag slide-up';
                tag.textContent = skill.name;
                elements.skillsGrid.appendChild(tag);
            }
        });
    }

    // Render Stats (Filtered & Count Animation)
    function renderStats() {
        elements.statsGrid.innerHTML = '';
        portfolioData.hero.stats.forEach(stat => {
            if (currentRole === 'combined' || stat.role === currentRole) {
                const card = document.createElement('div');
                card.className = 'stat-card fade-in';
                card.innerHTML = `
                    <div class="stat-number" data-target="${stat.value}">0</div>
                    <div class="stat-label">${stat.label[currentLang]}</div>
                `;
                elements.statsGrid.appendChild(card);
            }
        });
        animateNumbers();
    }

    // Render Portfolio Cards
    function renderPortfolio() {
        elements.portfolioGrid.innerHTML = '';
        portfolioData.portfolio.forEach(item => {
            if (currentRole === 'combined' || item.role === currentRole) {
                const card = document.createElement('div');
                card.className = 'portfolio-card fade-in';
                const roleBadgeClass = item.role === 'data' ? 'badge-data' : 'badge-gis';
                const roleName = item.role === 'data' ? 'Data Analyst' : 'GIS';
                
                card.innerHTML = `
                    <div class="card-content">
                        <span class="badge ${roleBadgeClass}">${roleName}</span>
                        <h3>${item.title[currentLang]}</h3>
                        <p>${item.summary[currentLang]}</p>
                        <div class="card-tools">
                            ${item.tools.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openModal(item));
                elements.portfolioGrid.appendChild(card);
            }
        });
    }

    // Change Role Theme
    function setRole(role) {
        currentRole = role;
        elements.body.className = `theme-${role}`;
        
        elements.roleButtons.forEach(btn => {
            if(btn.dataset.role === role) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        renderSkills();
        renderStats();
        renderPortfolio();
        initScrollAnimations();
    }

    // Number counting animation
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-number');
        numbers.forEach(num => {
            const target = +num.getAttribute('data-target');
            let count = 0;
            const inc = target / 30; // speed
            const updateCount = () => {
                count += inc;
                if (count < target) {
                    num.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    num.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Modal Logic
    function openModal(item) {
        const content = document.getElementById('modal-dynamic-content');
        let proofHTML = '';

        if(item.proof.type === 'tableau') {
            proofHTML = `<div class="iframe-container"><iframe src="${item.proof.url}" frameborder="0" allowfullscreen></iframe></div>`;
        } else {
            const watermarkClass = item.proof.watermark ? 'watermarked' : '';
            proofHTML = `
                <div class="image-proof ${watermarkClass}">
                    <img src="${item.proof.url}" alt="${item.title[currentLang]}" />
                </div>
            `;
        }

        content.innerHTML = `
            <h2>${item.title[currentLang]}</h2>
            <p><strong>Impact:</strong> ${item.impact[currentLang]}</p>
            <div class="modal-proof">
                <h3>Bukti Dukung / Evidence</h3>
                ${proofHTML}
            </div>
        `;
        elements.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        elements.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.getElementById('modal-dynamic-content').innerHTML = ''; // clear iframe
    }

    // Scroll Animations
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));
    }

    // Event Listeners Registration
    function setupEventListeners() {
        elements.langToggle.addEventListener('click', toggleLang);
        
        elements.roleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => setRole(e.target.dataset.role));
        });

        elements.hamburger.addEventListener('click', () => {
            elements.mobileNav.classList.toggle('active');
        });

        elements.modalClose.addEventListener('click', closeModal);
        elements.modal.addEventListener('click', (e) => {
            if(e.target === elements.modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && elements.modal.classList.contains('active')) closeModal();
        });
    }

    init();
});