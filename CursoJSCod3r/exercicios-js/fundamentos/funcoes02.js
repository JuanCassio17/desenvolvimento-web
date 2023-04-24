// armazenando uma função em uma variável

const imprimirSoma = function (a,b) {
    console.log(a + b);
}

imprimirSoma(2,9)

// armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,5))

// retorno implícito -> UAU
const subtracao = (a, b) => a - b

console.log(subtracao(1,1))