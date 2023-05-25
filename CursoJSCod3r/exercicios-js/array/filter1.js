// filter serve para filtrar um array
// para criação de um novo array com os dados filtrados
// o array com filter vai ser menor do que o array original
// ele pode ser do mesmo tamanho ou menor

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de vidro", preco: 12.49, fragil: true },
    { nome: "Copo de plástico", preco: 18.99, fragil: false}
]

// return false retorna nenhum elemento
// return true retorna todos elementos

console.log(produtos.filter(function(p) { // nesse exemplo, só interessa o callback (p)
    // aqui você pode aplicar umas condicionais.
    // exemplo: retorne os produtos com valores maiores que 2500
    return p.preco > 2500
}));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro)); // retorna os produtos caros
console.log(produtos.filter(fragil)); // retorna os produtos frágeis 
console.log(produtos.filter(caro).filter(fragil)); // retornas os produtos caros e frágeis