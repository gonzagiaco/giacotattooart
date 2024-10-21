function animateImagesOnScroll() {
    const images = document.querySelectorAll('.galeria img');
    
    images.forEach((image, index) => {
        const triggerPoint = window.scrollY + window.innerHeight - 100;
        if (triggerPoint > image.offsetTop) {
            setTimeout(() => {
                image.classList.add('image-visible');
            }, index * 100);
        }
    });
}


window.addEventListener('scroll', animateImagesOnScroll);

document.addEventListener('DOMContentLoaded', animateImagesOnScroll);
