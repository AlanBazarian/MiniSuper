// // let resultado = 0;
// // // console.log("Valor de la variable GLOBAL resultado: "+ resultado);

// // function sumar (n1, n2){
// //     resultado = n1 + n2;
// //     return resultado;
// // }

// // const resta = (n1, n2 )=> {
// //     let resultado = 0
// //     // console.log(" valor variable LOCAL resultado :" + resultado);
// //     resultado = n1 - n2;
// // // console.log("Valor variable LOCAL ;" + resultado);
// //     return resultado;
// // }

// // // let nombre= "Papo";
// // // let telefono= "112758853"
// // // let direccion = "calle falsa 123"
// // // let email = "danipasion@mail.com"

// // // // objeto literal

// // // const contacto1 = {
// // //     nombre: "Papo", 
// // //     apellido : "MC",
// // //     telefono: "123455667",
// // //     direccion: "calle falsa 123",
// // // };
// // // const contacto2 = {
// // //     nombre: "MaRIA", 
// // //     apellido : "Blanca como el dia",
// // //     telefono: "12364122667",
// // //     direccion: "calle falsa 1323",
// // //     email: "mariablanca@mail.com",
// // // };
// // // console.log(contacto1)
// // // console.log(contacto1.apellido); //notacion de punto
// // // console.log(contacto1.email)
// // // console.log(contacto2.apellido);
// // // console.log(contacto2.email);
// // // console.log(contacto2["direccion"]) // notacion de corchete

// // // contacto2.direccion= "Nueva Direccion 123";
// // // console.log(contacto2["direccion"]);
// // // contacto1.email= "papomc@mail.com";
// // // console.log(contacto1.email);

// // // funcion constructora

// // function Personaje(nombre, direccion, edad,avatar) {
// //     this.nombre= nombre;
// //     this.direccion=direccion;
// //     this.edad=edad;
// //     this.avatar=avatar;
// //     this.decirFrase= function (frase) {
// //         return "Hola soy "+ this.nombre + " mi frase es: "+ frase
// //     }
// // }

// // const personaje1= new Personaje("Homero", "Av. Siempre viva 742",39,"foto2.png")
// // // console.log(personaje1);
// // const personaje2= new Personaje("Bart", "Av. Siempre viva 742",10,"foto.jpg")
// // // console.log(personaje2.nombre);
// // // console.log(personaje2.apellido="burns");
// // // console.log(personaje2);

// // // crea una funcion que me permita instanciar 3 personajes de lo los simpsons, los tiene que crear el user

// // // function PersonajeSimpsons(nombre, edad, ocupacion) {
// // //     this.nombre = nombre;
// // //     this.edad = edad;
// // //     this.ocupacion = ocupacion;
// // // }

// // // function crearBaseDeDatosPersonajes() {
// // //     for (let i = 0; i < 3; i++) {
// // //         let nombre = prompt("Ingrese el nombre del personaje:");
// // //         let edad = parseInt(prompt("Ingrese la edad del personaje:"));
// // //         let ocupacion = prompt("Ingrese la ocupación del personaje:");


// // //         const personaje = new PersonajeSimpsons(nombre, edad, ocupacion);
        

// // //         baseDeDatosPersonajes.push(personaje);
// // //     }
// // // }


// // // crearBaseDeDatosPersonajes();


// // // console.log("Base de datos de personajes de Los Simpsons:");
// // // console.log(baseDeDatosPersonajes);

// // // let saludo = "Hola Tarola"
// // // console.log(saludo.length);
// // // console.log(saludo.toUpperCase());

// // // window.alert("Hola Tarola")
// // // // console.table(personaje1);
// // // let frase=prompt("Di lo tuyo")
// // // console.log(personaje1);
// // // console.log(personaje1.decirFrase(frase));

// // console.log("sexo" in personaje1);
// // console.log("nombre" in personaje2);
// // // bucle for in

// // for(const key in personaje1){
// //     console.log(key +": " + personaje1[key]);
// // }
// // for(const key in personaje2){
// //     console.table(key +": " + personaje2[key]);
// // }
// // // class

