const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 5) {
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
    navbar.style.transition = "all 0.5s ease";
  } else {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.opacity = "0.8";
    navbar.style.transition = "all 0.5s ease";
  }
});
