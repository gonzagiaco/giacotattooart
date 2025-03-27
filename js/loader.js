document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress");
    const containerLoader = document.querySelector(".container-loader");
    const body = document.querySelector("body");
    const heroVideo = document.getElementById("hero-video");

    let width = parseInt(localStorage.getItem("progress") || "0");

    function finalizarCarga() {
        body.style.overflow = "auto";
        containerLoader.style.display = "none";
        setTimeout(iniciarAnimaciones, 100);
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

    if (width >= 100) {
        finalizarCarga();
    } else {
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                if (heroVideo.readyState >= 3) {
                    finalizarCarga();
                } else {
                    heroVideo.addEventListener("canplaythrough", finalizarCarga);
                }
            } else {
                width++;
                progressBar.style.width = width + "%";
                localStorage.setItem("progress", width);
            }
        }, 50);
    }

    heroVideo.addEventListener("canplaythrough", function() {
        if (width >= 100) {
            finalizarCarga();
        }
    });
});
