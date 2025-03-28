document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { // Se aplica en cualquier pantalla menor a 480px
        slidesPerView: 2,
        grid: {
          rows: 3,
          fill: "row",
        }
      },
      481: { // Se aplica en pantallas mayores a 480px
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      768: { // Se aplica en pantallas mayores a 769px
        slidesPerView: 3,
        grid: {
          rows: 3,
          fill: "row",
        }
      },
    }
  });
});
