// função sem retorno
// em js, você nunca deixa explícito se uma função tem retorno ou não

// a estrutura de funções é com a palavra chave "function"
function imprimirSomaSemRetorno(a, b){ // parâmetros dessa função
    console.log(a+b)
}

function imprimirSomaComRetorno(a, b) {
    return a + b // usa-se o "return" para retornar valores
}

imprimirSomaSemRetorno(2,3) // retorna o valor.
console.log(imprimirSomaComRetorno(2,3))

// você também pode definir um único número. Porém o retorno será "NaN"
imprimirSomaSemRetorno(2) // retorno NaN

// assim como não definir números nos parâmetros
imprimirSomaSemRetorno() // retorno NaN

// se você passar vários números, ele vai considerar somente os dois primeiros
imprimirSomaSemRetorno(2,5,3,2,4) // retorno é 7

function soma(a, b = 0){ // você já pode definir valores aqui caso não há nos parâmetros ao ser chamado
    return a + b
}

console.log(soma(2)) // resultado 2, pois não foi passado outro valor, então ficou 2 + 0




