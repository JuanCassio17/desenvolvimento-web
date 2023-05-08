// formas de declarar funções

// chamando função que eu nem declarei ainda
// isso acontece porque o JS interpreta todas as funções do arquivo primeiramente
// function declaration é a única estrutura capaz de usar um método antes mesmo de declarar
console.log(soma(1,2));

// function declaration
// funções declaradas de forma literal
// você pode chamar esse tipo de função antes mesmo de declarar
function soma(a, b) {
    return a + b    
}

// function expression
// funções anônimas, armazenadas em constantes
// essa estrutura é importante para evitar sobrescrita de funções
const sub = function(x, y) {
    return x - y
}

console.log(sub(1,3));

// named function expression
// funções mistas (com as duas apresentadas anteriormente)
// a vantagem é você utilizar essa estrutura ao debugar o código para visualizar no log o nome da função
// aqui ele considera o nome da variável (const)
// não é muito utilizada
const mult = function multiplicar(x, y) {
    return x * y
}

console.log(mult(3,5)); // você chama pelo nome da constante
// console.log(multiplicar(3,5)); // erro -> chame pelo nome da constante