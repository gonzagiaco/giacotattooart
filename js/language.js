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
                    info1: "¡Seguramente ya encontraste la mayoría de las respuestas en nuestras FAQs! Ahora, por favor completá este formulario con la mayor precisión posible: esa info es la base para armar tu presupuesto y coordinar la cita.",
                    info2: "Usá una regla para indicar el tamaño aproximado del tatuaje. Sé muy preciso al describir tu idea: objetos, formas, fondo, colores, estilo, todo detalle suma. Adjuntá también imágenes de referencia. Recordá que no replicamos otros tatuajes: ¡cada diseño es 100% original!",
                    info3: "Una vez que envíes el formulario, te escribimos por mail/WhatsApp en 3–5 días hábiles. Te enviaremos un presupuesto estimado y una propuesta de fecha y hora. Si ese horario no te cuadra, avisanos y buscamos otra alternativa que se ajuste a tu agenda.",
                    important: "Importante: ¡No olvides revisar tu carpeta de spam!",
                    bookButton: "Reservar ahora"
                },
                faqs: {
                    title: "PREGUNTAS",
                    question1: "¿Tengo que ser mayor de edad para tatuarme?",
                    answer1: "Sí, sí o sí tenés que tener 18 años cumplidos. No tatuamos a menores, ni aunque vengan con permiso o acompañados por sus padres.",
                    question2: "Una vez que reservo la fecha, ¿qué sigue?",
                    answer2: "Si ya estás de acuerdo con el presupuesto y el día, el siguiente paso es hacer una seña del 40% del valor total para confirmar la cita.",
                    question3: "¿Qué formas de pago aceptan?",
                    answer3: "Podés pagar en efectivo o por transferencia. También usamos MercadoPago y Binance, pero ojo que esas plataformas suelen cobrar una comisión extra.",
                    question4: "¿Cómo me preparo antes del turno?",
                    answer4: "Cuidá tu piel: tomá agua, mantenela hidratada y evitá el alcohol por lo menos 24 horas antes. Dormí bien la noche anterior y no vengas en ayunas. ¡Todo esto ayuda a que la sesión sea más llevadera!",
                    question5: "¿Puedo ver el diseño antes del turno?",
                    answer5: "No mandamos los diseños por adelantado. Cada tatuaje es una obra original y queremos proteger el laburo del artista. Vas a poder verlo el mismo día de la sesión y, si querés ajustar algo, lo charlás en persona. Cambios grandes o ideas nuevas no se pueden hacer en el momento, así que mejor hablarlo con tiempo.",
                    question6: "¿Qué pasa si tengo que cancelar?",
                    answer6: "Si necesitás cancelar, avisanos con al menos una semana de anticipación y te devolvemos la seña. Si avisás con menos tiempo, lamentablemente el depósito no es reembolsable.",
                    question7: "¿Puedo ir acompañado al estudio?",
                    answer7: "Sabemos que a veces se necesita apoyo, pero el espacio es reducido y buscamos mantener un ambiente tranquilo. Si es imprescindible, podés venir con una sola persona. En lo posible, mejor vení solo/a.",
                    question8: "¿Se puede tatuar sobre una cicatriz?",
                    answer8: "Depende. Si la cicatriz es nueva, conviene esperar entre 12 y 18 meses. Siempre es buena idea que la vea tu médico antes. Tené en cuenta que la piel en esa zona es distinta y eso puede afectar cómo se ve y se cura el tatuaje.",
                    question9: "¿Y si tengo alergias?",
                    answer9: "Las alergias pueden aparecer por muchas razones, incluso si ya tenés tatuajes previos. Si sos alérgico o tenés antecedentes, contanos antes de la cita. Podemos decirte qué tintas usamos y ofrecerte una prueba por un costo mínimo, así podés hablarlo con tu médico.",
                    question10: "¿Y si tengo tendencia a hacer queloides?",
                    answer10: "En ese caso, lo primero es hablar con un dermatólogo. Si te da el ok, te podemos recomendar la técnica de handpoke, que es más suave para la piel y cicatriza mejor.",
                    question11: "¿Puedo tatuarme si estoy bronceado/a?",
                    answer11: "No lo recomendamos. La piel bronceada o quemada está más sensible y se descama, lo que puede afectar el resultado del tatuaje. Lo ideal es esperar a que la piel esté bien recuperada.",
                    question12: "¿Puedo tatuarme un diseño que vi de otro artista?",
                    answer12: "Por respeto al arte y al trabajo de otros/as tatuadores/as, evitamos copiar diseños ajenos. Si querés algo famoso o de inspiración, lo charlamos y vemos cómo adaptarlo con nuestro estilo propio.",
                    question13: "¿Puedo usar crema anestésica antes de tatuarme?",
                    answer13: "Preferimos que no. El dolor es una señal útil para saber cuándo parar. Además, esas cremas alteran la textura de la piel y pueden complicar el trabajo del artista. Mejor venir sin nada."
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
                    info1: "You’ve probably found most of your answers in our FAQs! Now, please fill out this form as accurately as possible—this info is what we’ll use to prepare your quote and schedule your appointment.",
                    info2: "Use a ruler to indicate the approximate size of the tattoo. Be very precise when describing your idea: objects, shapes, background, colors, style—every detail helps. Also attach reference images. Remember, we don’t replicate other tattoos: every design is 100% original!",
                    info3: "Once you submit the form, we’ll get in touch via email/WhatsApp within 3–5 business days. You’ll receive an estimated quote and a suggested date and time. If that slot doesn’t work for you, let us know and we’ll find another option that fits your schedule.",
                    important: "Important: Don’t forget to check your spam folder!",
                    bookButton: "Book now"
                },
                faqs: {
                    title: "QUESTIONS",
                    question1: "Do I have to be of legal age to get a tattoo?",
                    answer1: "Yes, you must be at least 18 years old. We do not tattoo minors, even with parental permission or supervision.",
                    question2: "Once I book my appointment, what’s next?",
                    answer2: "If you’re happy with the quote and the date, the next step is to pay a 40% deposit of the total cost to confirm your appointment.",
                    question3: "What payment methods do you accept?",
                    answer3: "You can pay in cash or via bank transfer. We also accept MercadoPago and Binance, but keep in mind these platforms usually charge an extra fee.",
                    question4: "How should I prepare before the session?",
                    answer4: "Take care of your skin: drink plenty of water, keep it moisturized, and avoid alcohol for at least 24 hours before. Get a good night’s sleep and don’t come on an empty stomach. All this helps make the session smoother!",
                    question5: "Can I see the design before the session?",
                    answer5: "We don’t send designs in advance. Every tattoo is an original piece, and we protect the artist’s work. You’ll see the design on the day of your session, and if you want to tweak anything, you can discuss it in person. Major changes or new elements can’t be added last minute, so it’s best to plan ahead.",
                    question6: "What happens if I need to cancel?",
                    answer6: "If you need to cancel, let us know at least one week in advance and we’ll refund your deposit. If you cancel with less than a week’s notice, the deposit is non-refundable.",
                    question7: "Can I bring someone with me to the studio?",
                    answer7: "We get that you might want moral support, but our space is small and we aim to keep a calm atmosphere. If absolutely necessary, you can bring one person. Otherwise, it’s best to come alone.",
                    question8: "Can I get a tattoo over a scar?",
                    answer8: "It depends. If the scar is recent, it’s best to wait 12 to 18 months. Always have your doctor check it first. Remember, scar tissue is different from healthy skin and it can affect the look and healing of the tattoo.",
                    question9: "What about allergies?",
                    answer9: "Allergies can happen for many reasons, even if you’ve had tattoos before. If you have allergies or a history of reactions, let us know ahead of time. We can tell you which inks we use and offer a patch test for a small fee so you can consult your doctor.",
                    question10: "What if I’m prone to keloids?",
                    answer10: "In that case, consult a dermatologist first. If you get the green light, we recommend the handpoke technique, which is gentler on the skin and has a smoother healing process.",
                    question11: "Can I get a tattoo if my skin is tanned?",
                    answer11: "We don’t recommend it. Tanned or sunburned skin is more sensitive and peels, which can affect the tattoo. It’s best to wait until your skin is fully healed.",
                    question12: "Can I get a tattoo of another artist’s design?",
                    answer12: "Out of respect for the art and other tattooers, we avoid copying someone else’s work. If you want something famous or inspired, we can discuss adapting it in our own style.",
                    question13: "Is it okay to use numbing cream before getting tattooed?",
                    answer13: "We prefer you don’t. Pain is your body’s way of telling you when to take a break. Plus, numbing creams alter skin texture and can make it harder for the artist to work. Better to come without anything."
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
    location.reload();
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
        });
    }
}
