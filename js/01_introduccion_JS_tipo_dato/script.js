//prueba de conexion JS 
console.log("conexion establecida con js¡");// mensaje aparecera al inpeccionar laa pagina en console

// creacion de variables

let num = 25; //variable int

function numeroentero() {
    return "variable numerica: " + num;
}

// imprecion en consola 
console.log("variable numerica: " + num);



let numDEC = 3.1416;

function numerodecimal() {
    return "variable decimal: " + numDEC;
}

console.log("la variabe decimal es: " + numDEC);

let texto = "buenos dias";

function lineadetexto() {
    return "variable string: " + texto;
}

console.log("el texto asingnado es: " + texto);

let booleano = false;

function varbooleano() {
    return "variable booleano: " + booleano;
}

console.log("el valor booleano es: " + booleano);

let arreglonum = [1,2,3,4,5,6];

function arreglonumerico() {
    return "variable array: " + arreglonum;
}
console.log("el arreglo numerico asignado es: " + arreglonum);

let persona = {
    nombre: "miguel",
    edad: 30
};

function person() {
    return "variable object: " + persona;
}
console.log("el nombre y edad de la persona es: " + persona);