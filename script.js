const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("togglePassword").addEventListener("click", () => {
  const password = document.getElementById("password");
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  document.getElementById("togglePassword").textContent = isPassword ? "Sembunyikan" : "Lihat";
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("formMessage").textContent =
    "Ini masih tampilan demo. Sistem login belum dihubungkan.";
});
