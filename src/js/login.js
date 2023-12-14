const backendURL = "https://164.92.95.34:8095/";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const correo = document.getElementById("user").value;
    const contrasena = document.getElementById("clave").value;
    const rol = document.getElementById("rol").value;

    const datos = {
        correo: correo,
        clave: contrasena,
        rol: rol
    };

    fetch(backendURL + "auth/api/login", {
        method: "POST", // Método POST para enviar datos
        headers: {
            "Content-Type": "application/json" // Especificar el tipo de contenido JSON
        },
        body: JSON.stringify(datos) // Convertir datos a formato JSON
    })
    .then(response => response.json())
    .then(data => {
        // Aquí puedes procesar la respuesta del servidor
        if (data === true) {
            console.log("Respuesta del backend:", data);
            localStorage.setItem('sesion', datos.correo);
            // Las credenciales son válidas, redirige al usuario a la página principal.
            if(datos.rol === "administrador"){
                window.location.href = "dashboard.html";
            }else if(datos.rol === "regente"){
                window.location.href = "regente_dashboard.html";
            }
        } else {
            // Las credenciales son inválidas, muestra un mensaje de error.
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    })
    .catch(error => {
        // Manejo de errores, puedes personalizar este bloque según tus necesidades.
        console.error("Error en la solicitud Fetch: " + error);
    });
});
