$(document).ready(function() {
    let lotesData; // Variable para almacenar los datos de lotes
  
    // Obtener los datos JSON
    $.getJSON("https://164.92.95.34:8095/lote/api/lotes", function(data) {
      lotesData = data; // Almacena los datos en la variable lotesData
  
      // Rellenar la tabla
      $.each(data, function(i, item) {
        var fila = $("<tr>");
        fila.append($("<td>" + item.nombreLote + "</td>"));
        fila.append($("<td>" + item.cantidad + "</td>"));
        fila.append($("<td>" + item.fecha_vencimiento + "</td>"));
        fila.append($("<td>" + item.precio_compra_unidad + "</td>"));
        fila.append($("<td>" + item.precio_venta_unidad + "</td>"));
        fila.append($("<td>" + "ID:"+ item.producto.id + ",P:" +item.producto.nombre + "</td>"));
        // Celda para los botones de editar y eliminar
        var acciones = $("<td>");
        var editarBtn = $("<i class='fas fa-edit' style='cursor: pointer;'></i>").click(function() {
          editarLote(item.id); // Lógica para editar lote aquí
        });
        var eliminarBtn = $("<i class='fas fa-trash-alt' style='cursor: pointer;'></i>").click(function() {
          eliminarLote(item.id); // Lógica para eliminar lote aquí
        });
        acciones.append(editarBtn).append(eliminarBtn);
        fila.append(acciones);
  
        $("#datos").append(fila);
      });
    });
  
    function editarLote(id) {
      // Busca el lote por su ID en la variable lotesData
      const lote = lotesData.find((item) => item.id == id);
  
      // Llenar el formulario con los datos del lote
      document.getElementById("nombreLote").value = lote.nombreLote;
      document.getElementById("cantidad").value = lote.cantidad;
      document.getElementById("fecha_vencimiento").value = lote.fecha_vencimiento;
      document.getElementById("precio_compra_unidad").value = lote.precio_compra_unidad;
      document.getElementById("precio_venta_unidad").value = lote.precio_venta_unidad;
      document.getElementById("producto").value = lote.producto.id;
  
      // Mostrar el formulario de edición
      document.getElementById("edicion").style.display = "block";
    }
  
    function eliminarLote(id) {
      // Realiza la petición DELETE a tu API para eliminar el lote por su ID
      fetch(`https://164.92.95.34:8095/lote/api/lote/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar el lote");
          }
          console.log("Lote eliminado con ID:", id);
        })
        .catch((error) => {
          console.error("Error al eliminar el lote:", error);
        });
    }
  });
  