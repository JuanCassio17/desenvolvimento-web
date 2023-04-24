// basicamente serve para usar funções ou atributos dos componentes
console.log(Math.ceil(6.1)); // arredonda pra cima
const obj1 = {
    
}

obj1.nome = 'João' // mais fácil usar essa estrutura para definir valores nos atributos
// obj1['nome'] = 'João Silva' // também pode definir atributos com ['']
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome // define que o valor será o este atribuído nos parâmetros
    
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2);
obj3.preco = 2300.00
console.log(obj3);



