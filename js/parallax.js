document.addEventListener("DOMContentLoaded", () => {
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const videoHero = document.getElementById("video-hero");
    const resourceWrapper = document.querySelector(".hero-btn-resource");


    const moverElemento = (elemento, targetPos, scrollOffset, velocidad) => {
        const currentX = (targetPos.x * scrollOffset * velocidad) / 100;
        const currentY = (targetPos.y * scrollOffset * velocidad) / 100;
        const currentRotation =
            (targetPos.rotation * scrollOffset * velocidad) / 100;

        elemento.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentRotation}deg)`;
    };

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        moverElemento(videoHero, { x: 0, y: 30, rotation: 0 }, scrollY, 1);
        moverElemento(resourceWrapper, { x: 0, y: -30, rotation: 0 }, scrollY, 0.2);


        // Para resource1: mantener la rotación original y aplicar solo traslación en Y
        let rotationActual = getComputedStyle(resource1).transform;
        resource1.style.transform = `${rotationActual} translateY(${(50 * scrollY * 0.3) / 100}px)`;
    });
});
