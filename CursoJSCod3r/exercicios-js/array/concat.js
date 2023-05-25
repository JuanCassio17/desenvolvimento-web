// concatenar arrays -> transforma em um novo array

const filhas = ["Ualeska", "Cibalena"]
const filhos = ["Uoxiton", "Uesclei"]

const todos = filhas.concat(filhos) // simples assim
console.log(todos, filhas, filhos); // os outros arrays não se alteram

// você também pode concatenar novos valores
const todos2 = todos.concat(todos, "Fulano")
console.log(todos2);

// você também pode usar o concat() em arrays vazios e adicionar valores diretamente
console.log([].concat([1,2], [3,4], 5, [[6, 7]]));
