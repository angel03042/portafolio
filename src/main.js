let dark = document.querySelectorAll("#dark");
let white = document.querySelectorAll("#white");

//Cambiar al modo oscuro
dark.forEach((oscuro) => {
  oscuro.addEventListener("click", () => {
    oscuro.classList.toggle("bg-black");
    oscuro.classList.toggle("invert");
    document.querySelector("body").classList.toggle("bg-white");
  });
});

document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  if (!menu.contains(event.target)) {
    menu.removeAttribute("open"); // Cierra el menú si se hace clic fuera
  }
});

// Cierra el menú al hacer scroll
window.addEventListener("scroll", function () {
  document.getElementById("menu").removeAttribute("open");
});

function closeMenu() {
  document.getElementById("menu").removeAttribute("open"); // Cierra el menú al hacer clic en una opción
}
