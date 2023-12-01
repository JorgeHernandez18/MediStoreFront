const backendURL = "http://localhost:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const btnAgregar = document.getElementById("Agregar");

    btnAgregar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const nombre = document.getElementById("nameUser").value;
        const apellido = document.getElementById("lastnameUser").value;
        const tipodoc = document.getElementById("tipoDocumento").value;
        const numerodoc = document.getElementById("numberDocument").value;
        const telefono = document.getElementById("numberPhone").value;
        const correo = document.getElementById("emailUser").value;
        const clave = document.getElementById("passwordUser").value;
        const rol = document.getElementById("rolUser").value;

        const datos = {
            nombre: string,
            apellido: string,
            tipodoc: string,
            numerodoc: string,
            telefono: string,
            correo: string,
            clave: string,
            rol: string
        };

        fetch(backendURL + "usuario/api/usuario", {
            method: "POST", // Método POST para enviar datos
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido JSON
            },
            body: JSON.stringify(datos) // Convertir datos a formato JSON
        })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes procesar la respuesta del servidor
            console.log("Respuesta del servidor: ", data);
            /*if (data === true) {
                console.log("Respuesta del backend:", data);
                // Las credenciales son válidas, redirige al usuario a la página principal.
                window.location.href = "../html/dashboard.html";
            } else {
                // Las credenciales son inválidas, muestra un mensaje de error.
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }*/
        })
        .catch(error => {
            // Manejo de errores, puedes personalizar este bloque según tus necesidades.
            console.error("Error en la solicitud Fetch: " + error);
        });
    });
});

document.getElementById("cancelar").addEventListener("click", ()=>{
    window.location.href = "index.html";
})