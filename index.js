function mostrarProductos(){
    let catalogo = "Catálogo de productos: \n "
    catalogo += "1. Iphone- $1200 \n ";
    catalogo += "2. Ipad- $1500 \n ";
    catalogo += "3. MacBook- $1900 \n ";
    catalogo += "4. AirPods- $200 \n ";
    catalogo += "5. AplleWatch- $500 \n ";
    return catalogo
}

function productosIva(){
    let mirarProductos = true;
    const precios = [1200, 1500, 1900, 200, 500];

    while (mirarProductos === true){
        console.log(mostrarProductos());
        let producto = prompt(`Elige un producto(1-5) o escribe "Terminar" para finalizar:  `);
        if (producto.toLowerCase() === "salir"){
            mirarProductos = false;
        } else {
            const precio = precios[parseInt(producto)-1];
            const precioConIva = precio * 1.21;
            console.log(`El precio con IVA es: ${precioConIva}`);
        }
    }
}

productosIva();