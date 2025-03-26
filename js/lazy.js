document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los videos con la clase "gallery-tattoo"
    const videos = document.querySelectorAll('.gallery-tattoo');

    // Crea un IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;

            // Si el video está en el viewport y no se ha cargado/reproducido
            if (entry.isIntersecting && !video.dataset.loaded) {
                const videoSource = video.querySelector('source'); // Selecciona el <source> dentro del <video>
                videoSource.src = videoSource.dataset.src; // Usa el atributo data-src para la URL del video
                
                // Espera hasta que el video se cargue completamente
                video.load();

                // Solo reproduce el video si ya está completamente cargado
                video.addEventListener('loadeddata', () => {
                    video.play();
                });

                // Marca el video como cargado
                video.dataset.loaded = true;

                // Deja de observar este video para mejorar el rendimiento
                observer.unobserve(video);
            }
        });
    }, {
        threshold: 0.25 // Cuando el 25% del video esté visible
    });

    // Observa cada video
    videos.forEach(video => {
        // Coloca la URL del video en un atributo `data-src`
        const videoSource = video.querySelector('source');
        videoSource.dataset.src = videoSource.src;
        videoSource.src = ''; // Desactiva la carga inicial

        // Agrega un evento de pausa al scroll para evitar que los videos se reproduzcan mientras el usuario hace scroll rápido
        video.addEventListener('play', () => {
            // Pausar el video cuando ya no es visible en el viewport
            video.addEventListener('pause', () => {
                video.currentTime = 0; // Resetea el tiempo del video para evitar usar recursos
            });
        });

        // Comienza a observar el video
        observer.observe(video);
    });
});
