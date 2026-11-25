const menuButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => menu.classList.toggle("open"));

document.getElementById("toggle").addEventListener("click", () => {
  const field = document.getElementById("password");
  field.type = field.type === "password" ? "text" : "password";
});

document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Tampilan ini masih demo. Sistem login belum dihubungkan.");
});
