// você pode instanciar objetos através de funções construtoras
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado. Pertence apenas a esse escopo de código
    let velocidadeAtual = 0

    // método público para acessar o atributo de velocidadeAtual
    // o "this" é o que torna os atributos e métodos públicos ao instanciar objetos
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    // lembre-se: o "this" torna o atributo público, mas se você quiser privado use "const" ou "let"
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const uno = new Carro // instanciando objeto carro -> sem parâmetros também funciona, mas é estranho
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20) // instanciando objeto carro e atribuindo valores
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); // retorna function
console.log(typeof Carro()); // retorna undefined
console.log(typeof new Carro()); // retorna object
console.log(typeof ferrari); // retorna object
