function Producto(nombre, precio, categoria, cantidadDisponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.cantidadDisponible = cantidadDisponible;
}

// Array de productos disponibles
var productosDisponibles = [
    new Producto("Hamburguesa", 5, "Comida", 50),
    new Producto("Papas Fritas", 2, "Comida", 100),
    new Producto("Gaseosa", 1.5, "Bebida", 80),
    new Producto("Helado", 2, "Postre", 30),
    new Producto("Pizza", 8, "Comida", 40),
    new Producto("Pancho", 4, "Comida", 60),
    new Producto("Ensalada", 3, "Comida", 40),
    new Producto("Tarta", 6, "Comida", 20),
    new Producto("Empanadas", 1.5, "Comida", 70),
    new Producto("Sushi", 10, "Comida", 25),
    new Producto("Cerveza", 3, "Bebida", 50),
    new Producto("Jugo", 1, "Bebida", 60),
    new Producto("Sandwich", 4, "Comida", 70),
    new Producto("Smoothie", 3, "Bebida", 40),
    new Producto("Torta", 7, "Postre", 25)
];

// Función para simular la compra
function simularCompra() {
    var totalCompra = 0;
    var listaCompra = [];

    while (true) {
        var listaProductos = "Productos Disponibles:\n";
        for (var i = 0; i < productosDisponibles.length; i++) {
            var producto = productosDisponibles[i];
            listaProductos += `${i + 1}. ${producto.nombre} - $${producto.precio}\n`;
        }

        var opcion = parseInt(prompt(listaProductos + "\nIngrese el número del producto que desea comprar, o '0' para finalizar la compra y ver el total:"));
        if (opcion === 0) {
            break; 
        } else if (opcion >= 1 && opcion <= productosDisponibles.length) {
            var productoSeleccionado = productosDisponibles[opcion - 1];
            var cantidad = parseInt(prompt(`Ha seleccionado: ${productoSeleccionado.nombre} - $${productoSeleccionado.precio}\nIngrese la cantidad (para restar, ingrese un número negativo):`));

            
            if (cantidad < 0 && Math.abs(cantidad) > listaCompra[opcion - 1]) {
                alert(`No puede restar más de ${listaCompra[opcion - 1]} ${productoSeleccionado.nombre}.`);
                continue; 
            }

            if (cantidad > 0) {
                totalCompra += productoSeleccionado.precio * cantidad;
                if (listaCompra[opcion - 1] === undefined) {
                    listaCompra[opcion - 1] = cantidad;
                } else {
                    listaCompra[opcion - 1] += cantidad;
                }
            } else if (cantidad < 0) {
                totalCompra -= productoSeleccionado.precio * Math.abs(cantidad);
                listaCompra[opcion - 1] -= Math.abs(cantidad);
            }
        } else {
            alert("Opción no válida");
        }
    }

    if (listaCompra.length > 0) {
        var mensajeCompra = "Productos Seleccionados:\n";
        for (var j = 0; j < listaCompra.length; j++) {
            if (listaCompra[j] !== undefined && listaCompra[j] !== 0) {
                var producto = productosDisponibles[j];
                mensajeCompra += `${listaCompra[j]}x ${producto.nombre}\n`;
            }
        }
        mensajeCompra += `\nTotal de la Compra: $${totalCompra}`;
        alert(mensajeCompra);
    } else {
        alert("Compra cancelada.");
    }
}



document.getElementById("simularCompraBtn").addEventListener("click", simularCompra);
