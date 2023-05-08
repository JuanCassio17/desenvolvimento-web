// chamando funções com call e apply
// a grande diferença entre o call e apply é a forma como são inseridos os parâmetros

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco());
console.log(produto.getPreco());

const carro = {
    preco: 49000, desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// call você pode atribuir os parâmetros
// personalizar os que estavam padrão
// o primeiro atributo é o contexto (objeto) e os outros são os parâmetros padrões
console.log(getPreco.call(carro, 0.17, "$"));

// apply passa os parâmetros em um array
// segue o mesmo conceito com o call, única diferença é o array []
console.log(getPreco.apply(carro, [0.17, "$"]));

// A função bind serve para definir quem é a variável this dentro de uma função.

const carro2 = {nome: 'Civic'}
const fruta = {nome: 'Maça'}
 
function imprimirObjeto() {
    console.log(this) // O bind vai dizer quem será o this!
}
 
const imprimirCarro = imprimirObjeto.bind(carro2)
imprimirCarro()
 
const imprimirFruta = imprimirObjeto.bind(fruta)
imprimirFruta()