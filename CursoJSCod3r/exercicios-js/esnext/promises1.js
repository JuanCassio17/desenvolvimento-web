// objetivo das promises: compor melhor uma chamada atrás da outra
// evitar chamar vários métodos em uma função callback

// let a = 1
// console.log(a);

// let p = new Promise(function(cumprirPromessa) {
//     cumprirPromessa(3) // promises só retorna um valor, portanto use somente um parâmetro
// })


// você também pode passar um objeto nas promises

// let p = new Promise(function(cumprirPromessa) {
//     cumprirPromessa({
//         x:3,
//         y:4
//     })
// })

// ou um array

let p = new Promise(function(cumprirPromessa) { // o nome do parâmetro por padrão se chama "resolve"
    cumprirPromessa(['ab', 'bc', 'cd'])
})

// ou pode definir diretamente

// new Promise(function(cumprirPromessa) {
//     cumprirPromessa(['ab', 'bc', 'cd'])
// })  .then(primeiroElemento)
//     .then(primeiraLetra)
//     .then(letraMinuscula)
//     .then(console.log)

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

// console.log(typeof p); // object
// console.log(typeof Promise); // function

// --------- para chamar uma promise use "then" ---------
// p.then(function(valor) {
//     console.log(valor); // valor 3
// })

// usando arrow function
// a vantagem de usar as promises é a composição de vários then
// --- Importante: o uso de vários then alteram o valor a cada novo then ---
p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

