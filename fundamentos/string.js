const estudante = "Gustavo"

console.log(estudante.charAt(4)) // Procura o indice 4 
console.log(estudante.charAt(5))
console.log(estudante.charCodeAt(3)) // tabela unicode
console.log(estudante.indexOf('a'))

console.log(estudante.substring(1))
console.log(estudante.substring(0, 4))

console.log('estudante '.concat(estudante).concat('!'))
console.log(estudante.replace(4, 'e'))

console.log('Maria, Gabriel, Pedro,'.split(','))