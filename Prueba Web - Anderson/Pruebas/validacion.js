// Validación del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || asunto.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa todos los campos del formulario.");
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        event.preventDefault();
    }
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}



