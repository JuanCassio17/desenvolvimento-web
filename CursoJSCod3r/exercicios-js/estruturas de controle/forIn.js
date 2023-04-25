// for in não é muito utilizado
// o for in não entrega os valores, mas sim os índices desse array

const notas = [6.7, 10.0, 9.0, 5.2, 1.0]

for(let i in notas) {
    console.log(i, notas[i]);
}

// serve mais para percorrer um objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

