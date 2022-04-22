
// MOBILE HAMBURGER MENU
const mobNavBtn = document.querySelector(".navbar-toggler");
const mobNav = document.querySelector(".mob-nav");

mobNavBtn.addEventListener("click", function () {
  // console.log(mobNav);
  mobNav.classList.toggle("mob-nav-show");
});
window.addEventListener('click', function (e) {
  console.log(mobNavBtn);
  console.log(e.target.closest('.navbar-toggler'));
  // if (!(mobNav.classList.contains('mob-nav-show')) && e.target != mobNavBtn) return;
  mobNav.classList.remove("mob-nav-show");
})

// MY NEW NOTIFICATION TABULAR COMPONENT
const parentEl = document.querySelector('.accordionTopBtn');
const btnEl = document.querySelectorAll('.accordionBtn');

parentEl.addEventListener('click', function (e) {

  if (!(e.target.classList.contains('accordion-button'))) return;
  btnEl.forEach(el => {

    el.classList.remove('active-accord');

    if (e.target === el.firstElementChild.firstElementChild) {
      console.log(el);
      el.classList.add('active-accord');
    }
  })
})