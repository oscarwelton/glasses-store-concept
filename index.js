const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 5) {
    navbar.classList.remove("navbar-scroll");
  } else {
    navbar.classList.add("navbar-scroll");
  }
});
