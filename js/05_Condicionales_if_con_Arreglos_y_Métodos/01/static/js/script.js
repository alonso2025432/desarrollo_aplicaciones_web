function mayoriaedad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado").innerHTML =
        `<p>Es mayor de Edad: ${edad} </p>`;
    }else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML =
        `<p>Es menor de Edad: ${edad} </p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}

function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}

}