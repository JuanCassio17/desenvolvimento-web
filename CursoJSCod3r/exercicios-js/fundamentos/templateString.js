// maneira pouco produtiva
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + "!"

const template = `Olá ${nome}!` // isso aqui é muito bom

console.log(concatenacao, template);

// expressoes

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() // função simples em js
// para usar a função, simplesmente use up('')

console.log(`Ei... ${up('cuidado')}`)
console.log(up('Sucesso'))



