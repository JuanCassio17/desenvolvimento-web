const pai = {
    nome: "Pedro",
    corCabelo: "preto"
}

const filha1 = Object.create(pai) // já atribui objeto que herda de pai
filha1.nome = "Ana"
console.log(filha1.corCabelo); // retorna "preto", atribuição de "pai"

const filha2 = Object.create(pai, { // definindo objeto que herda de pai e colocando validações
    nome: {
        value: "Bia", writable: false, enumerable: true
        // value -> define o valor do atributo. Nesse caso no atributo "nome"
        // writable -> não aceita alterações. Valor final.
        // enumerable -> para usar algumas funções em Object. "for in" ou "keys" por exemplo.
    }
})

console.log(filha2.nome);
filha2.nome = "Carla" // não há possibilidade de alteração por contado do "writable: false"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // permanece "Bia"

console.log(Object.keys(filha1)); // retorna "nome"
console.log(Object.keys(filha2)); // retorna "nome" por conta do "enumerable: true"

for(let key in filha2) { // isso aqui é ótimo. Quase um forEach
    console.log(key);
}

for(let key in filha2) { // isso é operação ternária
    filha2.hasOwnProperty(key) ? // verifica se o atributo vem de uma herança
    console.log(key) : console.log(`Por herança: ${key}`); // retorna a corCabelo
}
// hasOwnProperty() -> retorna true caso tenha atributo de herança. Mas use dentro de for in