// // class Libro{
// //     constructor(titulo, autor, edicion){
// //         this.titulo = titulo;
// //         this.autor = autor;
// //         this.edicion =  edicion;
// //     }
// //     // mostrarInfo = ()=> "Titulo: " + this.titulo + " Autor " + this.autor + " Edicion " + this.edicion
// // //     mostrarInfo = () { 
// // //     return "Titulo: " + this.titulo + " Autor " + this.autor + " Edicion " + this.edicion
// // //     }
// // // }
// // // const libro1 = new Libro("Los 3 mosqueteros", "Alejandro dumas", "De Oro")
// // // for (const propiedad in libro1){
// // //     console.log(propiedad + ": " + libro1[propiedad]);
// // // }
// // // console.log(libro1.mostrarInfo());

// // // objeto literal

// // const dracula = {
// //     titulo: "Dracula",
// //     autor: "Bram Stoker",
// //     anioPublicacion: "1897",
// //     genero: "Novela gotica",
// //     idioma: "Ingles",
// // };

// // // funcion construcotra
// // function Libro (titulo, autor, anioPublicacion, genero, idioma){
// //     this.titulo = titulo;
// //     this.autor = autor;
// //     this.anioPublicacion = anioPublicacion;
// //     this.genero =  genero;
// //     this.idioma =  idioma;


// // // metodo para mostrar
// // this.mostrarInformacion = function() {
// //     retun (
// //         "Titulo: " +
// //         this.titulo +
// //         "\n" +
// //         "Autor: " +
// //         this.autor +
// //         "\n" +
// //         "Ano de Publicacion " +
// //         this.anioPublicacion +
// //         "\n" +
// //         "Genero: " +
// //         this.genero +
// //         "\n" +
// //         "Idioma: " +
// //         this.idioma
// //     );
// //     };
// // }

// // const frankestein = new Libro(
// //     "Frankestein",
// //     "Mary Shelly",
// //     "1818",
// //     "Gotica",
// //     "Ingles"
// // )

// // // console.table(frankestein.mostrarInformacion);
// // // console.log(frankestein.titulo);
// // // console.log(dracula.titulo);

// // // array
// // // const nums = [1,30,5,1.5,27,-34,6.45];
// // // // console.log(nums[6]);

// // // // // let resultado = nums [1] + nums [4]
// // // // // console.log(resultado);

// // const nombres = ["Dani", "Pablo", "Ana" , "Flor"];
// // const frutas = ["Manzana", "Naranja"]
// // // const mixto = [true, "Hola Tarola", 12, {nombre: "Pepe", edad: 30 }, nums];
// // // // console.log(mixto[3]);
// // // // const arraNums = mixto[4]
// // // // console.log(arraNums[1]);
// // // // console.log(nums.length);
// // // for (let i=0; i<nums.length ; i++){
// // //     // console.log(nums[i]);
// // // }
// // // //metodos
// // // //push agregar
// // // // let ingreso = prompt("Ingresa un numero");
// // // nums.push(-98,3,5,98,0,)
// // // // elimina elemntos del array al final pop
// // // nums.pop()
// // // nums.pop()
// // // nums.pop()

// // // // agregar elementos al principio
// // // nums.unshift(32,123,-98)
// // // // eliminar elemntos del principio
// // // nums.shift()
// // // // quitar elementos de determinara posicion
// // // // nums.splice(2,5)
// // // // console.log(nums);

// // // const nuevoArray= nombres.concat(frutas)
// // // // console.log(nuevoArray.length);

// // // // console.log(nums.indexOf(-98));
// // // console.log(nums.includes(-98));
// // const tresMosqueteros= new Libro (
// //     "Los 3 mosqueteros",
// //     "Alejandro Dumas",
// //     "1628",
// //     "Novela",
// //     "Frances"
// // );
// // const biblioteca = [dracula, tresMosqueteros];

// // biblioteca.push(frankestein)
// // // console.table(biblioteca);
// // //for of
// // for (const elemento of biblioteca) {
// //     console.log(elemento);
// //     console.log(elemento.titulo);
// //     console.log(elemento.anioPublicacion);
// // }
// // // for (const elemento of frutas) {
// // //     console.log(elemento);
    
// // // }

