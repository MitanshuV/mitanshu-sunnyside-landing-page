const displayNav = document.querySelector(".display-nav");
const orangeHamburger = document.querySelector(".orange-hamburger");
const ul = document.querySelector(".ul");

orangeHamburger.addEventListener("click", () => {
  displayNav.classList.toggle("open");
  ul.classList.toggle("openUl");
});
