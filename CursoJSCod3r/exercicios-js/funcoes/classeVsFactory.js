// classe é uma forma diferente de definir funções em js
// é mais do conceito de orientação a objetos

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`); // importante definir o "this"
    }
}

const p1 = new Pessoa('João')
p1.falar()

// a função por vezes tem algumas vantagens devido o seu contexto léxico
// a variaǘel "nome" é dentro do contexto da função
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // não precisa do "this"
    }
}

const p2 = criarPessoa("João")
p2.falar()

