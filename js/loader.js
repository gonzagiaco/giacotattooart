document.addEventListener("DOMContentLoaded", function() {
   
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

    
});
