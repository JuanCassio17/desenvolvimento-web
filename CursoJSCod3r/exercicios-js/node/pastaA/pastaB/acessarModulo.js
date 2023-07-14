const moduloA = require('../../moduloA') // para acessar subpastas
// você também pode copiar o caminho inteiro, exemplo: (não é recomendado)
// /home/juan/Documentos/GitHub/desenvolvimento-web/CursoJSCod3r/exercicios-js/node/moduloA.js
console.log(moduloA.ola);

// importante: LEMBRE-SE, todo módulo exportado considera o arquivo "index.js"


// você também pode acessar módulos internos do node, exemplo "http"
const http = require('http')
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)


// curiosidade
// se você tentar colocar 'moduloa' (em letras minúsculas), não vai funcionar no linux
// no mac e windows funcionam normalmente
// como a maioria dos servidores são linux, mantenha o padrão (da mesma forma que foi atribuída)

