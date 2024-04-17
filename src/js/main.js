console.log("Numbers")

/* # Creación de números


let numero1 = 45
let numero2 = Number(45)
let numero3 = new Number(45)

// número legible: 5_000_000 -> 5 millones, no altera significado pero ayuda visualmente al desarrollador
// Number.MIN_VALUE -> MIN y MAX muestran el rango seguro de JS

// # Operaciónes matemáticas 

const numero1 = 5
const numero2 = "10"

// Para restar, multiplicar y dividir, JS permite hacerlo num con string. Pero si ponemos + lo que hace es concatenar y devuelve un str

let numero1 = Number.parseInt(prompt("Ingresa un numero"))
let numero2 = Number.parseFloat(prompt("Ingresa un numero"))

console.info(typeof(numero1))
console.info(typeof(numero2))

console.info(Number.isInteger(numero1))
console.info(Number.isInteger(numero2))

console.log(Number.isInteger(numero1)) // Para saber si es entero, retorna booleano
//parseInt() -> convierte a entero
//parseFloat() -> a decimal

let numero = 45
console.log(String(numero)) // lo cambia a str
console.log(numero.toString(2)) // Sirve para hacer str, lo puedo cambiar de formato en el parametro a binario por ej

const numeroFloat = 512.5678
console.log(numeroFloat.toFixed(3)) // cuantos decimales quiero que tenga, si tiene más aproxima

const numero = 4545165665658758
console.log(numero.toExponential()) // str del numero en formato exponencial

const numero = 888888888888888888888888
console.log(numero.toPrecision(2)) // reducir el exponencial

*/
// clase Math

console.log(2*2*2*2*2)
console.log(Math.pow(2,5)) // 2 elevado a la 5
// también se puede poner 2 ** 5

console.log(Math.sqrt(25)) // raiz cuadrada
console.log(Math.cbrt(125)) // raiz cubica
console.log(Math.cos(0)) // coseno
console.log(Math.abs(-30.50)) // valor absoluto -> versión positiva del número
console.log(Math.sign(0)) // retorna 1 (positivo), -1 (negativo) o 0
