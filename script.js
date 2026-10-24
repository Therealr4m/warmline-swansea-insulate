"use strict";

// Shared mobile and desktop navigation. Supports multiple independent dropdowns.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const dropdowns = Array.from(document.querySelectorAll("[data-nav-dropdown]"));

function setDropdownOpen(dropdown, open) {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  const panel = dropdown.querySelector(".nav-dropdown-menu");
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", String(open));
  panel.classList.toggle("is-open", open);
}

function closeDropdowns(except = null) {
  dropdowns.forEach((dropdown) => {
    if (dropdown !== except) setDropdownOpen(dropdown, false);
  });
}

function setMobileMenuOpen(open) {
  if (!menuButton || !navLinks) return;
  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.textContent = open ? "✕" : "☰";
  if (!open) closeDropdowns();
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    setMobileMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });
}

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
    closeDropdowns();
    setDropdownOpen(dropdown, shouldOpen);
  });
});

document.addEventListener("click", (event) => {
  if (menuButton && navLinks && !menuButton.contains(event.target) && !navLinks.contains(event.target)) {
    setMobileMenuOpen(false);
  }
  if (!dropdowns.some((dropdown) => dropdown.contains(event.target))) {
    closeDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openedDropdown = dropdowns.find((dropdown) =>
    dropdown.querySelector(".nav-dropdown-toggle")?.getAttribute("aria-expanded") === "true"
  );
  if (openedDropdown) {
    closeDropdowns();
    openedDropdown.querySelector(".nav-dropdown-toggle")?.focus();
    return;
  }
  if (menuButton?.getAttribute("aria-expanded") === "true") {
    setMobileMenuOpen(false);
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 721px)").addEventListener("change", (event) => {
  if (event.matches) setMobileMenuOpen(false);
});

// Keep copyright years current without touching website copy.
document.querySelectorAll(".year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

// Optional analytics hooks; only active when the site owner has configured gtag.
document.querySelectorAll("a[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", link.dataset.track, {
        link_url: link.href,
        page_location: window.location.href,
      });
    }
  });
});
