/*🟦 Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un
número usando prompt. Luego, crea una función
que reciba ambos valores como parámetros,
repita la palabra N veces utilizando un bucle,
y retorne el resultado completo como una
cadena de texto. Muestra el resultado con
  alert. */

function repetirPalabra(palabra, veces) {
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado += `${palabra} `//  'hola hola hola hola '
    }
    return resultado.trim(); // trim elimina espacios 'hola hola hola hola'
    // en los extremos
}

function mostrarPalabras() {
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt("Ingrese cantidad a repetir"));

    let resultadoFinal = repetirPalabra(palabra, numero);

    document.getElementById("resultado1").textContent = resultadoFinal;
}

/*🟦 Ejercicio 2: Comparar dos números
📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare
los valores y retorne un mensaje indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje 
*/


function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual a ${num2}`;
    }
}

function mostrarComparacion() {
    let input1 = document.getElementById("numComp1");
    let input2 = document.getElementById("numComp2")
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let resultado = compararNumeros(num1, num2);
    document.getElementById("resultado2").textContent = resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("valor invalido, ingrese solo numeros");

    }
    input1.value = ""; // Limpiar la caja de texto
    input1.focus(); //
    input2.value = "";
}

/*🟦 Ejercicio 3: Verificar si un número es par o impar
📌 Solicita un número usando input. Diseña una función que reciba ese número como parámetro, determine si es par o impar, 
y retorne un mensaje con el resultado. Muestra ese mensaje al usuario  en html */

function Pares() {
    const inputNum = document.getElementById("input3");
    let num = parseInt(inputNum.value);
        if (isNaN(num) || num === 0) {
            document.getElementById("resultado3").textContent =
            "Valor invalido, Por favor ingrese un número válidos.";
            return;
        } else if (num% 2 >=1 || num% 2 <=-1){
            document.getElementById("resultado3").textContent =
            "el valor ingresado es impar";
            return;
        }else{
            document.getElementById("resultado3").textContent =
            "el valor ingresado es par";
            return;
        }
        
}

/*
🟦 Ejercicio 4: Validar si un número es primo
📌 Captura un número usando input. Luego, crea una función que reciba
ese número como parámetro y retorne un mensaje indicando si el número es primo o no. 
Muestra el resultado con 
html*/
function validarprimo(){
    let nump = document.getElementById("input4");
    if (nump <= 0){
        document.getElementById("resultado4").textContent =
        "el valor ingresado no es primo";
        return
    }
    for (let i = 2; i<nump; i++){
        if (nump % i === 0){
            document.getElementById("resultado4").textContent =
            "el valor ingresado no es primo";
            return;
        }
    }
    document.getElementById("resultado4").textContent =
    "el valor ingresado es un numero primo";
    return;
}