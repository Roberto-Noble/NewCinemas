const productos = [
    {
        id: 0,
        nombre: "Spiderman No Way Home",
        precio: 250,
        image: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/11/doctor-strange-en-spider-man-no-way-home_2560x1440_8490.jpg?fit=1200%2C675&ssl=1"
    },
    {
        id: 1,
        nombre: "Spiderman No Way Home",
        precio: 250,
        image: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/db9960b2dec9108169f86290953e15caef59dc62_s2_n1-scaled.jpeg?fit=1200%2C604&ssl=1"
    },
    {
        id: 2,
        nombre: "Sing 2",
        precio: 250,
        image: "https://socioespectacular.com.uy/wp-content/uploads/2021/12/sing-2.jpg"
    },
    {
        id: 3,
        nombre: "The Matrix",
        precio: 250,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4wdlfLlg4E_PqKckQcgWf-H0YX2GaLX0HJ_e6kxKd8Kfra-1nB48aa8-_WKzufg2LJU&usqp=CAU"
    },
];
const app = document.getElementById("cinemas");
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const elProducto = document.createElement("div");
    elProducto.id = "producto";
    elProducto.className = "product";
    elProducto.innerHTML = `<div class="btn btn-outline-danger">${producto.nombre}</div>
                        <img src="${producto.image}"/>
                        <div class="precio">${producto.precio}</div>`;
    app.prepend(elProducto);
    app.appendChild(elProducto);
}
const products = document.getElementsByClassName("product");
app.removeChild(products[0]);