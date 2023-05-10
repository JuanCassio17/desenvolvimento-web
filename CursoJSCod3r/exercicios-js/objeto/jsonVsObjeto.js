// são estruturas parecidas, porém diferentes
// JSON é um formato textual -> é um formato de dados e não uma função
// para comunicações em APIs
// disponíveis em qualquer linguagem de programação (webservices)

// transformando um objeto em um JSON
const obj = {
    a:1,
    b:2,
    c:3,
    soma() {
        return a + b + c
    }
}
// para converter um objeto para JSON use -> JSON.stringfy()
console.log(JSON.stringify(obj));
// ele não considera a função soma(), pois o JSON é um arquivo de texto e não considera funções

// para converter um JSON em objeto use -> JSON.parse()
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")); -> retorna erro porque precisas de aspas
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")); -> retorna erro porque é aspas simples
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // -> retorna o objeto criado

// defina aspas simples no início do JSON e aspas duplas em cada atributo
// '{"":, }'

// caso for um atributo com valor textual defina entre aspas duplas assim como a chave
console.log(JSON.parse('{"a": "nome", "b": 2, "c": 3}')); // nome deve ser definido entre ""

// também é suportado valores booleanos
console.log(JSON.parse('{"a": true, "b": 2, "c": 3}')); // -> chave "a" tem valor true

// pode definir objetos {}
console.log(JSON.parse('{"a": {"nome": "nome"}, "b": 2, "c": 3}')); // -> definindo objeto {} em a

// pode definir arrays []
console.log(JSON.parse('{"a": [1, 2, 3], "b": 2, "c": 3}')); // -> definindo array em a

// valores numéricos não precisam de aspas como já foi visto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // -> todos valores numéricos sem aspas





