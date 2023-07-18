const fs = require('fs')

// transformando este objeto em um arquivo

const produto = {
    nome: "celular",
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), err => { // writeFile para escrever um arquivo
    console.log(err || 'Arquivo salvo.'); // se não houver erro ao salvar o arquivo, ele retorna "Arquivo salvo."
})

// se o arquivo ja existe, ele deleta e cria outro no lugar.