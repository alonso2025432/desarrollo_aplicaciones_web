console.log("conexion exitosa")



let eliminado = []
let numeros = [10,20,30]
numeros.push(40)
eliminado.push(numeros.shift())
numeros.unshift(5)
eliminado.push(numeros.pop())
console.log("el listado quedo como: "+numeros)

