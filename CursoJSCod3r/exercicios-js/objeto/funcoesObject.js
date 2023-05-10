// Algumas funções importantes do Object

const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // acessa todas as chaves do objeto
console.log(Object.values(pessoa)); // acessa todos os valores do objeto
console.log(Object.entries(pessoa)); // retorna um array com todas as chaves e valores [[]]

Object.entries(pessoa).forEach(([chave, valor]) => { // exemplo utilizando o entries
    console.log(`${chave}: ${valor}`); // usando destructuring
})

Object.defineProperty(pessoa, "dataNascimento", { // definir atributos e suas propriedades (regras)
    enumerable: true, // é um atributo numerado
    writable: false, 
    // writable -> ele não altera o valor inicial. Semelhante ao freeze(), porém em um único atributo
    value: "01/01/2019" // define um valor
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento); // permanece a data original
console.log(Object.keys(pessoa)); // não aparece como uma chave se fosse false em enumerable
console.log(pessoa);

// Object.assign (EcmaScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // o atributo "a" é sobrescrito e passa a valer "4"
// o primeiro atributo é o objeto de destino e os outros são os valores que esse objeto recebe
// nesse exemplo, o dest recebe valores de o1 e o2
const obj = Object.assign(o1, o2) // coloca todos os valores dos objetos em um só
console.log(obj); // retorna todos valores juntos -> concatenação de valores

Object.freeze(obj) // utilizando o freeze para não alterar valores no objeto
obj.c = 123 // não se altera o valor se o método freeze() foi chamado
console.log(obj); // nada acontece pois foi congelado


