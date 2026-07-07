
(function () {
  const STORAGE_KEY = "snix-legal-theme";
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || "white";
  }
  function setTheme(t) {
    html.setAttribute("data-theme", t === "ocean" ? "ocean" : "");
    localStorage.setItem(STORAGE_KEY, t);
    // sync any toggle buttons on the page
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.setAttribute("aria-label", t === "ocean" ? "Switch to White theme" : "Switch to Ocean theme");
      btn.setAttribute("title",      t === "ocean" ? "Switch to White theme" : "Switch to Ocean theme");
    });
    document.querySelectorAll(".theme-label").forEach(el => {
      el.textContent = t === "ocean" ? "🌊 Ocean" : "☀️ White";
    });
  }
  function toggle() {
    setTheme(getTheme() === "ocean" ? "white" : "ocean");
  }

  // Apply saved theme immediately (before paint) to avoid flash
  setTheme(getTheme());

  // Wire up after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    setTheme(getTheme()); // re-apply to sync labels
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.addEventListener("click", toggle);
    });
  });
})();
