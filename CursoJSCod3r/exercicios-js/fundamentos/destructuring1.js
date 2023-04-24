// novo recurso do ES2015
// operador para desestruturação

// destructuring serve para você retirar valores específicos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua rua rua',
        numero: 320
    }
}

// a estrutura para usar o destructuring é dessa forma
const {nome, idade} = pessoa // retirando os valores "nome" e "idade" o objeto "pessoa"
console.log(nome, idade);

const {nome: n, idade: i} = pessoa // definindo variáveis para consulta
console.log(n, i);

const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada); // retorna undefined, true
/*
sobrenome não é definido e não existe no escopo do objeto, 
já o bemHumorada não existe no escopo, mas foi definido como true.
*/ 

const {endereco: {logradouro, numero}} = pessoa // acessando atributos em {}
console.log(logradouro, numero);

