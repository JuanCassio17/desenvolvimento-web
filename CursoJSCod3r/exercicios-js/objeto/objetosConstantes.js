// pessoa -> aponta para um endereço de memória
// você pode alterar os atributos de um objeto constante
const pessoa = {nome: "João"}
pessoa.nome = "Pedro" // atribuindo apenas o atributo no objeto "pessoa"
console.log(pessoa);

// mas você não pode atribuir a constante a outro endereço de memória
// pessoa = {nome: "Ana"} // erro

Object.freeze(pessoa) // congelando -> o objeto em si fica constante
// quando congela o objeto você não consegue atribuir, alterar ou remover valores
pessoa.nome = "Maria" // foi ignorado por causa do freeze()
console.log(pessoa); // permanece "Pedro" pois o objeto foi congelado antes de alterar

// você pode definir o freeze no momento em que cria o objeto
// nem o objeto e nem os atributos poderão ser alterados
const pessoaConstante = Object.freeze({nome: "João"});

