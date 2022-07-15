const nome = 'Gustavo'
const concatenacão = "Olá " + nome + "!"
console.log(concatenacão)

const template = `
Olá
${nome}!`
console.log(template)
console.log(`1 + 1= ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`você tem que..... ${up('estudar')}`)