// npm init
// habilitar um wizard (instalador) -> abrir com perguntas para formulação do arquivo json

// o arquvio "package.json" serve para descrever o sistema que você está desenvolvendo e mostrar as dependências dele

// se quiser habilitar tudo "sim"
// use npm init -y

/* EXEMPLO DE UM ARQUIVO "package.json" com o parâmetro "-y" (padrão)
{
  "name": "funcionarios",
  "version": "1.0.0",
  "description": "",
  "main": "conceitos.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
 */

// o parâmetro "--save" serve para salvar nesse arquivo
// exemplo npm i --save axios
// ao rodar esse código, no arquivo "package.json" ele criará um atributo dessa biblioteca

/* EXEMPLO

  "dependencies": {
    "axios": "^1.4.0"
 */

// esse "^" significa a versão que pode ser alterada quando atualizada
// para baixar uma versão específica:
// npm i(ou install) --save-dev axios@0.17.1 -E

// save-dev siginifca que vou precisar dos módulos somente em desenvolvimento e não em produção
// ao executar outro comando ele atualiza o arquivo atual com essa depedência específica

// o arquvio "package-lock.json" é o que deve ir para seu repositório
// este arquivo mostra de forma detalhada as dependências do seu sistema e garantir a versão exata na qual foi desenvolvida




