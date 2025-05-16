console.log("conectado correctamente...");

/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

function diferenciaentrecentroysuma(){
    let numeros = [2,5,7,8,10];
    let resultado = ((numeros[0]+numeros[numeros.length-1])-numeros[2]);
    alert("la diferecia entre el centro y los extremos es: \n" 
        +resultado);
}