// // function redondear (decimal){
// //     return Math.round(decimal)
// // }
// // let resultado = 0
// // for (let i = 0; i < 5; i++) {
// //     let ingreso = prompt ("Ingresa un nro decimal")
// //     if(isNaN(ingreso)){
// //         console.log("El ingreso no es un numero");
// //         continue
// //     }
// //     resultado = redondear(ingreso)
// //     console.log(resultado);
// // }

// // const listaProductos = []
// // console.log(listaProductos.length);
// // let limite=5

// // function Producto (nombre, cantidad){
// //     this.nombre= nombre;
// //     this.cantidad = cantidad;
// // }

// // // do{
// // // let nombre = prompt("Ingrese un nombre de producto")
// // // let cantidad = prompt ("Ingresa cuantos productos")
// // // listaProductos.push(new Producto(nombre, cantidad))
// // // }while (listaProductos.length != limite) 


// // console.log(listaProductos);

// // class Tienda {
// //     constructor(nombre, direccion, propietario, rubro){
// //         this.nombre= nombre;
// //         this.direccion=direccion;
// //         this.propietario=propietario;
// //         this.rubro=rubro;
// //     }
// //     estaAbierto (hora){
// //         if (((hora >= 8) && (hora <=12)) || ((hora >= 15) && (hora <=8))) {
// //             return true;
// //     }
// //     return false}
// //     esPropietario(propietario){
// //     return this.propietario == propietario;
// //     }
// // }

// // class Cliente {
// //     constructor(nombre, presupuesto, tarjeta, numero){
// //         this.nombre = nombre;
// //         this.presupuesto = parseFloat(presupuesto);
// //         this.tarjeta = tarjeta;
// //         this.numero = numero;
// //     }
// //     transferirDinero(valor){
// //         if((this.presupuesto > 0)&&(valor<this.presupuesto)){
// //             this.presupuesto-= valor;
// //             return valor
// //         }else{
// //             return 0;
// //         }
// //     }
// // }

// // const cliente1 = new Cliente ("Homero", 2000, true, "1162688440")
// // const cliente2 = new Cliente ("Flanders", 3000, false, "123451275")
// // const cliente3 = new Cliente ("Barney", 549, false, "19785891")

// // for (let i = 0; i < 5; i++) {
// //     let entrada = parseFloat(prompt("Ingresar monto"));
// //     if (cliente1.transferirDinero(entrada)){
// //         alert(" El cliente " + cliente1.nombre + " Te puede pagar " + entrada)
// //     }
// //     if (cliente2.transferirDinero(entrada)){
// //         alert(" El cliente " + cliente2.nombre  +" Te puede pagar " + entrada)
// //     }
// //     if (cliente3.transferirDinero(entrada)){
// //         alert(" El cliente " + cliente3.nombre + " Te puede pagar " + entrada)
// //     }
// // }

// // const tienda1 = new Tienda ("Minisuper", "Siempre Viva 321", "Apu", "Tienda de Abarrotes");
// // const tienda2 = new Tienda ("Quicky", "Juramento 332", "Lara", "Abarrotero");
// // const tienda3 = new Tienda ("Superduper", "Trona 123", "Teresa", "Abarro");
// // console.log(tienda1);
// // // let ingresados = "";
// // // // for (let index = 0; index < 2; index++) {
// // // //     let tienda = new Tienda (prompt("Nombre"),prompt("Direccion"), prompt("Propietario"),prompt("Rubro"))
// // // //     ingresados+= "Tienda " + tienda.nombre + " " + "Direccion " + tienda.direccion + " " + "Propietario " + tienda.propietario + " " + "Rubro " + tienda.rubro + "\n";
// // // // }
// // // // alert(ingresados);

// // for (let i = 0; i < 3; i++) {
// //     let entrada = parseInt(prompt ("Ingrese hora"));
// //     if(tienda1.estaAbierto(entrada)){
// //         alert(" La tienda esta abierta a las "+ entrada)
// //     }else{
// //         alert("La tienda esta cerrada a las "+entrada)
// //     }
// // }

