// exemplo com array

const [a] = [10]
console.log(a);

const [n1, n2, n3, n4, n5, n6 = 1, n7 = 3] = [1, 5, 12, 15, 10]
console.log(n1, n2, n7);

// isso aqui ninguém usa nunca
const [, [, nota]] = [[, 8, 8], [9, 7, 8]]
console.log(nota);

