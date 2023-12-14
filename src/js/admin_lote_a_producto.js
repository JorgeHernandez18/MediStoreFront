document.addEventListener("DOMContentLoaded", function () {
    const registerLoteBtn = document.getElementById("registerLote");

    if (registerLoteBtn) {
        registerLoteBtn.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Primero debes seleccionar un producto al cual asignar un lote");
            window.location.href = "admin_table_ConsulProduct.html";
        });
    }

    // Resto del código para otros elementos del navbar o funcionalidades adicionales
});
