// transformando uma classe em função construtora

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`); // importante definir o "this"
//     }
// }

function Pessoa(nome) {
        this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`); // importante definir o "this"
    }
}

const p1 = new Pessoa('João')
p1.falar()