// // for (let i = 0; i < 2; i++) {
// //     let entrada = prompt(" Ingrese nombre del propietario");
// //     if (tienda1.esPropietario(entrada)) {
// //         alert (entrada + " Es el propietario de la tienda " + tienda1.nombre);
// //     }
// //     if (tienda2.esPropietario(entrada)) {
// //         alert (entrada + " Es el propietario de la tienda " + tienda2.nombre);
// //     }
// //     if (tienda3.esPropietario(entrada)) {
// //         alert (entrada + " Es el propietario de la tienda " + tienda3.nombre);
// //     }
// // }

// // const equipo = ["Homero", "Apu", "Moe", "Sr. Burns"]
// // for (let i = 0; i < equipo.length ; i++) {
// //     alert("Posicion " + i + " Jugador " + equipo.[]);
    
// // }

// let entrada = prompt("INGRESAR JUGADOR");
// const equipo = [];
// while (entrada != 'ESC') {
//     equipo.push(entrada);
//     entrada = prompt("INGRESAR JUGADOR");
// }
// for (let index = 0; index < equipo.length; index++) {
//     alert("POSICION " + index + " JUGADOR " + equipo[index]);
// }

const servicios = [
    {id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg"},
    {id: 2, nombre: "masajes" , precio: 1800, img: "masajes.jpg"},
    {id: 3, nombre: "electrodos", precio: 2800 , img: "electrodos.jpg" },
    {id: 4, nombre: "manicura", precio: 1500, img: "manicura.jpg" },
    {id: 5, nombre: "unas", precio: 1300, img: "unas.jpg" },
    {id: 6, nombre: "mascarilla", precio: 1900, img: "mascarilla.jpg" },
    {id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.jpg" },
    {id: 8, nombre: "mascarilla", precio: 2300, img: "masajes.jpg" }
];

// function sumarRango(inicio, fin) {
//     let total = 0;
//     for (let i = inicio; i <= fin; i++){
//     total = total +i;
//     }
//     return total
// }
// const nums = [1,3,2,5,1,3,10]

// // let total = 0;
// // for (let i = 0; i <=10 ; i++) {
// //     total = total +i;
// //     console.log("Valor de total ="+ total);
// // }
// // console.log(total);
// // console.log(sumarRango(1,10));
// // console.log(sumarRango(3,50));

// function mayorQue(n) {
//     return (m) => m > n
// }
// const mayorQueDiez = mayorQue(10)

// // console.log(mayorQueDiez(10));

// function asignarOperacion(operacion) {
//     switch (operacion) {
//         case "+":
//             return (n1,n2)=> n1 + n2;
    
//             case "-":
//                 return (n1,n2)=> n1 - n2;
        
//         default:
//         return "Operacion no valida"
//     }
// }

// const sumar= asignarOperacion("+")
// const restar= asignarOperacion("-")
// // console.log(sumar(2,9));
// // console.log(restar(2,10));

// function porCadaUno (arr, fn){
//     for (const element of arr) { // arr= nums
//         fn (element) // console.log (element)
//     }
// }
// porCadaUno(nums, console.log)
// porCadaUno(nums, alert)

// const cuadruple = []

// function porCuatro (n){
//     return cuadruple.push(n * 4)
// }

// // console.log(cuadruple);
// // console.log(nums);
// porCadaUno(nums, porCuatro);
// console.log(cuadruple);
// // porCadaUno(servicios, console.log)

// porCadaUno(nums, (el)=>{
//     cuadruple.push (el * 4)
// })
// // console.log(cuadruple);

// // forEach
// nums.forEach((el)=>{
//  return cuadruple.push (el * 4)
// })
// // console.log(cuadruple);

//find
// let ingreso = prompt (" ingresa el servicio")

// const encontrado = servicios.find((servicio)=>{
//     return servicio.nombre == ingreso
// })
// console.log(encontrado);

//filter ( devuelve siempre un array )

// const filtrado = servicios.filter((el)=>{
//     // return el.precio <= 1500
//     return el.nombre.includes("masaje")
// })
// // console.log(filtrado);
// //map

// const precioActualizado = servicios.map(el=>{
//     return{
//         id: el.id,
//         nombre: el.nombre,
//         precio: el.precio*2,
//         img: el.img
//     }
// })
// console.log(precioActualizado);

// const acumulado = nums.reduce((acc, el)=>{
//     return acc = acc + el
// },0)
// console.log(acumulado);

// const totalPrecios = servicios.reduce ((acc, el)=>{
//     return acc = acc + el.precio
// },0)

// console.log(totalPrecios);

// const filtrado2= servicios.filter(el=>{
//     return el.nombre.includes("mas")
// })
// console.log(filtrado2);

// const carrito = []
// const masaje = filtrado2.find(el=>{
//     return el.precio < 3500
// })
// console.log(masaje);
// carrito.push(masaje);
// console.log(carrito);

// function asignarOperacion(operacion) {
//     switch (operacion) {
//         case "+":
//             return (n1,n2)=> n1 + n2;
    
//             case "-":
//                 return (n1,n2)=> n1 - n2;
//         case "raiz2":
//             return (a)=> {
//                 if(a<0){
//                     return "error"
//                 }
//                 else{
//                     return Math.sqrt(a)
//                 }
//             }

//         default:
//         return()=> "Operacion no valida"
//     }
// }

// const sumar= asignarOperacion("raiz2")
// const restar= asignarOperacion("-")

// console.log(sumar(-16));
// console.log(sumar(2,9));
// console.log(restar(2,10));
// console.log(Math.round(3.45));
// console.log(Math.floor(5.99));
// console.log(Math.ceil(6.00001));
// console.log(Math.round(Math.random()*10+1));

// const hexa = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
// ];
// let token= '';
// let color='';
// for (let i = 0; i < 6; i++) {
//     let aleatorio = Math.round(Math.random()*hexa.length)
// color = color + hexa[aleatorio]
// }
// console.log("el color hexadecimal generado es: #" + color);
// // crear una funcion que genere un token numerico

// for (let i = 0; i < 8; i++) {
// let aleatorio = Math.round(Math.random()*hexa.length)
//     token = token + hexa[aleatorio]
// }
// console.log("el token es "+ token);

// class Jugador {
//     constructor(nombre, camiseta, edad, lesionado) {
//         this.nombre = nombre;
//         this.camiseta = camiseta;
//         this.edad = edad;
//         this.lesionado = lesionado;
//     }
// }
// const jugadores = [];
// jugadores.push(new Jugador("BART", 15 , 11, false));
// jugadores.push(new Jugador("NELSON", 2 , 18, false));
// jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
// // jugadores.push(new Jugador("MARTIN", 0 , 11, false));
// // jugadores.push(new Jugador("ROD", 98 , 12, false));
// // console.log(jugadores);

// // function buscarJugador (equipo, jugador){
// //     return equipo.find(objeto=> objeto.nombre === jugador.toUpperCase());
// // }
// // for (let i = 0; i < 3; i++) {
// //     let busqueda = buscarJugador(jugadores, prompt("Ingresa nombre"));
// //     if(busqueda != undefined){
// //         alert ("Jugador " + busqueda.nombre+ " Camiseta "+ busqueda.camiseta+ " Edad"+ busqueda.edad);
// //     }else{
// //         alert()
// //     }
// // }
// // const fecha = new Date()
// // console.log(fecha.getTime());

// // function calcularEstadia(ingreso, egreso) {
// //     let fechaIngreso = new Date(ingreso).getTime()
// //     let fechaEgreso = new Date (egreso).getTime()

// // const milisegundosPorDia = 86400000
// // let cantidadDias = (fechaEgreso - fechaIngreso)/ milisegundosPorDia
// // return cantidadDias

// // }

// // let dias = calcularEstadia("2024,1,23", "2024,1,29")
// // console.log("La cantidad de dias ... "+ dias );

// // let usuario = localStorage.getItem('nombre');
// // if (usuario == null) {
// //     localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
// // } else {
// //     alert('EL NOMBRE ES ' + usuario);
// // }


// // class Hamburguesa {
// //     constructor(nombre, precio, ingredientes, combo){
// //         this.nombre = nombre;
// //         this.precio = precio;
// //         this.ingredientes= ingredientes;
// //         this.combo = combo;
// //     }
// // }
// // const Hamburguesas = []
// // Hamburguesas.push (new Hamburguesa(promp("ingresa nombre")), 150, ['carne, queso'], 1)

// const productos = [
//     { id: 1, nombre: "arroz integral", precio: 360 },
//     { id: 2, nombre: "papa", precio: 195 },
//     { id: 3, nombre: "tomate", precio: 525 },
//     { id: 4, nombre: "morrón", precio: 1800 },
//     { id: 5, nombre: "pan", precio: 570 },
//     { id: 6, nombre: "aceitunas", precio: 480 },
//     { id: 7, nombre: "fideo", precio: 525 },
//     { id: 8, nombre: "arroz", precio: 1050 },
//     { id: 9, nombre: "avena", precio: 600 },
//     { id: 10, nombre: "cebolla", precio: 135 },
//     { id: 11, nombre: "zanahoria", precio: 270 },
//     { id: 12, nombre: "brócoli", precio: 675 },
//     { id: 13, nombre: "lechuga", precio: 180 },
//     { id: 14, nombre: "espaguetis", precio: 525 },
// ];

// const personas = [
//     "Juan",
//     "Emma",
//     "Carlos",
//     "Olivia",
//     "Pedro",
//     "Sophia",
//     "Luis",
//     "Diego",
//     "Isabella",
//     "Miguel",
//     "Liam",
//     "María",
//     "Lucas",
//     "Ana",
//     "Elena",
//     "Laura",
//     "Isabel",
//     "Sofía",
//     "Oliver",
//     "Amelia",
// ];

// const titulo= document.getElementById('titulo');
// titulo.innerHTML = "<em>LOS DE BOCA SON.. TODOS PUTOS</em>" 

// const paises = document.getElementsByClassName('pais');

// // console.log(paises[0].innerHTML="<em>ARGENTINA</em>");

// for (const elemento of paises) {
//     console.log(elemento.innerHTML);
// }

// // paises[0].className =  "box pais"
// // titulo.style.backgroundColor="#010101"
// // titulo.style.color="white"

// const parrafo = document.createElement('p')

// parrafo.innerText = "Soy un parrafo crado desde JS";
// // agregar al body
// // document.body.append(parrafo)
// const contenedor = document.getElementById('contenedor');
// contenedor.appendChild(parrafo)

// const listNombres = document.getElementById('nombres');
// for (const nombre of personas) {
//     const li=document.createElement('li')
//     li.innerText = nombre
//     listNombres.append(li)
// }
// //remover
// // titulo.remove()
// titulo.style.display="block";
// //Template literal

// const producto = {
//     nombre : "Papas",
//     precio: 230,
// };
// let concatenado = "Producto: "+ producto.nombre + ", precio: $" + producto.precio

// console.log(concatenado);

// let template = `Producto: ${producto.nombre}, precio: 
// u$s ${producto.precio}`;
// console.log(template);
// contenedor.innerText = template


// const cardProducto = `<div class="card">
// <h3>Producto: ${producto.nombre}</h3>
// <p>Precio: u$s ${producto.precio}</p>
// </div>`;

// contenedor.innerHTML= cardProducto

// for (const producto of productos) {
//     const cardProducto = `<div class= "card">
// <h3>Producto: ${producto.nombre}</h3>
// <p>Precio: u$s ${producto.precio}</p>
// </div>`;
// contenedor.innerHTML= contenedor.innerHTML + cardProducto
// }
// const paises = [
//     "Argentina",
//     "Colombia",
//     "Brasil",
//     "México",
//     "Uruguay",
//     "Venezuela",
//     "Perú",
//     "Chile",
//     "Polonia",
//     "Canadá"  ];
// const servicios = [
//     { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
//     { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
//     { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
//     { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
//     { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
//     { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
//     { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
//     {
//       id: 8,
//       nombre: "radiofrecuencia",
//       precio: 12800,
//       img: "radiofrecuencia.png",
//     },
//     {
//       id: 9,
//       nombre: "micropigmentación",
//       precio: 7800,
//       img: "micropigmentacion.jpeg",
//     },
//   ];
//   
//   //Funciones de búsqueda
//   function buscarServicio(arr, filtro) {
//     const encontrado = arr.find((el) => {
//       return el.nombre.includes(filtro);
//     });
//     return encontrado;
//   }
//   function filtrarServicio(arr, filtro) {
//     const filtrado = arr.filter((el) => {
//       return el.nombre.includes(filtro);
//     });
//     return filtrado;

// const caja = document.querySelector('div.caja#caja')
// console.log(caja);