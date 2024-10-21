function animateOnScroll() {
    const elements = document.querySelectorAll('h1, .ubicacion, .verTrabajos');
    
    elements.forEach((element) => {

        if (window.scrollY > 100) { // Cuando el scroll es mayor a 100px
            element.classList.add('scroll-animate');
        } else {
            element.classList.remove('scroll-animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);
