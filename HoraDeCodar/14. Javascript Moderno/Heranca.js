/**
 * 10. Herança
 * podemos criar herança de classes com ES6 também
 * utilizamos a palavra extends para referir a classe herdada
 * e as propriedades que utilizamos dela, devem ser enviadas via função super
 */

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDisCount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

class ProductWithAttributes extends Product {
    constructor(name, price, colors) { // é preciso colocar os atributos da classe herdada + os atributos da nova classe
        super(name, price) // e chamar a função super passando os atributos da classe herdada
        this.colors = colors
    }
    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["preto", "azul", "verde"])

console.log(hat.name);
console.log(hat.productWithDisCount(30));
hat.showColors();

