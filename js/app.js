const mobNavBtn = document.querySelector(".navbar-toggler");
const mobNav = document.querySelector(".mob-nav");

mobNavBtn.addEventListener("click", function () {
  console.log(mobNav);
  mobNav.classList.toggle("mob-nav-show");
});
