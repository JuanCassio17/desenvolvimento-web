// map serve para transformar um array em outro
// mapear os elementos de um array a outro
// os dois arrays vão ter a mesma quantidade de elementos

// gerar um segundo array tendo o dobro desses valores
const nums = [1,2,3,4,5]

// map é um for com propósito
let resultado = nums.map(function(e) {
    return e * 2 // para retornar o dobro dos valores em nums
})

console.log(resultado);

// importante: o map gera um novo array, ou seja, o array original ainda existe.

// vocẽ precisa retorna algum valor nos map, caso contrário tudo volta "undefined"
const soma10 = e => e + 10
const triplo = e => e * 3

// convertendo valor para tipo flutuante, com duas casas decimais e substituindo o . por ,
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

// você pode tratar o array transformado de uma vez
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);




