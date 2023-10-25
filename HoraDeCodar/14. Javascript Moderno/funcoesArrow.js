/**
 * 3. Arrow Functions
 * a arrow function é um recurso para criar funções de forma mais simples
 * mas ela não funciona exatamente como uma function em todos os aspectos
 * o this da arrow function é relacionado ao elemento pai de quem está a executando
 */

// modelo antigo
const sum = function sum (a, b) {
    return a + b
}

const arrowSum = (a,b) => {
    return a + b
}

const arrowSum2 = (a, b) => a + b

const greeting = (nome) => {
    if(nome) {
        return "Olá " + nome
    } else {
        return "Olá"
    }
} 

const testeArrow = () => console.log("testou");

// uso do this em funções arrow
const user = {
    nome: "Theo",
    sayUserName() {
        let self = this // tem que atribuir o this antes da função
        setTimeout(function () {
             console.log(self); // o this é o window
             console.log("Username " + self.nome);
        }, 500)
    },
    sayUserNameArrow() { // usando arrowFunction não precisa definir uma variável para this
        setTimeout(() => {
            console.log('Username ' + this.nome);
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()