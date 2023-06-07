// VARIABLES globales
// OPCIONES

let cursor = true;
let opcion;

// constructores

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// inicializando listas y objetos

const carrito = [];

const productos = [];

productos.push(new Producto(1, "Barra de proteina", 200))
productos.push(new Producto(2, "Gel energetico", 250))
productos.push(new Producto(3, "Whey Protein 1kg", 5000))
productos.push(new Producto(4, "Aminoacidos BCAA", 7500))
productos.push(new Producto(5, "Aminoacidos premium", 10000))


// programa

alert("Hola bienvenido a la tienda de insumos deportivos!");

do {

    switch (ayudaMenu()) {
        case 1:
            comprar();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            cursor = false;
            terminarCompra();
            break;
    }

} while (cursor === true);

alert("SU COMPRA HA SIDO EXITOSA!!! Se le ha enviado un mensaje a su correo con los detalles de la compra (CONSOLA)");


// <>

// funciones


function ayudaMenu() {
    opcion = parseInt(prompt("Ingrese una opcion \n 1) Comprar\n 2) Ver carrito\n 3)Terminar compra"));
    if ((opcion != 1) && (opcion != 2) && (opcion != 3)) {
        alert("Ha ingresado un valor invalido! Cierre esta ventana para reintentar operación")
        ayudaMenu();
    }
    return opcion;
}

function comprar() {
    let cantidad = 0;
    let compra = parseInt(prompt("Ingrese un producto: \n 1) Barrita proteica $200 \n 2) Gel energetico $250 \n 3) Whey Protein 1kg $5000 \n 4) Aminoacidos BCAA $7500 \n 5) Aminoacidos Premium $10000"));
    if ((compra != 1) && (compra != 2) && (compra != 3) && (compra != 4) && (compra != 5)) {
        alert("Ha ingresado un valor invalido! Cierre esta ventana para reintentar operación")
        comprar();
    }

    cantidad = parseInt(prompt("Ingrese cantidad de unidades:"));
    for (i = 0; i < cantidad; i++) {
        carrito.push(productos.find((elemento) => elemento.id === compra));
    }
}

function terminarCompra() {

    let total;
    let seguir2 = prompt("Desea terminar su compra? \n (S/N)");

    if (seguir2 === "S") {
        total = carrito.reduce((acumulado, elemento) => acumulado + elemento.precio, 0);
        verCarrito();
        console.log("Monto total: $" + total + "\n" + new Date())
    } else if (seguir2 == "N") {
        cursor = true;
    } else {
        alert("Ha ingresado un valor invalido... Intente de nuevo");
        terminarCompra();
    }
}

function verCarrito() {

    console.log("-------------------------------------")
    const barritas = carrito.filter((elemento) => elemento.id == 1);
    const geles = carrito.filter((elemento) => elemento.id == 2);
    const proteinas = carrito.filter((elemento) => elemento.id == 3);
    const aminoacidos = carrito.filter((elemento) => elemento.id == 4);
    const aminoacidosPremium = carrito.filter((elemento) => elemento.id == 5);

    alert("Barritas : " + barritas.length + " | $" + barritas.length * 200 + "\n" + "Geles : " + geles.length + " | $" + geles.length * 250 + "\n" + "Proteinas : " + proteinas.length + " | $" + proteinas.length * 5000 + "\n" + "aminoacidos : " + aminoacidos.length + " | $" + aminoacidos.length * 7500 + "\n" + "Aminoacidos premium : " + aminoacidosPremium.length + " | $" + aminoacidosPremium.length * 10000);
    console.log("Barritas : " + barritas.length + " | $" + barritas.length * 200 + "\n" + "Geles : " + geles.length + " | $" + geles.length * 250 + "\n" + "Proteinas : " + proteinas.length + " | $" + proteinas.length * 5000 + "\n" + "aminoacidos : " + aminoacidos.length + " | $" + aminoacidos.length * 7500 + "\n" + "Aminoacidos premium : " + aminoacidosPremium.length + " | $" + aminoacidosPremium.length * 10000);
}
