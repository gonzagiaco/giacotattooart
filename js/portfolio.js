document.addEventListener('DOMContentLoaded', function () {
    // Verificar si estamos en la página correcta (por ejemplo, solo en index.html)
    if (window.location.pathname.includes("portfolio.html")) {

        const lightbox = document.getElementById('lightbox');
        const lightboxContent = document.getElementById('lightbox-content');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const mediaElements = document.querySelectorAll('.image-portfolio');
        let currentIndex = 0;

        // Variables para touch
        let touchStartX = 0;
        let touchEndX = 0;

        // Solo agregar event listeners si la pantalla es más grande que 767px (tablet en adelante)
        if (window.innerWidth > 767) {
            // Abrir lightbox al hacer clic en una imagen o video
            mediaElements.forEach((media, index) => {
                media.addEventListener('click', () => {
                    currentIndex = index;
                    openLightbox();
                });
            });

            // Función para abrir el lightbox
            function openLightbox() {
                lightbox.style.display = 'flex';
                updateLightboxContent();
                addTouchListeners();  // Agregar listeners de touch al abrir el lightbox
            }

            // Función para actualizar el contenido del lightbox
            function updateLightboxContent() {
                const currentMedia = mediaElements[currentIndex];
                const mediaType = currentMedia.tagName.toLowerCase(); // Detectar si es IMG o VIDEO
            
                lightboxContent.innerHTML = ''; // Limpiar contenido anterior
            
                if (mediaType === 'img') {
                    const img = document.createElement('img');
                    img.src = currentMedia.src;
                    img.alt = currentMedia.alt;
                    lightboxContent.appendChild(img);
                } else if (mediaType === 'video') {
                    const video = document.createElement('video');
                    video.controls = true;
                    video.autoplay = true;
                    video.muted = true;
            
                    // Obtener todas las fuentes dentro del video original
                    const sources = currentMedia.querySelectorAll('source');
            
                    sources.forEach(source => {
                        const newSource = document.createElement('source');
                        newSource.src = source.getAttribute('data-src'); // Usar data-src
                        newSource.type = source.type;
                        video.appendChild(newSource);
                    });
            
                    lightboxContent.appendChild(video);
                }
            }

            // Cerrar lightbox
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    lightbox.style.display = 'none';
                    removeTouchListeners();  // Eliminar listeners de touch al cerrar el lightbox
                });
            }

            // Navegar a la imagen o video anterior
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
                    updateLightboxContent();
                });
            }

            // Navegar a la siguiente imagen o video
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % mediaElements.length;
                    updateLightboxContent();
                });
            }

            // Cerrar lightbox al hacer clic en el overlay (fondo oscuro)
            if (lightbox) {
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) { // Solo cerrar si se hace clic en el fondo
                        lightbox.style.display = 'none';
                        removeTouchListeners();  // Eliminar listeners de touch al cerrar el lightbox
                    }
                });
            }

            // Funciones de swipe para tablets
            function addTouchListeners() {
                lightbox.addEventListener('touchstart', handleTouchStart, false);
                lightbox.addEventListener('touchmove', handleTouchMove, false);
                lightbox.addEventListener('touchend', handleTouchEnd, false);
            }

            function removeTouchListeners() {
                lightbox.removeEventListener('touchstart', handleTouchStart, false);
                lightbox.removeEventListener('touchmove', handleTouchMove, false);
                lightbox.removeEventListener('touchend', handleTouchEnd, false);
            }

            function handleTouchStart(e) {
                touchStartX = e.changedTouches[0].screenX;
            }

            function handleTouchMove(e) {
                touchEndX = e.changedTouches[0].screenX;
            }

            function handleTouchEnd() {
                if (touchStartX - touchEndX > 50) {  // Deslizar a la izquierda
                    nextImage();
                }
                if (touchEndX - touchStartX > 50) {  // Deslizar a la derecha
                    prevImage();
                }
            }

            // Cambiar a la siguiente imagen
            function nextImage() {
                currentIndex = (currentIndex + 1) % mediaElements.length;
                updateLightboxContent();
            }

            // Cambiar a la imagen anterior
            function prevImage() {
                currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
                updateLightboxContent();
            }

        }

        // Función para descargar el portfolio como PDF
        const downloadButton = document.getElementById("descargar-pdf");
        if (downloadButton) {
            downloadButton.addEventListener("click", async function () {
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
        }

    } else {
        console.log("No estamos en la página de index.html, el script no se ejecutará.");
    }

});
