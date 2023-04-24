// você pode definir strings com: '' ; "" ; ``

let nomeAspasSimples = 'bom dia'
let nomeAspasDuplas = "bom dia"
let nomeComCrases = `bom dia`

let exemplo = "cod3r"
console.log(exemplo.charAt(4)) // retorna o caractere pelo índice
console.log(exemplo.charAt(5)) // retorna nada porque não existe. Não gera erro
console.log(exemplo.charCodeAt(3)) // retorna o código UNICODE
console.log(exemplo.indexOf('3')) // retorna qual índice por valor
console.log(exemplo.substring(1)) // desconsidera o primeiro índice
console.log(exemplo.substring(0,3)) // vai ao índice 0 ao 3, sem considerar o 3
console.log(exemplo.concat("!")) // concatenar strings
console.log(exemplo.replace(3, 'e')) // substitui pelo índice
console.log(exemplo.replace('c', 'e')) // substitui pelo caractere
console.log(exemplo.replace(/\w/g, 'e')) // substitui tudo pela letra no segundo parâmetro -> REGEX

console.log('Ana,Maria,Pedro'.split(',')) // transformando em array



