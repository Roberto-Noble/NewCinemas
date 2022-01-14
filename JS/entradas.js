function entradasCine() {

class Entradas {
    constructor(producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const arrayEntradas = [];
let pregunta = prompt("¿desea comprar una entrada? (s/n) ");

while (pregunta === "s") {
    let producto = prompt("ingrese el  producto que desea comprar : Spiderman: No Way Home : 2D: $300 3D: $350 4D: $450, los mismos precios para Sing 2 y para The Matrix Ressurrections ");
    let precio = prompt("ingrese el precio de la entrada elegida");
    let cantidad = prompt("ingrese cuantos quiere ");
    let entradaIngresada = new Entradas(producto, precio, cantidad);
    arrayEntradas.push(entradaIngresada);
    console.log(arrayEntradas);
    pregunta = prompt("¿desea comprar otra entrada? (s/n) ");
}

let totalCompra = 0;

for (i = 0; i < arrayEntradas.length; i++) {
    console.log(arrayEntradas[i]);
    totalCompra =
        totalCompra + arrayEntradas[i].precio * arrayEntradas[i].cantidad;
}
alert("gracias por su compra! el monto a abonar es de $  " + totalCompra);

}

//--Ésta función de Javascript se activa al dar click sobre el botón de comprar entradas en el HTML//--
