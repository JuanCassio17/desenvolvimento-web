// tabela verdade

// v e v -> v
// v e f -> f
// f e ? -> f

// v ou ? -> v
// f ou v -> v
// f ou f -> f

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwiser xor. "Ou" exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    // nesse caso só precisa definir a chave e deixar o valor de fora
    // o valor a retornar é o próprio valor da constante (const)
    return {
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel

    }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));