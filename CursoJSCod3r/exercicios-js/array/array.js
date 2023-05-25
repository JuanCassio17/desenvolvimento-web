// array em js é um objeto
// não existe um tipo array nativo
// é dinamicamente e heterogênea
// mas trabalhar com vários tipos diferentes dentro de um array é pouca organização

console.log(typeof Array, typeof new Array);

// não é a mais recomendada
let aprovados = new Array("Bia", "Carlos", "Ana") // essa é uma das formas de criar
console.log(aprovados);

// forma mais recomendada
aprovados = ["Bia", "Carlos", "Ana"] // a melhor forma é a literal entre []

console.log(aprovados[0]); // acessando valores pelo índice
console.log(aprovados[3]); // retorna undefined

aprovados[3] = "Paulo" // colocando valor e definindo índice -> mais comum para substituir

aprovados.push("Abia") // para adicionar ao final do array

console.log(aprovados.length); // para ver o tamanho do array

aprovados[9] = "Rafael" // aqui vai ficar undefined nesse intervalo
console.log(aprovados); 

console.log(aprovados[8] === undefined); // true

aprovados.push("Zezé")

// Faz alteração no array e não é um tipo de saída
aprovados.sort() // mantém ordem alfabética.
console.log(aprovados);

delete aprovados[1] // deletando valor no array
// não exclui o espaço, portanto o valor de 1 fica como undefined

console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"]

// primeiro parâmetro qual indíce quero deletar e o segundo é quantidade de deleção
aprovados.splice(1,1) // adicionar ou deletar elementos de um array
console.log(aprovados); // nesse caso removeu "Carlos"

// para adicionar com o mesmo método:
aprovados.splice(1,1, "Elemento1", "Elemento2") // os próximos parâmetros são pra adicionar
console.log(aprovados);
// caso não queira excluir nenhum e apenas adicionar, basta colocar o segundo parâmetro 0
aprovados.splice(1,0, "Elemento1", "Elemento2")
console.log(aprovados);

