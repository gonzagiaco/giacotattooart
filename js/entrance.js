// document.addEventListener("DOMContentLoaded", () => {
//     const elementos = document.querySelectorAll("[data-animacion]"); // Selecciona todos los elementos con el atributo "data-animacion"

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible"); // Cuando el elemento entra en la vista, agrega la clase "visible"
//             }
//         });
//     }, { threshold: 0.5 }); // Umbral para que se considere visible cuando esté al 50%

//     // Observa cada uno de los elementos con "data-animacion"
//     elementos.forEach(elemento => observer.observe(elemento)); 
// });
