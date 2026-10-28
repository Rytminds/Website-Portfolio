// =========================================================
// TAHUN FOOTER
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================================================
// TOGGLE TEMA (TERANG / GELAP) — tersimpan di localStorage
// =========================================================
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// =========================================================
// MENU MOBILE
// =========================================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================================================
// LINK NAVIGASI AKTIF SAAT SCROLL
// =========================================================
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navAnchors.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

// =========================================================
// SCROLL REVEAL SEDERHANA
// =========================================================
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// =========================================================
// FORM KONTAK (placeholder — sambungkan ke layanan Anda)
// =========================================================
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form ini masih contoh. Sambungkan ke Formspree, EmailJS, atau backend Anda sendiri agar pesan benar-benar terkirim.");
  contactForm.reset();
});
