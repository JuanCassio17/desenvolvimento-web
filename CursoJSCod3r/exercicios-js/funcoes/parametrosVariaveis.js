function soma() {
    // mesmo que você não defina os parametros em (), é possível você definir posteriormente
    let soma = 0
    for (i in arguments){ // arguments é um array interno dentro de uma função
        // nesse caso estamos definindo que o número de params do usuário fará a soma dos valores
        soma += arguments[i]
    }
    return soma;
}

console.log(soma(1,2,3,4,5)); // quantos parâmetros eu quiser colocar
console.log(soma(1,2,3,4, "Teste")); // faz a soma dos valores e concatena com a string
console.log(soma('a', 'b', 'c')); // retorno é '0abc' -> o zero é o valor inicial

// esse arguments é um recurso mais antigo, 
// mais pra frente do curso será apresentado uma outra alternativa

