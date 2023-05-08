const pessoa = {
    saudacao: 'Bom dia',
    falar() { // pode atribuir a função assim também. Recurso novo
        console.log(this.saudacao); // acessando saudacao desse objeto. Se remover dá erro
    }
}

pessoa.falar() // retorna 'Bom dia'

const falar = pessoa.falar
// falar() // erro. Conflito entre paradigmas: funcional e OO.

// bind() você passa um objeto no qual você quer que seja resolvido o "this"
// ele vai puxar o "this" atribuido ao objeto definido
// é muito importante para definir os atribuidos que foram escolhidos no objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()