// Función que se ejecuta cuando el video entra en el viewport
function onIntersection(entries, observer) {
    entries.forEach(entry => {
        // Verifica si el video ha entrado en el viewport
        if (entry.isIntersecting) {
            const video = entry.target;
            // Asignar el 'src' del video desde 'data-src'
            video.src = video.getAttribute('data-src');
            // Dejar de observar este video después de cargarlo
            observer.unobserve(video);
        }
    });
}

// Configurar el Intersection Observer
const observerOptions = {
    root: null, // Observa el viewport
    rootMargin: '0px', // Margen alrededor del viewport
    threshold: 0.5 // El video se carga cuando está al menos un 50% visible
};

// Crear una instancia del Intersection Observer
const observer = new IntersectionObserver(onIntersection, observerOptions);

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los videos y comenzar a observarlos
    document.querySelectorAll('video[data-src]').forEach(video => {
        observer.observe(video);
    });
});
