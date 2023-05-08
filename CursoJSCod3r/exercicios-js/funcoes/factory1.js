// função que retorna um objeto
// não precisa atribuir a palavra-chave "new"

// ao invés de fazer isso
// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 42
// }

// factory simples
// já temos os atributos e valores definidos
function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"

    }
}

console.log(criarPessoa());

