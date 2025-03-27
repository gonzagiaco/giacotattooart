document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const mediaElements = document.querySelectorAll('.image-portfolio');
    let currentIndex = 0;

    // Abrir lightbox al hacer clic en una imagen o video
    mediaElements.forEach((media, index) => {
        media.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    // Función para abrir el lightbox
    function openLightbox() {
        lightbox.style.display = 'block';
        updateLightboxContent();
    }

    // Función para actualizar el contenido del lightbox
    function updateLightboxContent() {
        const currentMedia = mediaElements[currentIndex];
        const mediaType = currentMedia.getAttribute('data-type');

        lightboxContent.innerHTML = ''; // Limpiar contenido anterior

        if (mediaType === 'image') {
            const img = document.createElement('img');
            img.src = currentMedia.src;
            img.alt = currentMedia.alt;
            lightboxContent.appendChild(img);
        } else if (mediaType === 'video') {
            const video = document.createElement('video');
            video.src = currentMedia.src; // Usar el atributo src directamente
            video.controls = true;
            video.autoplay = true; // Reproducir automáticamente
            video.muted = true; // Asegurar que esté muteado para autoplay
            lightboxContent.appendChild(video);
        }
    }

    // Cerrar lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Navegar a la imagen o video anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
        updateLightboxContent();
    });

    // Navegar a la siguiente imagen o video
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediaElements.length;
        updateLightboxContent();
    });

    // Cerrar lightbox al hacer clic en el overlay (fondo oscuro)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) { // Solo cerrar si se hace clic en el fondo
            lightbox.style.display = 'none';
        }
    });


    document.getElementById("descargar-pdf").addEventListener("click", async function () {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4"); // Formato A4 vertical

        const portfolio = document.getElementById("portfolio");
        const elements = portfolio.querySelectorAll(".image-container");

        let y = 10; // Posición inicial en el PDF

        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let canvas = await html2canvas(element, { scale: 3, useCORS: true });

            let imgData = canvas.toDataURL("image/jpeg", 1.0);
            let imgWidth = 150; // Ancho fijo en mm (A4)
            let imgHeight = (canvas.height / canvas.width) * imgWidth; // Mantener proporción

            if (y + imgHeight > 280) { // Si la imagen no cabe, agrega nueva página
                pdf.addPage();
                y = 10;
            }

            pdf.addImage(imgData, "JPEG", 10, y, imgWidth, imgHeight);
            y += imgHeight + 5; // Espacio entre imágenes
        }

        pdf.save("Portfolio_Tatuajes_HD.pdf");
    });

});