console.log("conexion exitosa")
let lista = ["rojo","azul"]
lista.unshift("amarillo")


function quitar(){
    let eliminado = lista.shift()
    alert("el primer valor de la lista es: "+eliminado)
}
