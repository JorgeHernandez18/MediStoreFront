const backendURL = "https://164.92.95.34:8095/";

document.addEventListener("DOMContentLoaded", function () {
    const btnCrearP = document.getElementById("btnCrearP");

    btnCrearP.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const nombreComercial = document.getElementById("nom_Comercial").value;
        const lote = document.getElementById("lote_Product").value;
        const fechaIngreso = document.getElementById("fecha_Ingreso").value;
        const fechaVencimiento = document.getElementById("fecha_Vencimiento").value;
        const precio = parseInt(document.getElementById("price_Product").value, 10);
        const formula = document.getElementById("formula").value;
        const dosis = document.getElementById("dosis").value;
        const marca = document.getElementById("marca").value;
        const disponible = document.getElementById("disponible").value;
        const disponibleBody = false;
        if(disponible === "true"){
            disponibleBody = true;
        }

        const datos = {
            nombreComercial: nombreComercial,
            lote: lote,
            fechaIngreso: fechaIngreso,
            fechaVencimiento: fechaVencimiento,
            precio: precio,
            formula: formula,
            dosis: dosis,
            marca: marca,
            disponible: disponibleBody
        };

        fetch(backendURL + "producto/api/producto", {
            method: "POST", // Método POST para enviar datos
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido JSON
            },
            body: JSON.stringify(datos) // Convertir datos a formato JSON
        })
        .then(response => console.log("Respuesta del servidor response: ", response.text()))
        .then(data => {

            document.getElementById("formulario_agregarP").reset();
            alert("Producto creado con exito");
            // Aquí puedes procesar la respuesta del servidor
            console.log("Respuesta del servidor data: ", data);
        })
        .catch(error => {
            // Manejo de errores, puedes personalizar este bloque según tus necesidades.
            console.error("Error en la solicitud Fetch: " + error);
        });
    });
});
