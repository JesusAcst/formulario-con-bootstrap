document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Verifica que todos los campos estén correctos
    if (this.checkValidity()) {
        alert('Formulario enviado correctamente');
        this.reset(); // Reinicia el formulario después del envío
    }
});