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

function mostrarnuevoproducto(){
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
let tareas = ["matematica","lenguaje","filosofia","POO","ciencias","historia"]
function controldetareas(){
    
    if (tareas.length > 5){
        tareas.pop()
        document.getElementById("resultado").innerHTML =
        `<p>listado de tareas: ${tareas}</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>lista aceptable</p>`;
    }
}
let cola = ["SinNombre","pedro","lucia"]
function validarprimerelemento(){
    
    if (cola[0]=="SinNombre"){
        cola.shift()
        document.getElementById("resultado").innerHTML = 
        `<p>cola: ${cola}</p>`;
    }else {
        document.getElementById("resultado").innerHTML =
        `<p>cola correcta</p>`;
    }
}

function saludocondicional(){
    let nombre = ("alonso")
    if(nombre.length == 0){
        document.getElementById("resultado").innerHTML =
        `<p>nombre no valido</p>`
    }else {
        let saludos = ["hola "]
        saludos.push(nombre)
        document.getElementById("resultado").innerHTML =
        `<p>${saludos}</p>`
    }
}