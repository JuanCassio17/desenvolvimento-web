// console.log(global); -> retorna toda estrutura utilizada em node

global.MeuApp = {
    saudacao() {
        return 'Bem-vindo.'
    },
    nome: 'Sistema legal'
}

// atribuindo a função freeze() para congelar os valores pré-definidos
// global.MeuApp = Object.freeze({
//     saudacao() {
//         return 'Bem-vindo.'
//     },
//     nome: 'Sistema legal'
// })