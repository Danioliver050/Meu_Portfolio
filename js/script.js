/* =========================================================
   TRADUÇÕES (PT / EN)
   Edite os textos abaixo para atualizar o conteúdo do site
   nos dois idiomas.
   ========================================================= */
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.certifications": "Certificações",
    "nav.articles": "Anotações",
    "nav.contact": "Contato",

    "hero.greeting": "Olá, eu sou",
    "hero.subtitle": "Transformando experiência em desenvolvimento de software em soluções orientadas a dados.",
    "hero.cta_projects": "Ver projetos",
    "hero.cta_contact": "Fale comigo",
    "hero.cta_cv": "Baixar CV",

    "about.eyebrow": "sobre",
    "about.title": "Da lógica de sistemas à lógica dos dados",
    "about.p1": "Comecei minha jornada com total certeza de que queria atuar como desenvolvedor back-end, trabalhando no desenvolvimento e na manutenção de softwares. Nesse processo, tive a oportunidade de atuar em uma área voltada a dados, o que despertou meu interesse pela possibilidade de ampliar minha área de atuação.",
    "about.p2": "A partir desse ponto, passei a buscar, de forma simultânea, o desenvolvimento de software e o trabalho com dados nas aplicações, aproveitando ao máximo minhas habilidades e buscando sempre extrair os melhores resultados.",

    "projects.eyebrow": "projetos",
    "projects.title": "Meu portfólio",
    "projects.empty_title": "Projetos em construção",
    "projects.empty_desc": "Estou finalizando meus primeiros projetos de dados. Em breve eles aparecem aqui — enquanto isso, dá uma olhada no que já venho estudando no GitHub.",
    "projects.empty_cta": "Ver GitHub",

    "stack.eyebrow": "stack",
    "stack.title": "Ferramentas e tecnologias",
    "stack.group1": "Dados & Análise",
    "stack.group2": "Engenharia & Cloud",
    "stack.placeholder": "Em definição",

    "certifications.eyebrow": "certificações",
    "certifications.title": "Cursos e certificações",
    "certifications.empty_title": "Página em preparação",
    "certifications.empty_desc": "Ainda estou decidindo quais cursos e certificações priorizar. A página já está pronta para receber esse conteúdo assim que eu definir.",
    "certifications.empty_cta": "Ver certificações",

    "articles.eyebrow": "anotações",
    "articles.title": "Anotações da transição",
    "articles.read_more": "Ler mais →",
    "art1.title": "Desenvolvendo Softwares aos Dados",
    "art1.desc": "A construção de uma união de dois caminhos com um mesmo destino.",
    "art2.title": "O Excel que eu não sabia que precisaria",
    "art2.desc": "Como um curso que eu não queria fazer se tornou uma ferramenta essencial na minha jornada com dados.",

    "contact.eyebrow": "contato",
    "contact.desc": "Aberto a oportunidades de estágio e posições júnior em engenharia e análise de dados.",
    "contact.copied": "Copiado!",
    "footer.rights": "Todos os direitos reservados."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.articles": "Notes",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Turning software development experience into data-driven solutions.",
    "hero.cta_projects": "View projects",
    "hero.cta_contact": "Get in touch",
    "hero.cta_cv": "Download CV",

    "about.eyebrow": "about",
    "about.title": "From system logic to data logic",
    "about.p1": "I started my journey completely certain that I wanted to work as a back-end developer, building and maintaining software. Along the way, I had the opportunity to work in a data-focused area, which sparked my interest in expanding my scope of work.",
    "about.p2": "From that point on, I began simultaneously pursuing software development and working with data within applications, making the most of my skills and always aiming to extract the best results.",

    "projects.eyebrow": "projects",
    "projects.title": "My portfolio",
    "projects.empty_title": "Projects under construction",
    "projects.empty_desc": "I'm putting the finishing touches on my first data projects. They'll show up here soon — in the meantime, check out what I've been studying on GitHub.",
    "projects.empty_cta": "View GitHub",

    "stack.eyebrow": "stack",
    "stack.title": "Tools & technologies",
    "stack.group1": "Data & Analytics",
    "stack.group2": "Engineering & Cloud",
    "stack.placeholder": "To be defined",

    "certifications.eyebrow": "certifications",
    "certifications.title": "Courses & certifications",
    "certifications.empty_title": "Page in progress",
    "certifications.empty_desc": "I'm still deciding which courses and certifications to prioritize. This page is already set up to receive that content once I do.",
    "certifications.empty_cta": "View certifications",

    "articles.eyebrow": "notes",
    "articles.title": "Notes from the transition",
    "articles.read_more": "Read more →",
    "art1.title": "From Software Development to Data",
    "art1.desc": "Building a union between two paths leading to the same destination.",
    "art2.title": "The Excel I Didn't Know I'd Need",
    "art2.desc": "How a course I didn't want to take became an essential tool in my journey with data.",

    "contact.eyebrow": "contact",
    "contact.desc": "Open to internship and junior opportunities in data engineering and analysis.",
    "contact.copied": "Copied!",
    "footer.rights": "All rights reserved."
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentLang = "pt";

