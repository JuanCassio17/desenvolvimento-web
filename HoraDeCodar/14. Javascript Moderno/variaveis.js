/**
 * 2. Variáveis com let e const
 * temos duas novas formas de declarar variáveis no ES6
 * a let que é semelhante ao var, podemos alterar valores
 * e a const, que é uma forma de declarar constantes
 * o grande diferencial é o escopo de blocos, não temos mais variáveis sendo 'vazadas' para outros escopos por causa do mesmo nome
 */

var x = 10
var y = 15

if (y > 20) {
    var x = 5
    console.log(x)
}

console.log(x);

let a = 10
let b = 15

if(b > 10) { 
    let a = 5 // let só pertence a esse escopo
    console.log(b)
}

console.log(a);

// o let é muito comum em loops por exemplo

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);