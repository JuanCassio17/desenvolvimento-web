const peso1 = 1.0;
const peso2 = Number('2.0') // converte para number

const peso3 = '2.0' // aqui não foi convertido para number, portanto é String

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // verifica se é um inteiro
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(peso3))


// Number atribuído ali é uma function (função)

const avaliacao1 = 9.871
const avaliacao2 = 1 

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) // se um dos valores forem String ele retorna NaN

// media.toFixed(2) -> resolve as casas decimais
// media.toString() -> converte valor number em String
// media.toString(2) -> converte para valor binário

console.log(media.toFixed(2));
console.log(media.toString()); // converte para String
console.log(media.toString(2)); // converte para binário
console.log(typeof media)

console.log(typeof Number) // retorna como function