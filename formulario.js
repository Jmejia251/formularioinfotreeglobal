(function() {
    emailjs.init("service_2mc7gg3"); // Reemplaza "YOUR_USER_ID" con tu usuario de EmailJS
})();

function submitForm() {
    const form = document.getElementById("contactForm");

    emailjs.sendForm("service_2mc7gg3", "template_j2kzi77TE_ID", form)
        .then(function(response) {
            alert("Formulario enviado");
            form.reset();

            // Reiniciar las selecciones
            const selects = document.querySelectorAll("select");
            selects.forEach(select => select.selectedIndex = 0);

            // Reiniciar los checkboxes
            const checkboxes = document.querySelectorAll("input[type='checkbox']");
            checkboxes.forEach(checkbox => checkbox.checked = false);
        }, function(error) {
            alert("Error al enviar el formulario. Inténtalo de nuevo.");
            console.error("Error al enviar el formulario", error);
        });
}