// não confunda JSON com object
// object é uma notação literal de objetos
// JSON é um formato textual

// em resumo, um objeto em javascript é uma coleção (chave + valor)

// par de chaves é uma forma literal de se referir a um objeto
// os atributos são criados de forma dinamicamente

const prod1 = {} // cria um objeto

// para definir os atributos é só definir na hora que precisar
prod1.nome = 'Caneta' // atribui o atributo "nome" ao meu objeto prod1
console.log(prod1); // imprime tudo entre {}
console.log(prod1.nome); // imprime somente o atributo

// embora seja possível, evite atribuições com espaço -> prod1['Desconto legal'] = 0.30

// você também pode criar um objeto e já passar os atributos e valores:
const prod2 = {nome:'Caderno', preco: 29} // definindo objeto e atributos de uma vez
console.log(prod2)

const prod3 = {
    nome: 'Notebook',
    preco: '2899,99',
    desconto: {
        valorDesconto: 0.30,
        dataFinalDesconto: '2023-08-12'
    }
}
console.log(prod3.desconto.dataFinalDesconto); // para acessar atributos dentro de um objeto

// *aula 47 de fundamentos -> o professor disse justamente o que eu estava sentindo

// só reforçando, object não é JSON, mas sim um formato textual de objeto. A estrutura JSON é dessa forma:
'{ "nome": "Caneta", "preco": 29.99 }' // sem as aspas simples
// para validar seu JSON use o JSON Formatter & Validator: https://jsonformatter.curiousconcept.com/#



