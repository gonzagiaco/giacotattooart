// Inicialización de i18next
i18next.init({
    lng: 'es', // Establecer idioma por defecto
    resources: {
        es: {
            translation: {
                header: {
                    portfolio: "Portafolio",
                    booking: "Reservas",
                    faqs: "Preguntas",
                    changeLanguage: "Cambiar a inglés",
                    back: "Volver",
                    changeIcon: "media/change.svg"
                },
                hero: {
                    title: "Artista de tatuajes en Olavarría, Buenos Aires, Argentina",
                    bookNow: "Reservar ahora"
                },
                gallery: {
                    title: "GALERÍA",
                    seeAll: "Ver todo"
                },
                booking: {
                    title: "RESERVAS",
                    beforeBooking: "Antes de reservar",
                    info1: "¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",
                    info2: "¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",
                    info3: "¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",
                    important: "Importante: ¡No olvides revisar tu carpeta de spam!",
                    bookButton: "Reservar ahora"
                },
                faqs: {
                    title: "PREGUNTAS",
                    question1: "Después de tener mi cita, ¿Qué hago?",
                    answer1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea in harum suscipit rerum laboriosam, aut eos quos odit pariatur facilis corrupti, impedit nulla cum quo quod voluptatum quis aspernatur?"
                },
                form: {
                    title: "Reserva tu turno",
                    personalData: "Datos Personales",
                    tattooDetails: "Detalles del Tatuaje",
                    fullName: "Nombre completo *",
                    age: "Fecha de nacimiento *",
                    email: "Email *",
                    phone: "Teléfono *",
                    style: "Estilo de tatuaje *",
                    idea: "Idea del tatuaje *",
                    placement: "Ubicación del tatuaje *",
                    size: "Tamaño del tatuaje *",
                    selectTattoo: "Seleccionar estilo",
                    tattooStyles: {
                        realismo: "Realismo",
                        surrealismo: "Surrealismo",
                        fineline: "Fine line",
                        neotradi: "Neotradicional"
                    },
                    next: "Siguiente",
                    back: "Atrás",
                    submit: "Enviar",
                    success: "Reserva enviada con éxito",
                    successMessage: "Giacotattooart se estará contactando con vos en estos días para enviarte el presupuesto y fecha disponible. Que tengas buen día &#128522;"
                },
                footer: {
                    menu: "Menú",
                    bookAppointment: "Reservar un turno"
                }
            }
        },
        en: {
            translation: {
                header: {
                    portfolio: "Portfolio",
                    booking: "Bookings",
                    faqs: "FAQs",
                    changeLanguage: "Change to Spanish",
                    back: "Back",
                    changeIcon: "media/change.svg"
                },
                hero: {
                    title: "Tattoo artist in Olavarría, Buenos Aires, Argentina",
                    bookNow: "Book now"
                },
                gallery: {
                    title: "GALLERY",
                    seeAll: "See all"
                },
                booking: {
                    title: "BOOKING",
                    beforeBooking: "Before booking",
                    info1: "Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",
                    info2: "Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",
                    info3: "Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",
                    important: "Important: Don’t forget to check your spam folder!",
                    bookButton: "Book now"
                },
                faqs: {
                    title: "FAQS",
                    question1: "After having my appointment, what should I do?",
                    answer1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea in harum suscipit rerum laboriosam, aut eos quos odit pariatur facilis corrupti, impedit nulla cum quo quod voluptatum quis aspernatur?"
                },
                form: {
                    title: "Book your appointment",
                    personalData: "Personal Data",
                    tattooDetails: "Tattoo Details",
                    fullName: "Full name *",
                    age: "Birthdate *",
                    email: "Email *",
                    phone: "Phone *",
                    style: "Tattoo style *",
                    idea: "Tattoo idea *",
                    placement: "Tattoo placement *",
                    size: "Tattoo size *",
                    selectTattoo: "Select style",
                    tattooStyles: {
                        realismo: "Realism",
                        surrealismo: "Surrealism",
                        fineline: "Fine line",
                        neotradi: "Neotraditional"
                    },
                    next: "Next",
                    back: "Back",
                    submit: "Submit",
                    success: "Reservation submitted successfully",
                    successMessage: "Giacotattooart will be contacting you soon to send your quote and available date. Have a great day &#128522;"
                },
                footer: {
                    menu: "Menú",
                    bookAppointment: "Book an appointment"
                }
            }
        }
    }
}, function (err, t) {
    // Verificar si el idioma está en sessionStorage y establecerlo
    const storedLanguage = sessionStorage.getItem('language');
    if (storedLanguage) {
        i18next.changeLanguage(storedLanguage, function (err, t) {
            updateContent();
            updateImages();
            updateTattooStyles();
        });
    } else {
        // Usa el idioma por defecto (español)
        updateContent();
        updateImages();
        updateTattooStyles();
    }
});

// Función para actualizar el contenido de la página
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === "SPAN") {
            element.textContent = i18next.t(key); // Solo cambia el texto del span
        } else {
            element.innerHTML = i18next.t(key);

        }
    });
}


function updateImages() {
    document.querySelectorAll('[data-i18n-img]').forEach(function (element) {
        const key = element.getAttribute('data-i18n-img');
        element.src = i18next.t(key);
    });
}

function updateTattooStyles() {
    if (document.getElementById('estilo')) { // Verificar si el select con id 'estilo' existe
        const tattooStyles = i18next.t('form.tattooStyles', { returnObjects: true }); // Obtener los estilos traducidos
        const selectElement = document.getElementById('estilo'); // Obtener el select por su ID
        selectElement.innerHTML = ''; // Limpiar las opciones existentes

        // Crear la opción por defecto
        const defaultOption = document.createElement('option');
        defaultOption.value = ''; // Valor vacío para la opción por defecto
        defaultOption.textContent = i18next.t('form.selectTattoo');
        selectElement.appendChild(defaultOption);

        // Crear las opciones de los estilos de tatuaje
        for (let key in tattooStyles) {
            const option = document.createElement('option');
            option.value = key;  // La clave del estilo se asigna como el valor
            option.textContent = tattooStyles[key];  // El texto visible es la traducción del estilo
            selectElement.appendChild(option);
        }
    }
}



// Obtener todos los botones con la clase "change-button" y asignarles el evento click
const change_buttons = document.querySelectorAll(".change-button");

change_buttons.forEach(function (button) {
    button.addEventListener("click", changeLanguage);
});

// Función para cambiar el idioma
function changeLanguage() {
    // Almacenar la posición del scroll antes de cambiar el idioma
    sessionStorage.setItem('languageChanging', 'true');


    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition);

    const newLanguage = i18next.language === 'es' ? 'en' : 'es'; // Cambiar entre español e inglés

    // Cambiar idioma solo si el idioma actual es diferente
    if (i18next.language !== newLanguage) {
        i18next.changeLanguage(newLanguage, function (err, t) {
            // Guardar el nuevo idioma en sessionStorage
            sessionStorage.setItem('language', newLanguage);

            // Actualizar contenido e imágenes
            updateContent();
            updateImages();
            updateTattooStyles();
            // Recargar la página para reflejar el cambio de idioma
            location.reload();
        });
    }
}
