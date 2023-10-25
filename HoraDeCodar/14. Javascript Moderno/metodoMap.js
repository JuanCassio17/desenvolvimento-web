/**
 * 5. Map
 * o map é um método de array também, que percorre todos os elementos
 * quando utilizamos Map, estamos querendo modificar os dados do array
 * há vários métodos de array importantes no E6S, este é um deles
 */


// ao contrário do filter, o map altera o array original

const products = [
    {name: "Camisa", price: 10.99, category: 'Roupas'},
    {name: "Chaleira elétrica", price: 49.99, category: 'Eletro'},
    {name: "Fogão", price: 400, category: 'Eletro'},
    {name: "Calça jeans", price: 50.99, category: 'Roupas'},
]

// pode alterar normalmente, direto no array. Mas eu prefiro criar uma variável para não afetar o array original
// products.map((product) => { // passa como parâmetro o item isolado do array
//     if(product.category === "Roupas") {
//         product.onSale = true
//     }
// }
// )

const produtosTransformados = products.map((product) => { // passa como parâmetro o item isolado do array
    if(product.category === "Roupas") {
        product.onSale = true
    }

    return product.name
}
)

console.log(products);
console.log(produtosTransformados);