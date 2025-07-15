function contarHastaN(){
    let n = parseInt(prompt("Ingresa el número hasta donde quieres contar!"));
    let numeros = [];
    // Bucle for contar hasta N
    for (let i = 1; i <= n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado1").innerHTML =
    `<div class="resultado"><p>El conteo de 1 hasta ${n} es el siguiente:<br>
    <strong>${numeros.join(" - ")}</strong></p></div>`;
}

function sumarNumeros(){
    let suma = 0, i = 0, arr = [];
    while (i < 5) {
        let num = parseFloat(prompt(`Numero ${i + 1}:`));
        arr.push(num);
        if (!isNaN(num)) {
            suma += num;
            i++;
        }
    }
    document.getElementById("resultado2").innerHTML =
    `<div class="resultado"><p>La suma de: ${arr.join(" + ")} es: <strong>${suma}</strong></p></div>`;
}

numerosPares = [];
function pares(){
    numerosPares = [] // Reinicia el array
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0){
            numerosPares.push(i)
        }
    }
    document.getElementById("resultado3").innerHTML =
    `<div class="resultado"><p>Número pares del 1 al 20: <strong>{${numerosPares.join(", ")}}</strong></p></div>`;
}

let lista = []
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un numero para la cuenta regresiva: "));
    if (numero === 0) {
        alert("Numero no valido");
    }
    while (numero >= 0) {
        // alert(numero);
        lista.push(numero);
        numero--;
    };
    document.getElementById("resultado4").innerHTML = `<p>${lista.join("- ")}</p>`;

};

function mostrarTablaMultiplicar(){
    let resultado = "";
    let numero = parseInt(prompt("Ingrese número para trabajar: "));
    for(let i = 1; i <= 10; i++){
        let mult = numero * i;
        resultado += `<p>${numero} x ${i} = ${mult}</p>`;
    }
    document.getElementById("resultado5").innerHTML = resultado;
}

let sumaAcumulada = [];
function sumarHastaCero(){
    let suma = 0;
    let numero;
    sumaAcumulada = [];
    document.getElementById("resultado6").innerHTML = "";
    while (true) {
        numero = parseFloat(prompt("Introduce un número para sumar (0 para terminar)"));
        if (isNaN(numero)){
            document.getElementById(resultado6).innerHTML =
            "<p>Por favor, introduce un número valido.</p>"
            return
        }
        if (numero === 0){
            break
        }
        suma += numero
        sumaAcumulada.push(numero)
    }
    document.getElementById("resultado6").innerHTML =
    `<p>Números sumados: <strong>${sumaAcumulada.join(", ")}
    </strong><br>Total acumulado: <strong>${suma}</strong></p>`
}
function mostrarletras(){
    let cadaletra = []
    let palabra = prompt("introduce una palabra: ")
    for(let i = 0; i<=palabra.length;i++){
        cadaletra.push(palabra[i])
    }
    document.getElementById("resultado7").innerHTML =
    `<p>letras dentro de tu palabra: ${cadaletra}</p>`
}

function validarcontraseña(){
    while (true){
        contra = prompt("ingrese su contraseña: ")
        if (contra==="admin123"){
            alert("Acceso concedido")
            break
        }else{
            alert("Acceso denegado")
        }
    }
}