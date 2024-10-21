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

    // Función para actualizar los contadores
    function updateCounter(counter) {
        const maxCount = parseInt(counter.dataset.count);
        const countElement = counter.querySelector('.count');
        let count = 0;

        const increment = Math.ceil(maxCount / 100);

        const interval = setInterval(() => {
            count += increment;
            if (count > maxCount) {
                count = maxCount;
                clearInterval(interval);
            }
            countElement.textContent = count;
        }, 30);
    }

    // Animar contadores cuando estén visibles
    if (!hasAnimated && window.scrollY + window.innerHeight >= document.querySelector('.contadores').offsetTop) {
        counters.forEach(counter => updateCounter(counter));
        hasAnimated = true;
    }

    showAbout();
}
    
    function showAbout(){
        const foto = document.querySelector(".foto");
        const aboutTexto = document.querySelector("#aboutTexto");
        const triggerPoint = window.scrollY + window.innerHeight;

        if(triggerPoint > aboutTexto.offsetTop){
            setTimeout(() => {
                foto.classList.add("show");
            }, 100);

            setTimeout(() => {
                aboutTexto.classList.add("show");
            }, 200);
        }

    }


window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);
