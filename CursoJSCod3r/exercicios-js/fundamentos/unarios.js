let num1 = 1
let num2 = 2

num1++ // pós-fixada
console.log(num1);

--num1 // pré-fixada
console.log(num1);

console.log(++num1 === num2--); // retorna true, pois o ++num1 já foi calculado o +1. Código feio.
console.log(num1 === num2);

