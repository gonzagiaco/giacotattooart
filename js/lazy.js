// Función que se ejecuta cuando el video entra en el viewport
function onIntersection(entries, observer) {
    entries.forEach(entry => {
        // Verifica si el video ha entrado en el viewport
        if (entry.isIntersecting) {
            const video = entry.target;
            
            // Llamamos a la función para cargar las fuentes de WebM o MP4
            loadVideoSources(video);

            // Dejar de observar este video después de cargarlo
            observer.unobserve(video);
        }
    });
}

// Función para cargar las fuentes de WebM o MP4 según el navegador
function loadVideoSources(video) {
    const webmSource = video.querySelector('source[type="video/webm"]');
    const mp4Source = video.querySelector('source[type="video/mp4"]');

    // Comprobamos si el navegador soporta WebM
    if (isWebMSupported()) {
        // Si el navegador soporta WebM, se carga el archivo .webm
        webmSource.src = webmSource.getAttribute('data-src');
        mp4Source.remove();  // Removemos el MP4 si WebM es compatible
    } else {
        // Si no soporta WebM (como en Safari), se carga el archivo .mp4
        webmSource.remove();  // Removemos WebM si no es compatible
        mp4Source.src = mp4Source.getAttribute('data-src');
    }

    // Actualizamos el src del video para que se cargue
    video.load();
}

// Función para detectar si el navegador soporta WebM
function isWebMSupported() {
    const video = document.createElement('video');
    return video.canPlayType('video/webm; codecs="vp8, vorbis"') !== "";
}

// Configurar el Intersection Observer
const observerOptions = {
    root: null, // Observa el viewport
    rootMargin: '0px', // Margen alrededor del viewport
    threshold: 0.2 // El video se carga cuando está al menos un 20% visible
};

// Crear una instancia del Intersection Observer
const observer = new IntersectionObserver(onIntersection, observerOptions);

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los videos y comenzar a observarlos
    document.querySelectorAll('video').forEach(video => {
        observer.observe(video);
    });
});
