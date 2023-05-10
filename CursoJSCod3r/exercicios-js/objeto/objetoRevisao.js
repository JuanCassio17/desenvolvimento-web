// coleção dinâmica de pares e valores
// você pode tanto adicionar quanto remover valores

const produto = new Object // você pode instanciar um objeto com "new"
produto.nome = "Cadeira" // pode definir atributos tanto dessa forma
produto['marca'] = "Generica" // quanto através de arrays []
produto['marca do produto'] = "Generica Teste" // você pode acessar também pelo array

console.log(produto.marca); // acesso normal
console.log(produto['marca do produto']); // acesso por array

// você pode remover atributos de um objeto através do "delete"
delete produto.marca // removendo o atributo "marca"
console.log(produto);


// dentro de um objeto você pode ter outros objetos.
// por exemplo "proprietario" e "rua"

// você pode atribuir valores em arrays [{objeto}, {objeto}]
// você pode atribuir funções nesses objetos
const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            rua: "Rua",
            numeroRua: 31
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19,
    }, {
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro: function() {
        return "calculo"
    }
}

console.log(carro.proprietario.nome);
console.log(carro.proprietario.endereco.numeroRua);
console.log(carro.condutores);
console.log(carro.calcularValorSeguro());

// você pode acessar os valores tanto por ponto "."
carro.proprietario.endereco.numeroRua = 1000
// quanto pelos colchetes []
carro['proprietario']['endereco']['logradouro'] = "Rua Teste"
console.log(carro);

// deletando atributos em um array
delete carro.condutores // deleta todos condutores
delete carro.proprietario.endereco // deleta todos os dados de endereco
delete carro.calcularValorSeguro // deleta a função

console.log(carro);
console.log(carro.condutores); // não gera erro. Na verdade ele retorna "undefined".
// console.log(carro.condutores.length); -> aqui gera erro porque o atributo não existe