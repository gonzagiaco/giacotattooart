document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.faq-card').forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.faq-card-body').classList.toggle('card-opened');
            card.querySelector('.faq-card-head').classList.toggle('card-opened');

        });
    });


});