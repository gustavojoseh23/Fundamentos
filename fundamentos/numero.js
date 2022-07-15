const nota1 = 3 
const nota2 = Number('4.5')

console.log(nota1, nota2)
console.log(Number.isInteger(nota1, nota2))
console.log(typeof Number)

const avaliação1 = 5.6
const avaliação2 = 4.6

const total = avaliação1 * nota1 + avaliação2 + nota2
const media = total / (nota1 + nota2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // transforma em Binário
console.log(typeof media)