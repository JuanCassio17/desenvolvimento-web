/*
Definição de Closure:
é o escopo criado quando uma função é declarada. Esse escopo permite a função acessar e manipular
variáveis externas à função
*/

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local' // considera essa variável "x" aqui com o valor "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()); // retorna "local"
// pois é considerado o valor que foi declarado dentro da função
// as funções carregam suas memórias. A declaração que foi definida no começo é a que prevalece.