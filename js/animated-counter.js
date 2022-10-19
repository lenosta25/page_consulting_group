const counters = document.querySelectorAll(".counter");

const loadingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // если элемент находится в видимой части браузера,подгружаем
    if (entry.isIntersecting) {
      // анимация counter
      counters.forEach((counter) => {
        counter.innerHTML = "0";
        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          if (count < target) {
            counter.innerText = count + 1;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCounter();
      });
    }
  });
});
// указываем, за чем необходимо наблюдать
loadingObserver.observe(document.querySelector(".about-company"));
