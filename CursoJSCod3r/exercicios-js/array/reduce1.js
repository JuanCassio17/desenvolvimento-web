// reduce serve para você reduzir os valores de um array em um só (soma final).

/*
 O reduce() serve para você reduzir um array para um só valor, 
 tipo quando você tem um array cheio de valores e quer a soma deles. 
*/

const alunos = [
    {nome: "João", nota: 7.4, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

// extraindo somente as notas dos alunos com map
// logo em seguida chamando o reduce()

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
})

console.log(resultado); // soma resultante