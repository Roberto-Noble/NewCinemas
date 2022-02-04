let boton = document.getElementById("buttonc");
boton.onclick = () => {
    let ele1 = document.getElementById("pelicula");
    let precio1 = parseInt(ele1.options[ele1.selectedIndex].value);
    let ele2 = document.getElementById("tipo");
    let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
    let ele3 = document.getElementById("cantidad");
    let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);
    let suma = `Total $ ${precio1 + precio2 * precio3}`;
    document.getElementById("resultado").value = suma;
};