/* =========================================================
   IDIOMA
   ========================================================= */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang !== currentLang) applyLanguage(lang);
  });
});

/* =========================================================
   FILTRO DE PROJETOS
   ========================================================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.getAttribute("data-filter");
    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category").split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !show);
    });
  });
});

/* =========================================================
   SCROLLSPY (nav ativo conforme a seção visível)
   ========================================================= */
function setupScrollspy() {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const setCurrent = (id) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-current", isCurrent);
    });
  };

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => spyObserver.observe(section));
}

/* =========================================================
   BARRA DE PROGRESSO DE SCROLL
   ========================================================= */
function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

/* =========================================================
   TILT INTERATIVO NO AVATAR
   ========================================================= */
function setupAvatarTilt() {
  const wrap = document.querySelector(".hero-visual");
  const frame = document.querySelector(".avatar-frame");
  if (!wrap || !frame || prefersReducedMotion) return;

  wrap.addEventListener("mousemove", (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  });

  wrap.addEventListener("mouseleave", () => {
    frame.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

/* =========================================================
   LIGHTBOX DA FOTO (abrir/ver em tela cheia, inclusive no mobile)
   ========================================================= */
function setupPhotoLightbox() {
  const trigger = document.getElementById("avatarTrigger");
  const lightbox = document.getElementById("photoLightbox");
  const closeBtn = document.getElementById("lightboxClose");
  if (!trigger || !lightbox || !closeBtn) return;

  let lastFocused = null;

  function openLightbox() {
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  trigger.addEventListener("click", openLightbox);
  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

/* =========================================================
   COPIAR E-MAIL PARA A ÁREA DE TRANSFERÊNCIA
   ========================================================= */
function setupEmailCopy() {
  const emailBtn = document.getElementById("emailBtn");
  const feedback = document.getElementById("copyFeedback");
  if (!emailBtn || !feedback) return;

  let hideTimeout = null;

  emailBtn.addEventListener("click", (e) => {
    if (!navigator.clipboard) return; // deixa o mailto normal acontecer
    e.preventDefault();
    const email = emailBtn.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      feedback.classList.add("is-visible");
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => feedback.classList.remove("is-visible"), 1800);
    });
  });
}

/* =========================================================
   MENU MOBILE
   ========================================================= */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function setupScrollReveal() {
  const targets = document.querySelectorAll(
    ".section .about-text, .project-card, .empty-state, .skill-group, .cert-card, .article-card, .footer-main"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* =========================================================
   TEMA CLARO / ESCURO
   ========================================================= */
function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    /* localStorage indisponível (ex: preview em sandbox) — segue sem persistir */
  }
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const saved = safeStorageGet("theme");
  const initialTheme = saved === "light" ? "light" : "dark";

  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    safeStorageSet("theme", next);
  });
}

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.setAttribute("aria-pressed", String(theme === "light"));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("pt");
  setupScrollReveal();
  setupScrollspy();
  setupScrollProgress();
  setupAvatarTilt();
  setupPhotoLightbox();
  setupEmailCopy();
  setupThemeToggle();
});
