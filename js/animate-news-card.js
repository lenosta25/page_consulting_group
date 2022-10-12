const newsCards = document.querySelectorAll(".news__card");
for (let i = 0; i < newsCards.length; i++) {
  newsCards[i].addEventListener("click", function () {
    for (let i = 0; i < newsCards.length; i++) {
      newsCards[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}
