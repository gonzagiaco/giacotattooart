document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".desktop-nav a, .desktop-nav-portfolio a");
    const menu_burger = document.querySelector(".hamburger");
    const menu_mobile = document.querySelector(".desktop-nav");
    const navItems = document.querySelectorAll('.desktop-nav li');

    menu_burger.addEventListener("change", () => {
        menu_mobile.classList.toggle("opened");

        resetAnimations();
    });

    function resetAnimations() {
        navItems.forEach(item => {
            item.style.animation = 'none'; // Detiene la animación actual
            item.offsetHeight; // Trigger reflow (necesario para reiniciar la animación)
            item.style.animation = ''; // Vuelve a activar la animación
        });
    }

    
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            // Cambia el color del enlace en hover a negro
            link.style.color = "rgb(0, 0, 0)";

            // Cambia el color de los demás enlaces a gris
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.color = "rgb(179, 179, 179)";
                }
            });
        });

        link.addEventListener("mouseleave", () => {
            // Restaura el color original de todos los enlaces
            navLinks.forEach(otherLink => {
                otherLink.style.color = "#333";
            });

        });
    });
});