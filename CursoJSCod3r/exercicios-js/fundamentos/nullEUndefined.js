// conceito: atribuição por valor e por referência

const a = {name: 'Teste'} // a constante "a" define o objeto e o armazena
// "a" tem o endereço do qual esse objeto está localizado

const b = a // a constante "b" recebe o endereço de "a"

b.name = 'Alterei por b' // se eu alterar na const "b" também vai mudar na const "a"
// isso acontece porque as duas variáveis armazenam o mesmo endereço do objeto 

console.log(a);

// nos tipos primitivos é diferente
let c = 2 // valor 2 na variável "c"
let d = c // valor 2 que recebeu da variável "c"

d++ // atribui +1 em "d" resultando em 3

// nesse caso, alterei somente o valor em "d", portanto o c continua com o mesmo valor inicial (2).
console.log(c)
console.log(d)
// tipos primitivos -> aqui ocorreu uma cópia por valor. São valores diferentes
// objetos -> valores por referência, as variáveis apontam para o mesmo endereço do objeto

let valor // não inicializada
console.log(valor) // retorna undefined -> justamente porque não foi atribuído valor
// console.log(valor2) // retorna "is not defined". Mas é porque não existe valor e muito menos variável

valor = null // null significa que não há nenhum endereço de memória sendo apontado a essa variável
// em resumo, null significa a ausência de valor, porém ela foi definida
console.log(valor)
// é bom pra você deixar de apontar para uma variável que já estava definida

// console.log(valor.toString()) -> gera erro Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // undefined
// console.log(produto.preco.a) // erro Cannot read property 'a' of undefined

console.log(produto) // retorno {}

// produto.preco = undefined -> evite definir valores undefined
console.log(produto)

// para você deletar um atributo de um objeto é a mesma estratégia do array:
delete produto.preco

produto.preco = null // sem preço
console.log(produto.preco) // retorna null
console.log(produto)


