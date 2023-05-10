// cadeia de protótipos (prototype chain)

// nesse exemplo, vamos criar 3 objetos: avo, pai e filho. A partir disso vamos procurar o atributo.

Object.prototype.attr0 = '0' // definindo valor em Object -> não é recomendado!

const avo = { // avo tem como __proto__ o próprio Object
    attr1: "A"
}

const pai = {
    __proto__: avo, attr2: "B" // atribuindo os atributos de "avo" em "pai"
}

const filho = {
    __proto__: pai, attr3: "C" // atribuindo os atributos de "pai" em "filho"
}

console.log(filho.attr1); // retorna "A" pois ele procurou do pai e depois do avo
// o avo tinha o atributo 1 que corresponde ao valor "A"

console.log(filho.attr0); // retorna "Z" definido em Object.prototype

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // retorna tudo
// pois o filho herda de pai e pai herda de avo -> por fim herda de Object.prototype

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // shadowing -> ele está usando um atributo em carro. Sobrescrita
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}` // você pode puxar o atributo pelo "super"
        // nesse exemplo estamos usando o "status()" definido em "carro" através do super
    }
}

Object.setPrototypeOf(ferrari, carro) // definindo relação de herança 
// ferrari tem carro -> primeiro parâmetro é o objeto e o segundo é o prototype

Object.setPrototypeOf(volvo, carro) // mais uma atribuição

console.log(ferrari); // só retorna os atributos definidos no objeto
console.log(volvo); // aqui retorna os atributos definidos no objeto + o status() por conta do super

// os atributos herdados ficam ocultos, porém você pode acessá-los normalmente
volvo.aceleraMais(100)
ferrari.aceleraMais(200)

console.log(volvo);
console.log(ferrari);

console.log(volvo.status());
console.log(ferrari.status());

// resumindo, você pode definir herança de duas maneira:
// 1ª const filho = {__proto__: pai}
// 2ª Object.setPrototypeOf(volvo, carro)