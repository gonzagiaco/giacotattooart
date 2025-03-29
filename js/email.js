emailjs.init("QtCW-kONeEZxQWI48");

btn_book = document.getElementById("btn-book");
btn_book.addEventListener("click", openModal);
btn_close = document.getElementById("close-modal");
modal_overlay = document.querySelector(".modal-overlay");
btn_back = document.getElementById("back-btn");
btn_next = document.getElementById("btn-next");

modal_overlay.addEventListener("click", closeModal);
btn_back.addEventListener("click", prevStep);
btn_next.addEventListener("click", nextStep);

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function nextStep() {
    if (!validarStep1()) return;

    document.getElementById("step1").classList.remove("active");
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").classList.add("active");
    document.getElementById("step2").style.display = "flex";
}

function prevStep() {
    // Limpiar errores del step 2 antes de ir a step 1
    let inputsStep2 = document.querySelectorAll("#step2 input, #step2 select, #step2 textarea");
    inputsStep2.forEach(input => {
        let errorP = document.getElementById(`error-${input.id}`);
        if (errorP) errorP.textContent = ""; // Borrar mensajes de error
        input.style.borderBottom = "1px solid #ccc"; // Restaurar el borde
    });

    document.getElementById("step2").classList.remove("active");
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").classList.add("active");
    document.getElementById("step1").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    resetFormulario();
}

function resetFormulario() {
    document.getElementById("booking-form").reset(); // Reinicia el formulario

    // Restablecer estilos y mensajes de error
    let inputs = document.querySelectorAll("#booking-form input, #booking-form select, #booking-form textarea");
    inputs.forEach(input => {
        input.style.borderBottom = "1px solid #ccc"; // Restaurar el borde
        let errorP = document.getElementById(`error-${input.id}`);
        if (errorP) errorP.textContent = ""; // Borrar mensajes de error
    });

    // Reiniciar a Step 1
    document.getElementById("step1").style.display = "flex";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
}

btn_close.addEventListener("click", closeModal);



// VALIDACIONES

function mostrarError(id, mensaje) {
    let input = document.getElementById(id);
    let errorP = document.getElementById(`error-${id}`);

    if (mensaje) {
        input.style.borderBottom = "1px solid red";
        errorP.textContent = mensaje;
        errorP.style.color = "red";
    } else {
        input.style.borderBottom = "1px solid #ccc";
        errorP.textContent = "";
    }
}

function validarStep1() {
    let valido = true;

    let campos = [
        { id: "nombre", valor: document.getElementById("nombre").value.trim() },
        { id: "edad", valor: document.getElementById("edad").value.trim() },
        { id: "email", valor: document.getElementById("email").value.trim() },
        { id: "telefono", valor: document.getElementById("telefono").value.trim() }
    ];

    // Primero verificamos si los campos están vacíos
    campos.forEach(campo => {
        if (campo.valor === "") {
            mostrarError(campo.id, "Este campo es obligatorio");
            valido = false;
        } else {
            mostrarError(campo.id, ""); // Borra el mensaje de error si ya tiene contenido
        }
    });

    // Si algún campo está vacío, no seguimos con más validaciones
    if (!valido) return false;

    // Validaciones específicas
    let nombreRegex = /^[a-zA-Z\s]+$/;  // Solo letras y espacios
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de email
    let telefonoRegex = /^\+?[0-9\s]{7,15}$/;  // Solo números, mínimo 7 dígitos
    let edad = parseInt(document.getElementById("edad").value.trim());

    if (!nombreRegex.test(document.getElementById("nombre").value.trim())) {
        mostrarError("nombre", "El nombre solo puede contener letras y espacios");
        valido = false;
    }

    if (isNaN(edad) || edad < 18 || edad > 99) {
        mostrarError("edad", "Debe ser un número entre 18 y 99 años");
        valido = false;
    }

    if (!emailRegex.test(document.getElementById("email").value.trim())) {
        mostrarError("email", "Ingrese un email válido (ejemplo@correo.com)");
        valido = false;
    }

    if (!telefonoRegex.test(document.getElementById("telefono").value.trim())) {
        mostrarError("telefono", "Ingrese un número válido");
        valido = false;
    }

    return valido;
}

function validarStep2() {
    let campos = [
        { id: "estilo", valor: document.getElementById("estilo").value.trim() },
        { id: "idea", valor: document.getElementById("idea").value.trim() },
        { id: "ubicacion", valor: document.getElementById("ubicacion").value.trim() },
        { id: "tamano", valor: document.getElementById("tamano").value.trim() },
        
    ];

    let valido = true;

    campos.forEach(campo => {
        let input = document.getElementById(campo.id);
        if (input.value.trim() === "") {
            mostrarError(campo.id, "Este campo es obligatorio");
            valido = false;
        } else {
            mostrarError(campo.id, "");
        }
    });


    return valido;
}



document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();
    if(!validarStep2()) return; // Validar Step 2 antes de enviar el formulario
    
    let btnEnviar = document.getElementById("btn-enviar");
    //let arrow = document.getElementById("arrow-enviar");

    // Registrar el tiempo inicial
    let startTime = performance.now();

    const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        edad: document.getElementById("edad").value,
        telefono: document.getElementById("telefono").value,
        estilo: document.getElementById("estilo").value,
        idea: document.getElementById("idea").value,
        ubicacion: document.getElementById("ubicacion").value,
        tamano: document.getElementById("tamano").value,
    };

    emailjs.send("service_1j8y7x4", "template_0ms5mmg", formData)
        .then(() => {
            // Registrar el tiempo final
            let endTime = performance.now();
            let duration = (endTime - startTime) / 1000; // Convertir a segundos

            // Aplicar duración dinámica a la animación
            btnEnviar.style.transition = `transform ${duration}s ease-in-out`;

            // Agregar la clase para iniciar la animación
            btnEnviar.classList.add("sending");

            setTimeout(() => {
                btnEnviar.classList.remove("sending"); // Restablecer animación
                document.getElementById("step1").style.display = "none";
                document.getElementById("step2").style.display = "none";
                document.getElementById("step3").style.display = "flex";
                document.getElementById("form-title").style.display = "none";
                document.getElementById("step3").classList.add("active");
            }, duration * 1000); // Usar el tiempo real del envío

        }, (error) => {
            alert("Error al enviar el formulario");
            console.error(error);
        });
});
