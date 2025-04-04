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
                    title: "Artista de tatuajes en Olavarría, Buenos Aires, ",
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
                    bookAppointment: "Reservar un turno",
                    copyright: "Derechos reservados © 2023 Giacotattooart. Todos los derechos reservados.",
                    politics: "Política de privacidad"
                },
                privacyPolicy: {
                    title: "Política de privacidad",
                    intro: "Esta Política de Privacidad establece los términos en que Giacotattooart usa y protege la información proporcionada por sus usuarios al utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse de que está de acuerdo con dichos cambios.",
                    infoCollection: {
                        title: "Información que es recogida",
                        content: "Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónico e información demográfica. Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación."
                    },
                    infoUsage: {
                        title: "Uso de la información recogida",
                        content: "Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio. Estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento. Giacotattooart está altamente comprometido con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos de que no exista ningún acceso no autorizado."
                    },
                    cookies: {
                        title: "Cookies",
                        content: "Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador. Al aceptar dicho fichero, la cookie se crea y sirve para obtener información respecto al tráfico web, facilitando futuras visitas a un sitio recurrente. Otra función que tienen las cookies es que con ellas las webs pueden reconocerte individualmente y brindarte un mejor servicio personalizado. Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y luego se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo, las cookies ayudan a proporcionar un mejor servicio en los sitios web; no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, pero la mayoría de los navegadores las aceptan automáticamente porque sirven para mejorar la experiencia web. También puede cambiar la configuración de su navegador para declinar las cookies. Sin embargo, si se declinan, es posible que no pueda utilizar algunos de nuestros servicios."
                    },
                    thirdPartyLinks: {
                        title: "Enlaces a Terceros",
                        content: "Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted haga clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre el sitio al que es redirigido, y por lo tanto, no somos responsables de los términos de privacidad ni de la protección de sus datos en esos sitios de terceros. Dichos sitios están sujetos a sus propias políticas de privacidad, por lo cual es recomendable que las consulte para confirmar que está de acuerdo con ellas."
                    },
                    control: {
                        title: "Control de su información personal",
                        content: "En cualquier momento, usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad, puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con una orden judicial."
                    },
                    changes: "Giacotattooart se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.",
                    generatedBy: "Esta política de privacidad ha sido generada en politicadeprivacidadplantilla.com"
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
                    title: "Tattoo artist in Olavarría, Buenos Aires, ",
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
                    bookAppointment: "Book an appointment",
                    copyright: "Copyright © 2023 Giacotattooart. All rights reserved.",
                    politics: "Privacy Policy"
                },
                privacyPolicy: {
                    title: "Privacy Policy",
                    intro: "This Privacy Policy outlines the terms under which Giacotattooart uses and protects the information provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill out personal information fields with which you may be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize reviewing this page regularly to ensure you agree with such changes.",
                    infoCollection: {
                        title: "Information Collected",
                        content: "Our website may collect personal information such as name, contact information like your email address, and demographic information. Additionally, when necessary, specific information may be required to process an order or perform delivery or billing."
                    },
                    infoUsage: {
                        title: "Use of Collected Information",
                        content: "Our website uses the information to provide the best possible service, particularly to maintain a record of users, orders if applicable, and improve our products and services. Periodic emails may be sent through our website with special offers, new products, and other advertising information we consider relevant to you or that may provide you with some benefit. These emails will be sent to the address you provide and can be canceled at any time. Giacotattooart is highly committed to keeping your information secure. We use the most advanced systems and continuously update them to ensure there is no unauthorized access."
                    },
                    cookies: {
                        title: "Cookies",
                        content: "A cookie refers to a file that is sent to request permission to be stored on your computer. By accepting this file, the cookie is created and serves to obtain information about web traffic, facilitating future visits to a recurring site. Another function of cookies is that they allow websites to recognize you individually and provide a better personalized service. Our website uses cookies to identify the pages that are visited and their frequency. This information is used only for statistical analysis and is then permanently deleted. You can delete cookies at any time from your computer. However, cookies help provide a better service on websites; they do not give access to your computer's or your personal information unless you want to provide it directly. You can accept or deny the use of cookies, but most browsers automatically accept them as they help improve the web experience. You can also change your browser settings to decline cookies. However, if you decline them, some of our services may not be available."
                    },
                    thirdPartyLinks: {
                        title: "Third-Party Links",
                        content: "This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site you are redirected to, and therefore, we are not responsible for the privacy terms or protection of your data on those third-party sites. These sites are subject to their own privacy policies, so it is recommended that you review them to confirm that you agree with them."
                    },
                    control: {
                        title: "Control of Your Personal Information",
                        content: "At any time, you can restrict the collection or use of personal information provided to our website. Each time you are asked to fill out a form, such as a user registration form, you can check or uncheck the option to receive information by email. If you have marked the option to receive our newsletter or advertisements, you can cancel it at any time. This company will not sell, lease, or distribute the personal information collected without your consent, unless required by a judge with a court order."
                    },
                    changes: "Giacotattooart reserves the right to change the terms of this Privacy Policy at any time.",
                    generatedBy: "This privacy policy was generated on politicadeprivacidadplantilla.com"
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
