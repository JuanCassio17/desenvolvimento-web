// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    // você pode definir que um valor vai ser um ou outro com o operador ||
    // não é muito funcional, mas é bastante usada

    // aqui é funcional caso você queira atribuir uma variável
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}



console.log(soma1(1), soma1(3), soma1(1,2,3), soma1(0, 0, 0)); // último caso retorna 3 -> Errado!


// estrategia 1, 2 e 3 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // primeira estrategia -> diferente de undefined?
    b = 1 in arguments ? b : 1 // segunda estrategia
    c = isNaN(c) ? 1 : c // terceira estrategia -> é NaN? Melhor forma até agora
    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0, 0, 0));

// estrategia 4 para gerar valor padrao - es2015 -> Melhor estratégia e mais recomendada
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0, 0, 0));