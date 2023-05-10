// Usando a notação literal
// não confunda com o JSON
const obj1 = {
    // literal
}

// Object em JS
console.log(typeof Object); // retorna function
console.log(typeof new Object); // retorna object -> pode usar () ou não
const obj2 = new Object // chama por "new Object"

// Funções construtoras
// fica com os atributos visíveis
function Produto(nome, preco, desc) { // os outros atributos ficam ocultos, com exceção de "nome"
    this.nome = nome // fica visível a todos (público)
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
        // esses atributos de "preco" e "desc" estão encapsulados para este cálculo
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2227.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função factory
// é um padrão de projeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 7989, 4)
const f2 = criarFuncionario("Maria", 11989, 1)
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha);

// Uma função famosa que retorna objeto
// transformando um JSON em um objeto
// muito bom para consumo de APIs
const fromJSON = JSON.parse('{"info": "sou um Json"}') // converte esse texto em uma variável
console.log(fromJSON.info); // acessando o atributo "info" convertido do texto JSON