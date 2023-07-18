/* Primeiros passos:
  npm init -y ->>>> para iniciar um projeto em node com a flag "-y"
  npm i --save express@4.16.2 -E ->>>> para instalar o express com uma versão específica
*/

const porta = 3003 // define a porta
// em resumo, porta é a forma como vou selecionar qual processo vai atender uma determinada requisição

const express = require('express') // atribui uma variável ao express
const app = express()
const bodyParser = require('body-parser') // importando o bodyParser
const bancoDeDados = require('./bancoDeDados') // importando bancoDeDados

app.use(bodyParser.urlencoded({extended: true}))


// --- Teste de execução ---
// app.get('/produtos', (req, res, next) => { // rodar em /produtos
//     console.log('Middleware 1...');
//     next()
//     // importante chamar o next() para a próxima requisição
//     // caso não tenha next() no final de uma função ele vai executar uma única requisição e ficar carregando
// })  

// app.get('/produtos', (req, res, next) => { // rodar em /produtos -> SEM BANCO DE DADOS (objeto JSON)
//     res.send({nome: "Notebook", preco: 123.45}) // converter para JSON automaticamente
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // requisição do id
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converte em JSONr
})

app.put('/produtos/:id', (req, res, next) => { // requisição put (alterar nome)
  const produto = bancoDeDados.salvarProduto({
      id: req.params.id,
      nome: req.body.nome,
      preco: req.body.preco
  })
  res.send(produto) // converte em JSON
})

app.delete('/produtos/:id', (req, res, next) => { // requisição delete (excluir nome)
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) // converte em JSON
})

// você também pode usar o app.use(req, res, next) porém ele vai executar em qualquer endpoint (requisições)

app.listen(porta, () => { // ->>> localhost://3003/produtos
    console.log(`Servidor executando na porta ${porta}.`);
})

// dica: CTRL + ALT + M para a execução no vscode

/*
  mais pra frente instalei o nodemon:
  npm i --save-dev nodemon@1.14.11 -E
  é um utilitário que monitora as mudanças nos arquivos do seu projeto e reinicia automaticamente o servidor Node. js quando necessário.

  em package.json:


  "main": "src/servidor.js"

  "scripts": {
    "start": "nodemon"

  para executar:
  npm start
  
  para reiniciar:
  rs


  na aula 171:
  instalei o body-parser para corrigir a inserção de valores no body (post)
  npm i --save body-parser@1.18.2 -E

*/
