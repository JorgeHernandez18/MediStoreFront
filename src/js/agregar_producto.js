const backendURL = "https://164.92.95.34:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const btnCrearP = document.getElementById("btnCrearP");

    btnCrearP.addEventListener("click", function (event) {
        console.log("El script agregar_producto.js se está ejecutando");

        event.preventDefault(); // Evitar que el formulario se envíe

        const nombre = document.getElementById("nombre").value;
        const fechaCreacion = document.getElementById("fecha-creacion-prod").value;
        const tipoUnidad = document.getElementById("unidad-prod").value;
        const concentracion = parseInt(document.getElementById("concentracion-prod").value, 10);
        const unidadConcentracion = document.getElementById("unidad-concentracion").value;
        const registroInvima = document.getElementById("registro-invima").value;
        const principioActivo = document.getElementById("principio-activo").value;
        const nombreComercial = document.getElementById("nombre-comercial").value;
        const presentacionComercial = document.getElementById("presentacion-comercial").value;

        // Validar que la fecha seleccionada sea la fecha actual
        const fechaActual = new Date().toISOString().slice(0, 10);
        if (fechaCreacion !== fechaActual) {
            alert("La fecha de creación debe ser la fecha actual.");
            return; // Detener el envío del formulario
        }

        // Validar que la concentración sea mayor a 0
        if (isNaN(concentracion) || concentracion <= 0) {
            alert("La concentración debe ser un valor numérico mayor a 0.");
            return; // Detener el envío del formulario
        }

        const datos = {
            nombre: nombre,
            fecha_creacion: fechaCreacion,
            unidad: tipoUnidad,
            concentracion: concentracion + " " + unidadConcentracion,
            registro_invima: registroInvima,
            principio_activo: principioActivo,
            nombre_comercial: nombreComercial,
            presentacion_comercial: presentacionComercial
        };

        fetch(backendURL + "producto/api/producto", {
            method: "POST", // Método POST para enviar datos
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido JSON
            },
            body: JSON.stringify(datos) // Convertir datos a formato JSON
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Error en la solicitud Fetch');
        })
        .then(data => {
            document.getElementById("formulario_agregarP").reset();
            alert("Producto creado con éxito");
            // Aquí puedes procesar la respuesta del servidor
            console.log("Respuesta del servidor data: ", data);
        })
        .catch(error => {
            // Manejo de errores, puedes personalizar este bloque según tus necesidades.
            console.error("Error en la solicitud Fetch: " + error.message);
        });
    });
});
