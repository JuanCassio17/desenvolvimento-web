const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços

// primeira função deve converter em objeto
// segunda função deve retornar o atributo preco

const paraObjeto = json => JSON.parse(json) // transforma em objeto
const apenasPreco = produto => produto.preco // retorna somente o preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);