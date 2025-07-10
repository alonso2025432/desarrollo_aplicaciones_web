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
function calificarnota(){
    let nota = 5;
    if (nota >= 6) {
        document.getElementById("resultado").innerHTML =
        `<p>Excelente</p>`;
    } else if (nota >= 4) {
        document.getElementById("resultado").innerHTML =
        `<p>Aprobado</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>Reprobado</p>`;
}

}

function registrodevisitas(){
    let visitas = []
    let persona = prompt("ingrese su nombre")
    if (persona==""){
        document.getElementById("resultado").innerHTML =
        `<p>Error: nombre vacio</p>`
    }else{
        visitas.unshift(persona)
        document.getElementById("resultado").innerHTML =
        `<p>nombre agregado correctamente</p>`
    }
}

function controldestock(){
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("ingrese un nuevo producto");
    if (stock[0] == productoSolicitado){
        document.getElementById("resultado").innerHTML =
        `<p>el producto: <strong>${productoSolicitado}</strong> ya esta ingresado</p>`;
    }
    else if (stock[1] == productoSolicitado){
        document.getElementById("resultado").innerHTML =
        `<p>el producto: <strong>${productoSolicitado}</strong> ya esta ingresado</p>`;
    }else{
        stock.push(productoSolicitado);
        document.getElementById("resultado").innerHTML =
        `<p>producto ingresado correctamente, stock: <strong>${stock.join(" ~ ")}</strong></p>`
    }
}

function listadeinvitados(){
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("porfavor, ingrese su nombre")
    if (invitados[0]==persona){
        document.getElementById("resultado").innerHTML =
        `<p>bienvenido ${persona}</p>`
    } else if (invitados[1]==persona){
        document.getElementById("resultado").innerHTML =
        `<p>bienvenido ${persona}</p>`
    } else if (invitados[2]==persona){
        document.getElementById("resultado").innerHTML =
        `<p>bienvenido ${persona}</p>`
    } else{
        document.getElementById("resultado").innerHTML =
        `<p>No estas en la lista</p>`
    }
}

function evaluarrol(){
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("ingrese su rol (Admin, Editor, Invitado)")
    if (usuarios[0]===rol){
        usuarios.unshift(rol)
        alert("Rol prioritario agregado")
    }else if (usuarios[1]==rol){
        usuarios.push(rol)
        alert("Rol agregado")
    }else if (usuarios[2]==rol){
        usuarios.push(rol)
        alert("Rol agregado")
    }else{
        alert("rol no identificado")
    }
}
