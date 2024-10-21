function animateOnScroll() {
    const images = document.querySelectorAll('.galeria img');
    images.forEach((image, index) => {
        const triggerPoint = window.scrollY + window.innerHeight - 100;
        if (triggerPoint > image.offsetTop) {
            setTimeout(() => {
                image.classList.add('image-visible');
            }, index * 100);
        }
    });

    // Animar FAQs
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq, index) => {
        const triggerPoint = window.scrollY + window.innerHeight;
        if (triggerPoint > faq.offsetTop) {
            setTimeout(() => {
                faq.classList.add('show');
            }, index * 100);
        }
    });

    const footerElements = document.querySelectorAll("footer *");
    const footer = document.querySelector("footer");
    footerElements.forEach((element, index) => {
        const triggerPoint = window.scrollY + window.innerHeight;
        if (triggerPoint > footer.offsetTop) {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 100);
        }
    });

}

window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);
