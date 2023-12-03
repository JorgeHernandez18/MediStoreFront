$(document).ready(function() {   
    // Obtener los datos JSON
    $.getJSON("https://164.92.95.34:8095/usuario/api/usuarios", function(data) {
      // Rellenar la tabla
      $.each(data, function(i, item) {
        var fila = $("<tr>");
        fila.append($("<td>" + item.rol + "</td>"));
        fila.append($("<td>" + item.nombre + "</td>"));
        fila.append($("<td>" + item.apellido + "</td>"));
        fila.append($("<td>" + item.telefono + "</td>"));

        $("#datos").append(fila);
      });      
    });
  });