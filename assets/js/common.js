const setupMobileMenu = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) {
    console.error("Menu mobile não encontrado.");
    return;
  }

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("active");
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
});
