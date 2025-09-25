function example(elemento){
    console.log("elemento clickeado", elemento)
}

function turnOFF(elemento){
    if (elemento.innerText == "off"){
        elemento.innerText = "on"
    }else{
        elemento.innerText = "off"
    }
    
}
function remove(elemento) {
    elemento.remove();
}