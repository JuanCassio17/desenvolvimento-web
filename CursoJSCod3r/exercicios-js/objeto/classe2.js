// classes em js são uma forma diferente de definir objetos através de uma função construtora

// relação de herança entre classes
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }

}

class Pai extends Avo { // aí sim -> usando "extends" para definir herança
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome) // o super define que o sobrenome vem direto da classe mãe ("Avo")
        this.profissao = profissao
    }
}

class Filho extends Pai { // estende de pai e pai estende de avo
    constructor() {
        super("Silva") // chamando o super do pai (sobrenome)
    }

}

const filho = new Filho()
console.log(filho); // retorna "Silva" e "Professor"

