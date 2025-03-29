document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress");
    const containerLoader = document.querySelector(".container-loader");
    const body = document.querySelector("body");
    const heroVideo = document.getElementById("hero-video");

    // let width = parseInt(localStorage.getItem("progress") || "100");

    // // Comprobar si es la primera vez que se carga la página o portfolio
    // if (!sessionStorage.getItem("loaderShown")) {
    //     // Es la primera vez, mostrar loader
    //     sessionStorage.setItem("loaderShown", "true");
    // } else if (sessionStorage.getItem("loaderShown") === "portfolio") {
    //     // El loader ya ha sido mostrado, pero estamos en portfolio por primera vez
    //     sessionStorage.setItem("loaderShown", "true");
    // }

    // function finalizarCarga() {
    //     body.style.overflow = "auto";
    //     containerLoader.style.display = "none";
    //     setTimeout(iniciarAnimaciones, 100);
    // }
    iniciarAnimaciones();

    function iniciarAnimaciones() {
        const elementos = document.querySelectorAll("[data-animacion]");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        elementos.forEach(elemento => observer.observe(elemento));
    }

    // // Cargar progreso de la barra
    // if (width >= 100) {
    //     finalizarCarga();
    // } else {
    //     const interval = setInterval(() => {
    //         if (width >= 100) {
    //             clearInterval(interval);
    //             if (heroVideo.readyState >= 3) {
    //                 finalizarCarga();
    //             } else {
    //                 heroVideo.addEventListener("canplaythrough", finalizarCarga);
    //             }
    //         } else {
    //             width++;
    //             progressBar.style.width = width + "%";
    //             localStorage.setItem("progress", width);
    //         }
    //     }, 50);
    // }

    // heroVideo.addEventListener("canplaythrough", function() {
    //     if (width >= 100) {
    //         finalizarCarga();
    //     }
    // });

    // // Detectar si estamos en la página de portfolio y mostrar loader
    // if (window.location.pathname.includes("portfolio.html") && sessionStorage.getItem("loaderShown") !== "portfolio") {
    //     sessionStorage.setItem("loaderShown", "portfolio");
    //     containerLoader.style.display = "block"; // Mostrar loader al entrar a portfolio por primera vez
    //     setTimeout(finalizarCarga, 500); // Simulación de la duración de la carga
    // }
});
