const backendURL = "https://164.92.95.34:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const btnAgregar = document.getElementById("btnAgregar");

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
            nombre: nombre,
            apellido: apellido,
            tipodoc: tipodoc,
            numerodoc: numerodoc,
            telefono: telefono,
            correo: correo,
            clave: clave,
            rol: rol
        };

        fetch(backendURL + "usuario/api/usuario", {
            method: "POST", // Método POST para enviar datos
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido JSON
            },
            body: JSON.stringify(datos) // Convertir datos a formato JSON
        })
        .then(response => console.log("Respuesta del servidor response: ", response.text()))
        .then(data => {

            document.getElementById("formulario_agregarU").reset();
            alert("Usuario creado con exito");
            // Aquí puedes procesar la respuesta del servidor
            console.log("Respuesta del servidor data: ", data);
        })
        .catch(error => {
            // Manejo de errores, puedes personalizar este bloque según tus necesidades.
            console.error("Error en la solicitud Fetch: " + error);
        });
    });
});

