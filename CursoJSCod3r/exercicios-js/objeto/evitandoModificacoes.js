// restringir liberdades que js traz

// Object.preventExtensions -> não permite que o objeto seja estendido (adicionar novos atributos)
// você pode excluir atributos, mas não definir novos
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "promocao"
})

console.log("Extensível:", Object.isExtensible(produto)); // false
produto.nome = "Borracha" // alterando nome que foi definido acima
produto.descricao = "Borracha escolar branca" // não faz efeito. Novos atributos não são considerados
delete produto.tag // excluindo atributo "tag" definido em "produto"
console.log(produto); // só retorna o "nome" e "preco"


// Object.seal -> "selar"
// não consegue adicionar novos atributos
// não consegue excluir atributos
// consegue alterar valores dos atributos
const pessoa = {
    nome: "Juliana",
    idade: 35
}

Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa)); // true

pessoa.sobrenome = "Silva" // não faz efeito
pessoa.nome = "Juliana Teste" // altera o nome
delete pessoa.nome // não faz efeito
console.log(pessoa);

// Object.freeze() = selado + valores constantes
// não consegue fazer nada mais