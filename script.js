/* ============================================================
   SCRIPT.JS — Arul Satriaji Business Portfolio
============================================================ */
 
document.addEventListener('DOMContentLoaded', function () {
 
  /* 1. ANIMASI SCROLL */
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
  const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  animatedElements.forEach((el) => scrollObserver.observe(el));
 
  /* 2. TUTUP OFFCANVAS (Mobile) */
  const offcanvasLinks = document.querySelectorAll('.offcanvas .nav-link');
  offcanvasLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const offcanvasEl = document.getElementById('offcanvasNavbar');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (offcanvasInstance) offcanvasInstance.hide();
    });
  });
 
  /* 3. DARK MODE TOGGLE */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = document.getElementById('themeIcon');
  const htmlEl      = document.documentElement;
 
  if (localStorage.getItem('theme') === 'dark') {
    htmlEl.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    themeToggle.classList.replace('btn-outline-secondary', 'btn-outline-warning');
  }
 
  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-bs-theme') === 'dark';
    if (isDark) {
      htmlEl.setAttribute('data-bs-theme', 'light');
      themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      themeToggle.classList.replace('btn-outline-warning', 'btn-outline-secondary');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.setAttribute('data-bs-theme', 'dark');
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      themeToggle.classList.replace('btn-outline-secondary', 'btn-outline-warning');
      localStorage.setItem('theme', 'dark');
    }
  });
 
  /* 4. BILINGUAL — INDONESIA / ENGLISH */
  const translations = {
    id: {
      nav_home     : 'Beranda',
      nav_about    : 'Tentang',
      nav_services : 'Layanan',
      nav_skills   : 'Keahlian',
      nav_projects : 'Proyek',
      nav_gallery  : 'Galeri',
      nav_contact  : 'Kontak',
 
      hero_badge : 'Mitra Digital Bisnis Anda',
      hero_hello : 'Halo, Saya',
      hero_role  : 'Fullstack Web Developer & Digital Partner',
      hero_desc  : 'Saya membantu UMKM dan pelaku bisnis beradaptasi di era digital melalui pembuatan website yang modern, responsif, serta manajemen sosial media yang dirancang khusus untuk meningkatkan interaksi dan pertumbuhan audiens.',
      btn_work   : 'Solusi Bisnis',
      btn_contact: 'Konsultasi Gratis',
 
      profile_role: 'Fullstack Web Developer',
 
      about_p1   : 'Sebagai pengembang perangkat lunak dengan latar belakang Teknik Informatika, saya menggabungkan pemahaman teknis dengan kreativitas visual. Spesialisasi saya berada di Front-End Development dan implementasi Artificial Intelligence (AI) untuk memberikan solusi digital cerdas bagi bisnis.',
      about_p2   : 'Tujuan saya bukan sekadar menulis barisan kode, tetapi membangun aset digital—baik berupa website fungsional maupun kehadiran organik di sosial media—yang bernilai guna tinggi dan mendatangkan hasil nyata bagi klien dan audiens mereka.',
      edu_title  : 'Pendidikan',
      edu_desc   : 'S1 Teknik Informatika, Universitas Hamzanwadi',
      focus_title: 'Fokus',
      focus_desc : 'Digitalisasi UMKM & Web Development',
      tools_title: 'Alat Kerja',
      tools_desc : 'VS Code, Figma, Bootstrap, Platform AI, Canva',
      goal_title : 'Tujuan',
      goal_desc  : 'Meningkatkan skala bisnis klien ke ranah digital',

      services_sub    : 'Solusi digital komprehensif yang dirancang khusus untuk membantu bisnis dan UMKM Anda berkembang secara online.',
      srv_web_title   : 'Pembuatan Website UMKM',
      srv_web_desc    : 'Pengembangan website company profile dan toko online yang modern, responsif di semua perangkat, cepat, dan dioptimasi.',
      srv_sosmed_title: 'Manajemen Sosial Media',
      srv_sosmed_desc : 'Pembuatan strategi konten, desain visual, hingga kurasi video pendek (Reels/TikTok) untuk meningkatkan konversi audiens.',
      srv_uiux_title  : 'Desain UI/UX',
      srv_uiux_desc   : 'Pembuatan purwarupa (prototyping) aplikasi di Figma untuk menciptakan pengalaman pengguna (user experience) yang intuitif.',
 
      skills_sub: 'Teknologi dan perangkat lunak standar industri yang saya gunakan.',
 
      projects_title      : 'Proyek Unggulan',
      proj_mooduit_desc   : 'MOODUIT adalah aplikasi pengatur keuangan inovatif yang ditenagai oleh kecerdasan buatan (AI) dan dibangun menggunakan React. Aplikasi ini dirancang untuk memudahkan manajemen arus kas dan analisis fundamental secara cerdas.',
      proj_cuantrack_desc : 'CuanTrack adalah aplikasi web manajemen keuangan dan penganggaran. Dibangun secara native menggunakan PHP murni, aplikasi ini berfokus pada pencatatan data arus kas yang akurat, cepat, dan aman tanpa integrasi AI.',
      btn_view            : 'Lihat Proyek',
 
      gallery_title: 'Sertifikat & Galeri',
      gallery_sub  : 'Kumpulan sertifikat dan validasi keahlian teknis saya.',
 
      contact_sub: 'Siap mendigitalkan bisnis Anda? Jangan ragu untuk menghubungi saya untuk konsultasi.'
    },
 
    en: {
      nav_home     : 'Home',
      nav_about    : 'About',
      nav_services : 'Services',
      nav_skills   : 'Skills',
      nav_projects : 'Projects',
      nav_gallery  : 'Gallery',
      nav_contact  : 'Contact',
 
      hero_badge : 'Your Digital Business Partner',
      hero_hello : "Hello, I'm",
      hero_role  : 'Fullstack Web Developer & Digital Partner',
      hero_desc  : 'I help MSMEs and businesses adapt to the digital era through modern, responsive website development and specialized social media management designed to boost interaction and audience growth.',
      btn_work   : 'Business Solutions',
      btn_contact: 'Free Consultation',
 
      profile_role: 'Fullstack Web Developer',
 
      about_p1   : 'As a software developer with a background in Informatics Engineering, I combine technical understanding with visual creativity. My specialization lies in Front-End Development and the implementation of Artificial Intelligence (AI) to provide smart digital solutions for businesses.',
      about_p2   : 'My goal is not just to write lines of code, but to build digital assets—whether it be a functional website or an organic presence on social media—that are highly useful and generate real results for clients and their audiences.',
      edu_title  : 'Education',
      edu_desc   : 'Bachelor of Informatics Engineering, Universitas Hamzanwadi',
      focus_title: 'Focus',
      focus_desc : 'MSME Digitalization & Web Development',
      tools_title: 'Tools',
      tools_desc : 'VS Code, Figma, Bootstrap, AI Platforms, Canva',
      goal_title : 'Goal',
      goal_desc  : 'Scaling client businesses into the digital realm',

      services_sub    : 'Comprehensive digital solutions specifically designed to help your business and MSME grow online.',
      srv_web_title   : 'MSME Website Development',
      srv_web_desc    : 'Development of modern, fully responsive, fast, and optimized company profiles and e-commerce websites.',
      srv_sosmed_title: 'Social Media Management',
      srv_sosmed_desc : 'Content strategy creation, visual design, and short video curation (Reels/TikTok) to increase audience conversion.',
      srv_uiux_title  : 'UI/UX Design',
      srv_uiux_desc   : 'Creating application prototypes in Figma to deliver an intuitive and seamless user experience.',
 
      skills_sub: 'Industry-standard technologies and software I utilize.',
 
      projects_title      : 'Featured Projects',
      proj_mooduit_desc   : 'MOODUIT is an innovative financial management application powered by artificial intelligence (AI) and built using React. This app is designed to streamline cash flow management and fundamental analysis smartly.',
      proj_cuantrack_desc : 'CuanTrack is a financial management and budgeting web application. Built natively using pure PHP, this app focuses on accurate, fast, and secure cash flow tracking without AI integration.',
      btn_view            : 'View Project',
 
      gallery_title: 'Certificates & Gallery',
      gallery_sub  : 'A collection of certificates and technical skill validations.',
 
      contact_sub: 'Ready to digitize your business? Feel free to reach out to me for a consultation.'
    }
  };
 
  const langToggle = document.getElementById('langToggle');
  let currentLang  = localStorage.getItem('language') || 'id';
 
  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
    langToggle.innerText = lang === 'id' ? 'EN' : 'ID';
  }
 
  applyLanguage(currentLang);
 
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
  });
 
});