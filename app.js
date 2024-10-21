document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const header = document.querySelector("header");
    const linksNav = nav.querySelectorAll("a");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("show");
            header.classList.toggle("open");

            const menuIcon = menuToggle.querySelector(".menu-icon");
            const closeIcon = menuToggle.querySelector(".close-icon");

            if (nav.classList.contains("show")) {
                menuIcon.style.display = "none"; 
                closeIcon.style.display = "block"; 

                linksNav.forEach((link, index) => {
                    link.style.transitionDelay = `${index * 0.2}s`; 
                    link.classList.add('show');
                });
            } else {
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";

                // Desaparece cada enlace en orden
                linksNav.forEach((link, index) => {
                    link.style.transitionDelay = `${index * 0.2}s`; 
                    link.classList.remove('show');
                });
            }
        });
    }

    const btn_whatsapp = document.querySelector(".botonWhatsapp");

    function floatButton() {
        btn_whatsapp.style.transform = "translateY(-5px)";
        btn_whatsapp.style.transition = "transform 0.5s ease-in-out";

        setTimeout(() => {
            btn_whatsapp.style.transform = "translateY(0)";
        }, 500);
    }

    setInterval(floatButton, 2000);

    const flecha1 = document.getElementById("flecha1");
    const flecha2 = document.getElementById("flecha2");
    const flecha3 = document.getElementById("flecha3");

    function opacityFlecha() {
        setTimeout(() => {
            flecha1.style.opacity = "1";
        }, 0);

        setTimeout(() => {
            flecha2.style.opacity = "1";
        }, 500);

        setTimeout(() => {
            flecha3.style.opacity = "1";
        }, 1000);

        setTimeout(() => {
            flecha3.style.opacity = "0";
        }, 2000);

        setTimeout(() => {
            flecha2.style.opacity = "0";
        }, 2500);

        setTimeout(() => {
            flecha1.style.opacity = "0";
        }, 3000);
    }

    setInterval(opacityFlecha, 4000);

    const headersFaq = document.querySelectorAll(".headerFaq");

    headersFaq.forEach(header => {
        header.addEventListener("click", function () {

            const faqExtendida = header.nextElementSibling;
            const icon = header.querySelector(".faq-icon");

            const isOpen = faqExtendida.classList.contains("faqExtendida-show");


            faqExtendida.classList.toggle("faqExtendida-show");

            if (!isOpen) {
       
                const contentHeight = faqExtendida.scrollHeight; 
                const paddingTop = 10;
                faqExtendida.style.maxHeight = `${contentHeight + paddingTop}px`; 
                icon.src = "images/minus-circle.svg";
            } else {
      
                faqExtendida.style.maxHeight = `0`;
                icon.src = "images/plus-circle.svg";
            }
        });
    });

});
