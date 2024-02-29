const precios = {
    hamburguesa: 5,
    hamburguesaConTomate: 7,
    papasFritas: 2,
    papasConCheddar: 4,
    gaseosa: 1.5,
    helado: 2
};

// Inicializar variables
let orden = 0; // Cambiamos orden de array a número
let precioTotal = 0;

// Función para agregar un producto a la orden
function agregarProducto(producto) {
    precioTotal += precios[producto];
}

// Simulador interactivo
alert("¡Bienvenido al Minisuper de Apu!");

let opcion;
do {
    opcion = parseInt(prompt(
        "¡Namaste! ¿Qué te gustaría ordenar hoy?\n" +
        "1. Hamburguesa - $5\n" +
        "2. Hamburguesa con tomate - $7\n" +
        "3. Papas Fritas - $2\n" +
        "4. Papas con cheddar - $4\n" +
        "5. Gaseosa - $1.5\n" +
        "6. Helado - $2\n" +
        "7. Ver orden y pagar\n" +
        "8. Salir"
    ));

    switch (opcion) {
        case 1:
            agregarProducto("hamburguesa");
            alert("Que bien una Hamburga");
            break;
        case 2:
            agregarProducto("hamburguesaConTomate");
            alert("Ah, nos pusimos picantes con el tomatito!");
            break;
        case 3:
            agregarProducto("papasFritas");
            alert("Uyy sii, papiitas");
            break;
        case 4:
            agregarProducto("papasConCheddar");
            alert("Viciooso con el chedar");
            break;
        case 5:
            agregarProducto("gaseosa");
            alert("Con algo hay que Bajarlo, Je");
            break;
        case 6:
            agregarProducto("helado");
            alert("Heladito para cerrar");
            break;
        case 7:
            console.log(`El precio final de tu Compra es: $${precioTotal}`);
            alert(`El precio final de tu Compra es: $${precioTotal}`);
            break;
        case 8:
            alert("Gracias, Vuelva Prontos");
            break;
        default:
            alert("¡Por favor, elige una opción válida!");
    }
} while (opcion !== 8);