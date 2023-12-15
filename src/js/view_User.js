$(document).ready(function() {   
    // Obtener los datos JSON
    $.getJSON("https://164.92.95.34:8095/usuario/api/usuarios", function(data) {
      // Rellenar la tabla
      $.each(data, function(i, item) {
        var fila = $("<tr>");
        fila.append($("<td>" + item.rol + "</td>"));
        fila.append($("<td>" + item.nombre + "</td>"));
        fila.append($("<td>" + item.apellido + "</td>"));
        fila.append($("<td>" + item.tipodoc + "</td>"));
        fila.append($("<td>" + item.numerodoc + "</td>"));
        fila.append($("<td>" + item.telefono + "</td>"));
        fila.append($("<td>" + item.correo + "</td>"));
        fila.append($("<td>" + item.clave + "</td>"));
        // Celda para los botones de editar y eliminar
        var acciones = $("<td>");
        var editarBtn = $("<i class='fas fa-edit' style='cursor: pointer;'></i>").click(function() {
          editarUser(item.id); // Lógica para editar lote aquí
        });
        var eliminarBtn = $("<i class='fas fa-trash-alt' style='cursor: pointer;'></i>").click(function() {
          eliminarUser(item.id); // Lógica para eliminar lote aquí
        });
        acciones.append(editarBtn).append(eliminarBtn);
        fila.append(acciones);
  
        $("#datos").append(fila);
      });      
    });

    function getUserById(id) {
      // Retorna la promesa resultante de la petición GET a la API para obtener el usuario por su ID
      return fetch(`https://164.92.95.34:8095/usuario/api/usuarios/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener el usuario");
          }
          return response.json(); // Devuelve los datos del usuario en formato JSON
        })
        .catch((error) => {
          // Manejar errores en la obtención del usuario
          console.error("Error al obtener el usuario:", error);
          throw error; // Propaga el error para que sea manejado en la parte que llama a getUserById
        });
    }
    
    // Llamada a getUserById con manejo de la promesa resultante
    function editarUser(id) {
      getUserById(id)
        .then((user) => {
          // Llenar el formulario con los datos del usuario
          document.getElementById("rol").value = user.rol;
          document.getElementById("nombre").value = user.nombre;
          document.getElementById("apellido").value = user.apellido;
          document.getElementById("tipo_doc").value = user.tipodoc;
          document.getElementById("numero_doc").value = user.numerodoc;
          document.getElementById("telefono").value = user.telefono;
          document.getElementById("correo").value = user.correo;
          document.getElementById("contrasena").value = user.clave;
    
          // Mostrar el formulario de edición
          document.querySelector(".editar-formulario").style.display = "block";
        })
        .catch((error) => {
          // Manejar errores en la obtención del usuario
          console.error("Error al obtener el usuario:", error);
        });
    }
    

    function eliminarUser(id) {
      // Realiza la petición DELETE a tu API para eliminar el usuario por su ID
      fetch(`https://164.92.95.34:8095/usuario/api/usuario/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
          }
          // Aquí puedes realizar acciones adicionales después de eliminar el usuario
          console.log("Usuario eliminado con ID:", id);
        })
        .catch((error) => {
          // Manejar errores en la eliminación del usuario
          console.error("Error al eliminar el usuario:", error);
        });
    }
  });
  