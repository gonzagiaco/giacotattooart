document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress");
    const containerLoader = document.querySelector(".container-loader");
    const body = document.querySelector("body");

    let width = parseInt(localStorage.getItem("progress") || "0");

    if (width >= 100) {
        body.style.overflow = "auto";
        containerLoader.style.display = "none";
        iniciarAnimaciones(); // Iniciar animaciones si ya cargó previamente
    } else {
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                body.style.overflow = "auto";
                containerLoader.style.display = "none";
                setTimeout(iniciarAnimaciones, 100); // Llamar después de que se oculte el loader
            } else {
                width++;
                progressBar.style.width = width + "%";
                localStorage.setItem("progress", width);
            }
        }, 50);
    }

    function iniciarAnimaciones() {
        const elementos = document.querySelectorAll("[data-animacion]");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 });

        elementos.forEach(elemento => observer.observe(elemento));
    }
});
