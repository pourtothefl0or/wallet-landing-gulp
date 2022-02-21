console.log('monkasExtreme');

// === MENU ===
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.header-menu');
const mobileMenuBtn = document.querySelector('.header__nav .btn-menu');

mobileMenuBtn.addEventListener('click', () => {
  body.classList.toggle('scroll-disabled');
  mobileMenuBtn.classList.toggle('btn-menu--active');
  mobileMenu.classList.toggle('header-menu--visible');
});

// === ACCORDION ===
const accordion = document.querySelectorAll('.accordion');

accordion.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('accordion--opened');
  });
});
