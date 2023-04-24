console.log(typeof Object); // retorna function
console.log(typeof new Object()); // retorna object

const Cliente = function(){
    
}

console.log(typeof Cliente); // cliente é uma function
console.log(typeof new Cliente); // enquanto new Cliente() é um object

class Produto{} // é função, tira da cabeça que é classe
console.log(typeof Produto); // produto é uma classe, portanto é uma function
console.log(typeof new Produto()); // enquanto new Produto() é uma instância, sendo object
