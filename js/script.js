const link = document.querySelectorAll(".nav__item-link");
link.forEach((elem) => {
  elem.onmouseenter = elem.onmouseleave = (e) => {
    const tolerance = 10;
    const left = 0;
    const right = elem.clientWidth;
    let x = e.pageX - elem.offsetLeft;
    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;
    elem.style.setProperty("--x", `${x}px`);
  };
});

const burger = document.querySelector(".header__top-burger");
const nav = document.querySelector(".nav");
const body = document.body;
// const blackout = document.querySelector(".blackout");
if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
    body.classList.toggle("_disable-skroll");
  });
}
link.forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.remove("_active");
    nav.classList.remove("_active");
    body.classList.remove("_disable-skroll");
  });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});