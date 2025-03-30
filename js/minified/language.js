function updateContent(){document.querySelectorAll("[data-i18n]").forEach(function(e){var t=e.getAttribute("data-i18n");"SPAN"===e.tagName?e.textContent=i18next.t(t):e.innerHTML=i18next.t(t)})}function updateImages(){document.querySelectorAll("[data-i18n-img]").forEach(function(e){var t=e.getAttribute("data-i18n-img");e.src=i18next.t(t)})}function updateTattooStyles(){if(document.getElementById("estilo")){var e,t=i18next.t("form.tattooStyles",{returnObjects:!0}),a=document.getElementById("estilo"),o=(a.innerHTML="",document.createElement("option"));for(e in o.value="",o.textContent=i18next.t("form.selectTattoo"),a.appendChild(o),t){var n=document.createElement("option");n.value=e,n.textContent=t[e],a.appendChild(n)}}}i18next.init({lng:"es",resources:{es:{translation:{header:{portfolio:"Portafolio",booking:"Reservas",faqs:"Preguntas",changeLanguage:"Cambiar a inglés",back:"Volver",changeIcon:"media/change.svg"},hero:{title:"Artista de tatuajes en Olavarría, Buenos Aires, ",bookNow:"Reservar ahora"},gallery:{title:"GALERÍA",seeAll:"Ver todo"},booking:{title:"RESERVAS",beforeBooking:"Antes de reservar",info1:"¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",info2:"¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",info3:"¡La mayoría de tus preguntas probablemente ya estén respondidas en nuestras FAQ! Completa este formulario con la mayor precisión posible, ya que usaremos esta información para crear tu presupuesto y programar tu cita.",important:"Importante: ¡No olvides revisar tu carpeta de spam!",bookButton:"Reservar ahora"},faqs:{title:"PREGUNTAS",question1:"Después de tener mi cita, ¿Qué hago?",answer1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea in harum suscipit rerum laboriosam, aut eos quos odit pariatur facilis corrupti, impedit nulla cum quo quod voluptatum quis aspernatur?"},form:{title:"Reserva tu turno",personalData:"Datos Personales",tattooDetails:"Detalles del Tatuaje",fullName:"Nombre completo *",age:"Fecha de nacimiento *",email:"Email *",phone:"Teléfono *",style:"Estilo de tatuaje *",idea:"Idea del tatuaje *",placement:"Ubicación del tatuaje *",size:"Tamaño del tatuaje *",selectTattoo:"Seleccionar estilo",tattooStyles:{realismo:"Realismo",surrealismo:"Surrealismo",fineline:"Fine line",neotradi:"Neotradicional"},next:"Siguiente",back:"Atrás",submit:"Enviar",success:"Reserva enviada con éxito",successMessage:"Giacotattooart se estará contactando con vos en estos días para enviarte el presupuesto y fecha disponible. Que tengas buen día &#128522;"},footer:{menu:"Menú",bookAppointment:"Reservar un turno"}}},en:{translation:{header:{portfolio:"Portfolio",booking:"Bookings",faqs:"FAQs",changeLanguage:"Change to Spanish",back:"Back",changeIcon:"media/change.svg"},hero:{title:"Tattoo artist in Olavarría, Buenos Aires, ",bookNow:"Book now"},gallery:{title:"GALLERY",seeAll:"See all"},booking:{title:"BOOKING",beforeBooking:"Before booking",info1:"Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",info2:"Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",info3:"Most of your questions are likely already answered in our FAQ! Please fill out this form as accurately as possible, as we will use this information to create your quote and schedule your appointment.",important:"Important: Don’t forget to check your spam folder!",bookButton:"Book now"},faqs:{title:"FAQS",question1:"After having my appointment, what should I do?",answer1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea in harum suscipit rerum laboriosam, aut eos quos odit pariatur facilis corrupti, impedit nulla cum quo quod voluptatum quis aspernatur?"},form:{title:"Book your appointment",personalData:"Personal Data",tattooDetails:"Tattoo Details",fullName:"Full name *",age:"Birthdate *",email:"Email *",phone:"Phone *",style:"Tattoo style *",idea:"Tattoo idea *",placement:"Tattoo placement *",size:"Tattoo size *",selectTattoo:"Select style",tattooStyles:{realismo:"Realism",surrealismo:"Surrealism",fineline:"Fine line",neotradi:"Neotraditional"},next:"Next",back:"Back",submit:"Submit",success:"Reservation submitted successfully",successMessage:"Giacotattooart will be contacting you soon to send your quote and available date. Have a great day &#128522;"},footer:{menu:"Menú",bookAppointment:"Book an appointment"}}}}},function(e,t){var a=sessionStorage.getItem("language");a?i18next.changeLanguage(a,function(e,t){updateContent(),updateImages(),updateTattooStyles()}):(updateContent(),updateImages(),updateTattooStyles())});let change_buttons=document.querySelectorAll(".change-button");function changeLanguage(){sessionStorage.setItem("languageChanging","true");var e=window.scrollY;sessionStorage.setItem("scrollPosition",e);let a="es"===i18next.language?"en":"es";i18next.language!==a&&i18next.changeLanguage(a,function(e,t){sessionStorage.setItem("language",a),updateContent(),updateImages(),updateTattooStyles(),location.reload()})}change_buttons.forEach(function(e){e.addEventListener("click",changeLanguage)});