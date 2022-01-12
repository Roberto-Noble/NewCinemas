class Producto {
    constructor(articulo, tipo, precio) {
        this.articulo = articulo;
        this.tipo = tipo;
        this.precio = precio;
    }
    calcularIva() {
        let precioFinal = this.precio * 1.21;
        return precioFinal;
    }
}

const articulo = prompt(
    "elija un articulo: \n  Spiderman: No Way Home $350  \n  Sing 2 $ 350  \n  The Matrix Resurrections $350"
);
const tipo = prompt("elija 2D precio igual, 3D $350 + 50$ o 4D $350 +$100");
const precio = parseInt(prompt("ingrese el precio del producto elegido"));
const productoComprado = new Producto(articulo, tipo, precio);
alert(`gracias por su compra, usted adquirio una entrada a  ${productoComprado.articulo
    } en ${productoComprado.tipo}, el precio final es de ${productoComprado.calcularIva()}`);
