$(document).ready(function() {   
    // Obtener los datos JSON
    $.getJSON("https://164.92.95.34:8095/producto/api/productos", function(data) {
      // Rellenar la tabla
      $.each(data, function(i, item) {
        var fila = $("<tr>");
        fila.append($("<td>" + item.nombreComercial + "</td>"));
        fila.append($("<td>" + item.lote + "</td>"));
        fila.append($("<td>" + item.fechaVencimiento + "</td>"));
        fila.append($("<td>" + item.formula + "</td>"));
        fila.append($("<td>" + item.precio + "</td>"));
        fila.append($("<td>" + item.dosis + "</td>"));
        fila.append($("<td>" + item.disponible+ "</td>"));
        fila.append($("<td>" + 
                '<i class="fas fa-edit"></i> ' + // icono de editar
                '<i class="fas fa-trash-alt"></i> ' + // icono de eliminar
            '</td>'));
        $("#datos").append(fila);
      });      
    });
  });
  