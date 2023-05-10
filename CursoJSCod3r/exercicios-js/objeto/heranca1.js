// priorize a composição ao invés da herança
// por exemplo o "decorator"
// é baseada em protótipo

// ele procura através de uma hierárquia de objetos

// [[prototype]] -> Object.prototype
// -> o atributo prototype só está disponível dentro de uma função
// [[Prototype]] != prototype

const ferrari = {
    modelo: "f40",
    velMax: 324
}

const volvo = {
    modelo: "v40",
    velMax: 200
}

console.log(ferrari.__proto__); 
// a partir do __proto__ eu posso saber quem é o protótipo desse objeto
// o objeto pai

console.log(ferrari.__proto__ === Object.prototype); // retorna true
// Object.prototype -> é a maior hierárquia

console.log(volvo.__proto__=== Object.prototype); // retorna true

console.log(Object.prototype.__proto__); // retorna null
// retorna null pois o Object é o maior da cadeia de hierárquia

// Object.prototype -> retorna null

console.log(Object.prototype.__proto__ === null); // retorna true

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

// um objeto em js tem uma referência para seu protótipo

console.log(ferrari.prototype); // retorna undefined

// lembre-se que o Object.prototype está dentro apenas de funções
// em objetos você acessa com objeto.prototype
// .__prototype__ é um atributo