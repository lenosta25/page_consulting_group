const swiper = new Swiper(".swiper", {
   direction: "horizontal",
   centeredSlides: true,
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   breakpoints: {
     1000:{
       slidesPerView: 2.5,
       spaceBetween: 20,
       initialSlide: 1,
     },
     1450: {
       slidesPerView: 3,
       spaceBetween: 20,
       initialSlide: 2,
     },
     1550: {
       slidesPerView: 3.5,
       spaceBetween: 20,
       initialSlide: 2,
     },
     1920: {
       loop: true,
       slidesPerView: 4.5,
       spaceBetween: 30,
       initialSlide: 2,
     },
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 const cardsConteiner = document.querySelector("#cards");
 getCards();
 async function getCards() {
   const response = await fetch("./js/swiperCards.json");
   const cardsArray = await response.json();
   renderCards(cardsArray);
   swiper.init();
 }
 function renderCards(cardsArray) {
   cardsArray.forEach(function (item) {
     const cardsHTML = `
      <article class="swiper-slide card" data-id="${item.id}">
             <img
               src="./img/photo-for-slider/${item.imgSrc}"
               alt="${item.imgAlt}"
             />
             <div class="card__content">
               <h3 class="card__content-title">
               ${item.title}
               </h3>
               <p class="card__content-icon"><i class="icon-arrow-right"></i></p>
             </div>
             <a class="card__link" href="${item.link}"></a>
           </article>
      `;
     cardsConteiner.insertAdjacentHTML("beforeend", cardsHTML);
   });
 }