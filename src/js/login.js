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
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data === true) {
            console.log("Respuesta del backend:", data);
            localStorage.setItem('currentUser', JSON.stringify(datos));

            // Redirigir según el rol
            if (datos.rol === "administrador") {
                window.location.href = "dashboard.html";
            } else if (datos.rol === "regente") {
                window.location.href = "regente_dashboard.html";
            }
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    })
    .catch(error => {
        console.error("Error en la solicitud Fetch: " + error);
    });
});

// Cancelar el envío del formulario
document.getElementById("cancelBtn").addEventListener("click", function () {
    window.location.href = "index.html";
});