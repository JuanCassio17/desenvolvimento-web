// esse código não funciona em Node
// exemplo de callback no browser
// o body retorna um array de elementos, nesse caso vamos acessar o índice 0
// o onclick é o método que vai ser disparado sempre que for clicar no elemento (observer)
document.getElementsByTagName('body')[0].onclick = function(evento) {
    // você não é obrigado a definir o evento nos parãmetros
    console.log("O evento ocorreu!");
}

// esse código ao rodar no browser vai ser disparado toda vez que o usuário clicar em algum canto da tela
// o retorno desse código é apenas a mensagem passada no console.log
// ou seja, as funções callback são chamadas sempre que ocorrer algum evento 
// e retorna ela mesma várias vezes com o evento do usuário