document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    grid: {
      rows: 2, // Número de filas
      fill: "row", // Cómo se llenan (puede ser "row" o "column")
    },
    slidesPerView: 3, // Número de columnas visibles
    spaceBetween: 30, // Espacio entre slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  
});
