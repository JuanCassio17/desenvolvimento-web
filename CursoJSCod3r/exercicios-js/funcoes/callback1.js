// Callback -> chamar um função de volta
// JS usa bastante o padrão Observer

/*
A ideia do callback é você passar uma função para outra função e quando determinada ação acontecer
essa função vai ser chamada de volta. -> Padrão Observer

Essa função callback pode ser chamada várias vezes ou uma única vez. Vai depender do contexto.
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

// forEach é uma função que está presente em todo array
fabricantes.forEach(imprimir) // chama os elementos através da função criada

fabricantes.forEach(function(fabricante) { // chama os elementos através de uma função direta
    console.log(fabricante); // o parâmetro "fabricante" será o indíce dos elementos no array
})

// você também pode usar uma função arrow
// fabricantes.forEach(fabricante => console.log(fabricante))

/*
Callback nada mais é do que você passar uma função e 
essa função será chamada quando um evento acontecer

Nesse contexto ele chamou o evento toda vez que iterava um elemento do array

*/


