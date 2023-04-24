// resultados true ou false

console.log('01)', '1' == 1); // true
console.log('02)', '1' === 1); // false.
// O operador === pergunta se é ESTRITAMENTE IGUAL, nesse caso '1' é String e 1 é number
console.log('03)', '3' != 3); // false
console.log('04)', '3' !== 3); // true -> são ESTRITAMENTES DIFERENTES
console.log('05)', 3 < 2); // false
console.log('06)', 3 > 2 ); // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

const d1 = new Date(0) // padrão = 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2); // false. São objetos diferentes
console.log('10)', d1 == d2); // false. São objetos diferentes

console.log('11)', d1.getTime() == d2.getTime()); // true. Os dois são do mesmo tipo
console.log('12)', d1.getTime() === d2.getTime()); // true. Os dois carregam o mesmo valor de data

console.log('13)', undefined == null); // true
console.log('14)', undefined === null); // false

// por via das dúvidas, use o '===' para não haver erros de comparação



