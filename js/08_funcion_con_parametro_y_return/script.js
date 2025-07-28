function filtrarMultiples(limite,multiplo){
    let arreglo = []
    for (let i =1; i<limite;i++){
        if (multiplo*i<=limite){
            arreglo.push(i)
        }
    }
    return arreglo
}

function mostrarMultiples(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let resultadofinal = filtrarMultiples(input1,input2)
    document.getElementById("resultado1").textContent = resultadofinal;
}