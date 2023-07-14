// utilize com o npm
// npm é o gerenciador de pacotes do node
// responsável por instalar biblioteca de terceiros

// ------- INSTALAÇÃO DE MÓDULOS LOCAIS ------- 

// exemplo de instalação:
// no terminal: "npm i lodash" ->>> npm + i (install) + nome do módulo

// ao instalar um módulo, ele vem com um pacote json (package-lock.json) e node_modules

// --- Usando o lodash ---

const _ = require('lodash') // "_" se refere a variável lodash (bem comum)
// em node_modules, ele espera encontrar o arquivo chamado "index.js" ->> module.exports = require('./lodash');

setInterval(() => console.log(_.random(1,1000)), 2000) // gerar número de forma randômica

// ------- INSTALAÇÃO DE MÓDULOS GLOBAIS ------- 

// os módulos globais podem ser usados em qualquer escopo de projeto, por exemplo o VUE.
// para instalar use: sudo npm i -g nodemon

// sudo (permissão de usuário) npm + i (install) + -g (global) + nome do pacote
// nodemon -> serve pra atualizar o código assim que você faz alguma alteração. Ele dá um refresh na aplicação e começa a executar com essa nova alteração.
// "rs" dá o restart do código
 
// ----- DICA DO PROFESSOR -----

// ao atualizar o repositório para o github, não faz sentido importar esses arquivos de módulos por ser bastante extenso.
// O ideal é criar um arquivo .gitignore

// basta criar um novo arquivo e dentro dele coloque "node_modules".
// é mais fácil do que pensei

