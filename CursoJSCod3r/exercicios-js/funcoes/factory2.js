// também é possível definir atributos nos parâmetros ()

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 // desconto vem por padrão
    }
}

console.log(criarProduto("Notebook", 2000));
console.log(criarProduto("iPad", 3000));
