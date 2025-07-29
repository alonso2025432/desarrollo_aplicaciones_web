function calcularImpares(num){
    let impares = [];
    for (let i = 1; i<=num; i++){
        if (i%2===0){
        }else{
            impares.push(i)
        }
    }
    return impares
}
function mostrarImpares(){
    let input1 = document.getElementById("input1");
    let num = input1.value
    let mostrar = calcularImpares(num);
    alert(mostrar)
    console.log(mostrar)
}