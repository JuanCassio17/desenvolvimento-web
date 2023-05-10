function MeuObjeto() {
    
}

console.log(MeuObjeto.prototype); // retorna {} -> é umm objeto

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto
// todos objetos criados a partir de uma função construtora apontam para um mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__); // retorna true
console.log(MeuObjeto.prototype === obj1.__proto__); // retorna true

MeuObjeto.prototype.nome = "Anônimo" // referenciando valor em MeuObjeto
// ao referencia em MeuObjeto, todas os objetos que herdam também recebem o mesmo valor

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.nome = "Fulano"
obj1.falar() // altera para "Bom dia! Meu nome é Fulano"
console.log(obj1.nome);
console.log(obj2.nome);

// se o próprio professor disse que é confuso eu posso fazer o quê?

const obj3 = {

}

obj3.__proto__ = MeuObjeto.prototype // atribuindo ao MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()

// Resumindo a locura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // true
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// na aula de "Herança #04 o professor fala algo interessante a partir dos 10min de vídeo"



