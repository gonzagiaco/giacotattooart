// Función para animar elementos y contadores al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('h1, .ubicacion, .verTrabajos');
    const counters = document.querySelectorAll('.contador');
    let hasAnimated = false; // Control para asegurarse de que solo se anima una vez

    // Animar elementos de texto
    elements.forEach((element) => {
        if (window.scrollY > 100) { // Cuando el scroll es mayor a 100px
            element.classList.add('scroll-animate');
        } else {
            element.classList.remove('scroll-animate');
        }
    });

    function updateCounter(counter) {
        const maxCount = parseInt(counter.dataset.count);
        const countElement = counter.querySelector('.count');
        let count = 0;

        const increment = Math.ceil(maxCount / 100);
        const duration = 2000;
        const intervalDuration = 30; 
        const totalSteps = duration / intervalDuration;
        const stepIncrement = Math.ceil(maxCount / totalSteps);

        const interval = setInterval(() => {
            count += stepIncrement;

            if (count >= maxCount) {
                count = maxCount;
                clearInterval(interval);
            }
            countElement.textContent = count;
        }, intervalDuration);
    }

    // Animar contadores cuando estén visibles
    if (!hasAnimated && window.scrollY + window.innerHeight >= document.querySelector('.contadores').offsetTop) {
        counters.forEach(counter => updateCounter(counter));
        hasAnimated = true;
    }

    showAbout();
}

function showAbout() {
    const foto = document.querySelector(".foto");
    const aboutTexto = document.querySelector("#aboutTexto");
    const contadores = document.querySelector(".contadores");
    const triggerPoint = window.scrollY + window.innerHeight;

    if (triggerPoint > aboutTexto.offsetTop) {
        setTimeout(() => {
            foto.classList.add("show");
        }, 100);

        setTimeout(() => {
            aboutTexto.classList.add("show");
        }, 200);

        setTimeout(() => {
            contadores.classList.add("show");
        }, 300);
    }

}


window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);
