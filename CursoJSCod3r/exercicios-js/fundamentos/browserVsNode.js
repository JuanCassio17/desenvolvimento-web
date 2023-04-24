// JS é executado no browser. Fora desse ambiente, o JS é executado no Node

// window -> componente global usado no console do browser
// você tem acesso aos atributos digitando "window" ou simplesmente "this"

// "global" dentro do node é o que equivale ao "window"

global.b = 123
this.c = 456

let a = 3;
console.log(global.b);
console.log(this.c);
console.log(module.exports === this);

// cada arquivo em node é um modulo (module) diferente que pode ser exportado (exports)

this.d = false
this.e = 'teste'
console.log(module.exports);

// criando uma variável sem var e let.
abc = 3 // Torna-se objeto global, não faça isso
console.log(global.abc);

// module.exports = {e: 456, f: false, e: 'teste'}
