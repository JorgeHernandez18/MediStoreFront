$(document).ready(function() {
  let productsData; // Variable para almacenar los datos de productos

  // Obtener los datos JSON
  $.getJSON("https://164.92.95.34:8095/producto/api/productos", function(data) {
    productsData = data; // Almacena los datos en la variable productsData

    // Rellenar la tabla
    $.each(data, function(i, item) {
      var fila = $("<tr>");
      fila.append($("<td>" + item.nombre + "</td>"));
      fila.append($("<td>" + item.fecha_creacion + "</td>"));
      fila.append($("<td>" + item.unidad + "</td>"));
      fila.append($("<td>" + item.concentracion + "</td>"));
      fila.append($("<td>" + item.registro_invima + "</td>"));
      fila.append($("<td>" + item.principio_activo + "</td>"));
      fila.append($("<td>" + item.nombre_comercial + "</td>"));
      fila.append($("<td>" + item.presentacion_comercial + "</td>"));

      // Celda para los botones de editar y eliminar
      var acciones = $("<td>");
      var editarBtn = $("<i class='fas fa-edit' style='cursor: pointer;'></i>").click(function() {
        // Lógica para editar aquí (llama a una función para editar)
        editarProducto(item.id); // Reemplaza 'item.id' con el campo identificador en tu API
      });
      var eliminarBtn = $("<i class='fas fa-trash-alt' style='cursor: pointer;'></i>").click(function() {
        // Lógica para eliminar aquí (llama a una función para eliminar)
        eliminarProducto(item.id); // Reemplaza 'item.id' con el campo identificador en tu API
      });
      acciones.append(editarBtn).append(eliminarBtn);
      fila.append(acciones);

      $("#datos").append(fila);
    });
  });

  function editarProducto(id) {
    // Obtener el producto correspondiente al ID
    const producto = getProductById(id);

    // Llenar el formulario con los datos del producto
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("unidad").value = producto.unidad;
    document.getElementById("concentracion").value = producto.concentracion;
    document.getElementById("registro_invima").value = producto.registro_invima;
    document.getElementById("principio_activo").value = producto.principio_activo;
    document.getElementById("nombre_comercial").value = producto.nombre_comercial;
    document.getElementById("presentacion_comercial").value = producto.presentacion_comercial;

    // Mostrar el formulario de edición
    document.querySelector(".editar-formulario").style.display = "block";
  }

  // Función para obtener un producto por su ID
  function getProductById(id) {
    // Realiza la lógica para obtener el producto por su ID utilizando productsData
    return productsData.find((producto) => producto.id === id);
  }

  function eliminarProducto(id) {
    // Realiza la petición DELETE a tu API para eliminar el producto por su ID
    fetch(`https://164.92.95.34:8095/producto/api/producto/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el producto");
        }
        // Aquí puedes realizar acciones adicionales después de eliminar el producto
        console.log("Producto eliminado con ID:", id);
      })
      .catch((error) => {
        // Manejar errores en la eliminación del producto
        console.error("Error al eliminar el producto:", error);
      });
  }
});
