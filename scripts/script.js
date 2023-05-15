
// VARIABLES globales
                              // NUMERO DE OPCIONES
let precioBarrita = 300;        //1
let precioProteina = 6000;      //2
let precioAminoacido = 8000;   //3


let menu; 

let cantidadBarritas = 0;
let cantidadProteina = 0;
let cantidadAminoacidos = 0;

let costoTotalBarritas = 0;
let costoTotalProteina = 0;
let costoTotalAminoacidos = 0;

let carrito = 0;

alert("Hola bienvenido a la tienda de insumos deportivos!");

do {
    carrito = comprar() + carrito;

    continuarCompra();

} while (menu === true);

console.log("SU COMPRA HA SIDO EXITOSA!!! \n N° de Whey Protein 1kg : " + cantidadProteina + " | Costo: " +  costoTotalProteina + " \n N° de Barritas proteicas : " + cantidadBarritas + " | Costo: " +  costoTotalBarritas + " \n N° Aminoacidos BCAA : " + cantidadAminoacidos + " | Costo: " +  costoTotalAminoacidos + "\n Precio final de su compra: " + carrito);

alert("SU COMPRA HA SIDO EXITOSA!!! Se le ha enviado mensaje a su correo con los detalles de la compra (CONSOLA)");

// <>

function comprar() {
    let compra = parseInt(prompt("Ingrese un producto: \n 1) Whey Protein 1kg $6000 \n 2) Barrita proteica $300 \n 3) Aminoacidos BCAA $8000"));
    if ((compra != 1) && (compra != 2) && (compra != 3)) {
        alert("Ha ingresado un valor invalido! Cierre esta ventana para reintentar operación")
        comprar();
    }
    switch (compra) {
        case 1:
            cantidadProteina = parseInt(prompt("Ingrese cantidad de unidades:")) + cantidadProteina;
            costoTotalProteina = costoTotalProteina + sumarProductos(precioProteina, cantidadProteina);
            return sumarProductos(precioProteina, cantidadProteina);
        case 2:
            cantidadBarritas = parseInt(prompt("Ingrese cantidad de unidades:")) + cantidadBarritas;
            costoTotalBarritas = costoTotalBarritas + sumarProductos(precioBarrita, cantidadBarritas);
            return sumarProductos(precioBarrita, cantidadBarritas);
        case 3:
            cantidadAminoacidos = parseInt(prompt("Ingrese cantidad de unidades:")) + cantidadAminoacidos;
            costoTotalAminoacidos = costoTotalAminoacidos + sumarProductos(precioAminoacido, cantidadAminoacidos);
            return sumarProductos(precioAminoacido, cantidadAminoacidos);
    }
}

function sumarProductos(precioProducto, cantidad) {
    let costo = precioProducto * cantidad;
    return costo;
}


function continuarCompra() {

    let seguir = prompt("Desea agregar mas productos? \n (S/N)");

    if (seguir == "S") {
        menu = true;
    } else if (seguir === "N") {
        menu = false;
    } else {
        alert("Ha ingresado un valor invalido... Intente de nuevo");
        continuarCompra();
    }
}