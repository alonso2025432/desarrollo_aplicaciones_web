function mostrarSecuencia(numero){
    let cadena = []
    for (let i = 1; i<=numero; i++){
        
        if (i%4===0){
            cadena.push(i+"*");
        } else {
            cadena.push(i)
        }
    }
    return cadena
}

function mostrarcadena(){
    let input1 = document.getElementById("input1")
    let numero = input1.value
    let resultado = mostrarSecuencia(numero)
    document.getElementById("resultado1").innerHTML =
    `<p>${resultado}</p>`;
}