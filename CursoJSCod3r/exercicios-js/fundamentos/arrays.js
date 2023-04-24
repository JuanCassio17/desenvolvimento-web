// não há indíces pré-definidos
// são heterogêneos -> aceita vários tipos de dados

const valores = ['A', 'B', 3, 8.9, 'C'] // definição de forma literal com []
console.log(valores[0], valores[3]); // acessando valores pelo índice
console.log(valores[10]); // gera undefined, não dá erro
// undefined -> significa que o valor não foi definido

// para adicionar diretamente use essa estratégia:
valores[10] = 10 

// repare que ao definir o resultado fica como <5 empty items>
// ou seja, não foram definidos os 5 valores anteriores e pulou até o índice 10

console.log(valores.length); // tamanho do array -> ele considera inclusive os índices que não existem

valores.push({id: 3}, false, null, 'teste') // push -> insere novos itens


// não é uma boa ideia colocar um array com tipos diferentes de dados. É desorganizado.

console.log(valores.pop()); // pop -> remove o último valor inserido

delete valores[0] // deleta pelo índice

console.log(typeof valores); // um array é do tipo objectt

