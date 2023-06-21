// VARIABLES globales
// OPCIONES

let cursor = true;
let opcion;

// constructores

class Producto {
    constructor(id, nombre, precio ,imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// inicializando listas y objetos

const carrito = [];

const productos = [];

productos.push(new Producto(1, "Barra de proteina", 200, "./images/barrita.jpg"))
productos.push(new Producto(2, "Gel energetico", 250, "./images/gel.jpg"))
productos.push(new Producto(3, "Whey Protein 1kg", 5000, "./images/papota.webp"))
productos.push(new Producto(4, "Aminoacidos BCAA", 7500, "./images/bcaa.webp"))
productos.push(new Producto(5, "Aminoacidos premium", 10000, "./images/bcaaPremium.jpg"))

// programa

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("productos", JSON.stringify(productos))

// agarrando los elementos HTML que necesito modificar con JS

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-modal')

// lista de productos en la tienda

productos.forEach(producto => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <img src=${producto.imagen} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `

    // agrega el bloque creado con JS al HTML
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener("click", () => {
        agregarCarrito(producto.id)
        console.log(carrito)
    })
})


const agregarCarrito = (idProducto) => {
    const item = productos.find((prod) => prod.id === idProducto)
    carrito.push(item)
    actualizarCarrito()
}

const actualizarCarrito = () => {


    // reseteo
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$${producto.precio}</p>
        <button onclick="eliminarProductoCarrito(${producto.id})"><i class="fas fa-trash-alt"></i></button>
        <hr>
        `
        //se añade el div creado
        contenedorCarrito.appendChild(div)


        // sube al almacenamiento local el carrito actualizado
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
}

const eliminarProductoCarrito = (idProducto) => {
    const producto = carrito.find((prod) => prod.id === idProducto)
    const indice = carrito.indexOf(producto)
    carrito.splice(indice, 1)
    actualizarCarrito()
}
