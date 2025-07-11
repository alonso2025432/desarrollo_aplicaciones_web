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