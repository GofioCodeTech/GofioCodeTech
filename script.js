// Maneja el menú móvil y las animaciones de scroll

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar__nav");
  const toggle = document.querySelector(".navbar__toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("navbar__nav--open");
      toggle.classList.toggle("navbar__toggle--open");
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("navbar__nav--open");
        toggle.classList.remove("navbar__toggle--open");
      }
    });
  }

  // Animaciones de aparición al hacer scroll
  const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("reveal--visible");
            obs.unobserve(el);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback simple para navegadores sin IntersectionObserver
    revealElements.forEach((el) => el.classList.add("reveal--visible"));
  }
});

