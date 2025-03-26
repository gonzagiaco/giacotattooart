// document.getElementById('custom-file-button').addEventListener('click', function () {
//     document.getElementById('imagen').click();  // Esto hace clic en el input file oculto
// });

// // Función para previsualizar la imagen seleccionada
// document.getElementById('imagen').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const image = document.getElementById('image-preview');
//             image.src = e.target.result;  // Asignamos el resultado al src de la imagen
//             image.style.display = 'block';  // Mostramos la imagen
//         };
//         reader.readAsDataURL(file);  // Leemos el archivo como URL de datos
//     }
// });