console.log("conexion exitosa")



let dias = ["lunes","miercoles","jueves"]
let aliminado = dias.shift()
dias.unshift("martes")
dias.unshift(aliminado)
dias.push("viernes")
console.log("el listado de dias es: "+dias)
