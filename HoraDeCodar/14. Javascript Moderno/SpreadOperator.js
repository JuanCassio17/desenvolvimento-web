/**
 * 8. Spread Operator
 * o spread pode ser utilizado também em arrays e objetos
 * utilizamos para constituir novos valores destes dados em outros arrays e objetos
 * ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, por exemplo
 */

// com arrays
const a1 = [1, 2, 3]
const a2 = [10, 11, 12]

a1.push(100, ...a2)

console.log(a1);

// ou você pode criar um novo array
const a3 = [...a1, ...a2]

console.log(a3);

// com objetos
const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const carOtherInfos = {km: 100000, price: 490000}

const car = {...carName, ...carBrand, ...carOtherInfos, carWheels: 4}

console.log(car);