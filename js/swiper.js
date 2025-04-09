document.addEventListener("DOMContentLoaded", function () {
  const swiperEl   = document.querySelector('.swiper');
  const wrapperEl  = swiperEl.querySelector('.swiper-wrapper');

  const swiper = new Swiper(swiperEl, {
    spaceBetween: 30,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      0:   { slidesPerView: 2, grid: { rows: 3, fill: "row" } },
      481: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
      768: { slidesPerView: 3, grid: { rows: 3, fill: "row" } },
      1132:{ slidesPerView: 3, grid: { rows: 2, fill: "row" } }
    },
    on: {
      init:      () => animarVisibles(),
      slideChange: () => animarVisibles()
    }
  });

  function animarVisibles() {
    // todas las slides que Swiper marca como visibles
    const visibles = wrapperEl.querySelectorAll('.swiper-slide-visible[data-animacion]');

    visibles.forEach(slide => {
      // si aún no tiene la clase .visible, se la añadimos
      if (!slide.classList.contains('visible')) {
        slide.classList.add('visible');
      }
    });
  }
});
