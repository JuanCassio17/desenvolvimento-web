// estrutura de chave e valor, mas não substitui os objetos
// sua grande vantagem é que não aceita chaves repetidas

const tecnologias = new Map();
tecnologias.set('react', {framework: 'false'})
tecnologias.set('angular', {framework: 'true'})

console.log(tecnologias.react); // jeito errado de acessar
console.log(tecnologias.get('react')); // jeito certo de acessar
console.log(tecnologias.get('react').framework); // acessando o valor da chave

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => { // valor, chave
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123)); // está ou não contido nesse Map ---> nesse exemplo é true

chavesVariadas.delete(123) // excluindo
console.log(chavesVariadas.has(123)); // retorna false

console.log(chavesVariadas.size);

// testando se pode haver chaves repetidas
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // o b ganha o valor porque foi substituído
console.log(chavesVariadas); // 123 => 'b'