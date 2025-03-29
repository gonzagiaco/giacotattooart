document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".desktop-nav a, .desktop-nav-portfolio a, .desktop-nav-footer a");
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
    const containerFaqs = document.querySelector(".container-faq");

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
            item.style.animation = 'none';
            item.offsetHeight;
            item.style.animation = '';
        });
    }

    // Función para verificar si un enlace está en el footer
    function isInFooter(link) {
        return link.closest('.desktop-nav-footer') !== null;
    }

    navLinks.forEach(link => {
        // Establecer color inicial basado en la ubicación
        link.style.color = isInFooter(link) ? "rgba(255, 255, 255, 0.7)" : "#333";

        link.addEventListener("mouseenter", () => {
            // Color al hacer hover
            link.style.color = isInFooter(link) ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

            // Color de los demás enlaces
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.color = isInFooter(otherLink) 
                        ? "rgba(255, 255, 255, 0.5)" 
                        : "rgb(179, 179, 179)";
                }
            });
        });

        link.addEventListener("mouseleave", () => {
            // Restaurar colores originales
            navLinks.forEach(otherLink => {
                otherLink.style.color = isInFooter(otherLink) 
                    ? "rgba(255, 255, 255, 0.7)" 
                    : "#333";
            });
        });

        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    function cambiarId() {
        const bookingInfo = document.querySelector(".booking-info");
        const containerBooking = document.querySelector(".container-booking");

        if (window.innerWidth <= 768) {
            containerBooking.id = "booking";
            bookingInfo.removeAttribute("id");
        } else {
            bookingInfo.id = "booking";
            containerBooking.removeAttribute("id");
        }
    }

    cambiarId();
    window.addEventListener("resize", cambiarId);
});