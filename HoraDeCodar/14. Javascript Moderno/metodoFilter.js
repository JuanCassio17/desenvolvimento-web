/**
 * 4. Filter
 * o filter é um método de array para filtrar dados, baseado em algum condição que estabelecemos
 * isso nos dá um array com apenas os elementos que queremos, de forma performática
 * há varios métodos de array importantes no ES6, este é um deles
 */

const arr = [1,2,3,4,5]

const filtroArr = arr.filter(item => item > 3)

console.log(filtroArr);

const highNumbers = arr.filter((n) => { // o parâmetro é os elementos "individuais" do array
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers);

// o array original não é alterado

const users = [
    {name: "Matheus", available: true},
    {name: "Pedro", available: false},
    {name: "João", available: false},
    {name: "Marcos", available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notAvailableUsers);

const users2 = [
    {name: "Matheus", available: "verdadeiro"},
    {name: "Pedro", available: "falso"},
    {name: "João", available: "verdadeiro"},
    {name: "Marcos", available: "falso"},
]

const availableUsers2 = users2.filter((user) => user.available == "verdadeiro")
const notAvailableUsers2 = users2.filter((user) => user.available == "falso")

console.log(availableUsers2);
console.log(notAvailableUsers2);