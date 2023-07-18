const fs = require('fs') // para ler um arquivo importe o 'fs'
// -> File System. Esse módulo já vem por padrão instalado no node, então não é preciso colocar nenhum npm install.

// __dirname significa o diretório atual
const caminho = __dirname + '/arquivo.json'

// síncrono...
// significa dizer que a próxima função só será chamada após essa execução terminar
// não é muito utilizado em arquvios grande que tem um carregamento mais longo
const conteudo = fs.readFileSync(caminho, 'utf-8') // leia um arquivo de forma síncrona. 1º parâmetro: caminho e 2º parâmetro: padrão encode.
console.log(conteudo); // retorna os valores do arquivo JSON

// assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

// acessando um arquivo JSON diretamente, sem o módulo 'fs'
const config = require('./arquivo.json') // precisa passar a extensão do arquivo também ".json", caso contrário ele vai pensar que é uma arquivo de extensão '.js'
console.log(config.db);

// ao executar todo esse código, a função assíncrona é mostrada por último no console

// --- acessando uma pasta com 'fs' ---
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta... ');
    console.log(arquivos);
})






