/* ================================================================
   SAGRADA FAMÍLIA — Artigos Religiosos
   main.js  |  Interações e comportamentos da página
   ================================================================ */


/* ──────────────────────────────────────────────────────────────
   MENU HAMBÚRGUER (mobile)
   ────────────────────────────────────────────────────────────── */
function initHamburger() {
  const btn  = document.getElementById("hamburger-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  // Fecha ao clicar em qualquer link do menu
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Abrir menu");
    });
  });
}


/* ──────────────────────────────────────────────────────────────
   SCROLL REVEAL (animação de entrada ao rolar)
   ────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback: mostra tudo sem animação
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));

  // Expõe o observer globalmente para que products.js
  // possa registrar cards gerados dinamicamente
  window.revealObserver = observer;
}


/* ──────────────────────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initScrollReveal();
});
