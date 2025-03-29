document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".desktop-nav a, .desktop-nav-portfolio a");
    const menu_burger = document.querySelector(".hamburger");
    const menu_mobile = document.querySelector(".desktop-nav");
    const navItems = document.querySelectorAll('.desktop-nav li');
    const menuCheckbox = document.querySelector(".hamburger input[type='checkbox']");


    // BOOKING
    const bookingLink = document.querySelector("a[href='#booking']");
    const containerBooking = document.querySelector(".container-booking");
    const bookingInfo = document.querySelector(".booking-info");

    // FAQS

    const faqsLink = document.querySelector("a[href='#faqs']");
    const containerFaqs = document.querySelector(".container-faq"); // Sección en mobile


    menu_burger.addEventListener("change", () => {
        openMenu();
    });

    function openMenu() {
        
        menu_mobile.classList.toggle("opened");

        resetAnimations();
    }

    function closeMenu(){
        menuCheckbox.checked = false;
        menu_mobile.classList.remove("opened");
    }
    

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

        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    
    function cambiarId() {
        const bookingInfo = document.querySelector(".booking-info");
        const containerBooking = document.querySelector(".container-booking");

        // Verificar si estamos en un dispositivo móvil o en escritorio
        if (window.innerWidth <= 768) { // Dispositivos móviles
            containerBooking.id = "booking"; // Añadir id a la clase container-booking
            bookingInfo.removeAttribute("id"); // Remover id de booking-info si está presente
        } else { // Escritorio
            bookingInfo.id = "booking"; // Añadir id a la clase booking-info
            containerBooking.removeAttribute("id"); // Remover id de container-booking si está presente
        }
    }

    // Llamamos la función al cargar la página
    cambiarId();

    // Cambiamos el id cada vez que el tamaño de la ventana cambie
    window.addEventListener("resize", cambiarId);

});