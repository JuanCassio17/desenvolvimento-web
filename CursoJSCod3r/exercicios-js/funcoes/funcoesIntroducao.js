// você consegue usar funções de diferentes formas:
// função como parâmetro;
// retornar uma função com outra função;
// declarar função dentro de outra função;
// criar função de forma literal;
// armazenar função em uma variável.

// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

// funções em JS são tratadas como dados

// --- criar de forma literal ---
function fun1(){
    // o retorno não é obrigatório
    // caso você não retornar nada explicitamente, ela identifica como undefined
}

// --- armazenar em uma variável ---
const fun2 = function(params) {
    
}

// --- armazenar em um array ---
const array = [function(a, b) {return a + b}, fun1, fun2]
// acessando a função pelo array
console.log(array[0](2,3)); // função de índice 0

// --- armazenar em um atributo de objeto ---
const pessoa = {
    nome: 'Fulano',
    gritar: function name(texto) {
        return texto = texto.toUpperCase();
    },
    endereco: 'Rua rua'
}
// acessando função de um atributo de objeto
console.log(pessoa.gritar("bom dia"));

// --- passar função como param ---
function run(fun) { // você na verdade está chamando por aqui
    fun()
}
// chamando função que foi passado como parâmetro
run(function(){
    console.log('Executando');
})

// --- uma função pode retornar/conter uma função ---
// isso aqui é péssimo
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}
// chamando uma função com outra função como retorno
soma(1,2)(4)
// ou
const cincoMais = soma(2,3)
cincoMais(4)

