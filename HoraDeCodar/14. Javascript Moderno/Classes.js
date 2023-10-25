/**
 * 9. Classes
 * as classes são recursos fundamentais para programar com orientação a objetos
 * agora o js tem este recurso implementado, onde temos acesso a: constructor, propriedades, métodos e mais
 * antes as classes eram baseadas em funções (constructor functions)  
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

const shirt = new Product("Camisa", 49.0)

console.log(shirt);
console.log(shirt.name);
console.log(shirt.price);

console.log(shirt.productWithDisCount(10));

const jeans = new Product()

jeans.name = "Calça jeans"
jeans.price = 89.99

console.log(jeans);