// MOBILE HAMBURGER MENU
const mobNavBtn = document.querySelector(".navbar-toggler");
const mobNav = document.querySelector(".mob-nav");

mobNavBtn.addEventListener("click", function () {
  mobNav.classList.toggle("mob-nav-show");
});

// MY NEW NOTIFICATION TABULAR COMPONENT
const parentEl = document.querySelector(".accordionTopBtn");
const btnEl = document.querySelectorAll(".accordionBtn");

parentEl?.addEventListener("click", function (e) {
  if (!e.target.classList.contains("accordion-button")) return;
  btnEl.forEach((el) => {
    el.classList.remove("active-accord");

    if (e.target === el.firstElementChild.firstElementChild) {
      console.log(el);
      el.classList.add("active-accord");
    }
  });
});

// Remove owl-drag
const owl = document.querySelector('.owl-carousel');
owl?.classList.remove('owl-drag');