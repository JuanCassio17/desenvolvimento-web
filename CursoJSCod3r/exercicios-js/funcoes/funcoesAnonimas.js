// aula 98. Funções anônimas -> professor fala algo bacana da sua experiência profissional

// funções normais: permitem nomeação
// funções anônimas: são funções sem nome

/*
Em geral, as funções são armazenadas em variáveis (geralmente em const), portanto a maioria
das funções que vamos ver ao longo do curso ou em qualquer outro projeto são funções anônimas.
Quem recebe o nome é a variável e não a função.
*/ 

// esta é uma função nomeada
function somar(x,y){
    return x + y;
}

// esta é uma função anônima
const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}


// o parâmetro pode ser uma função ou retorna a soma como padrão
imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function(x,y) { // subtrai 3 - 4 -> retorna -1
    return x - y
})
imprimirResultado(3,4,(x,y) => x * y) // arrow function -> retorna a multiplicação de "x" e "y"
// funções arrow são sempre anônimas

const pessoa = {
    falar: function() { // função anônima em um objeto
        console.log('opa');
    }
}

pessoa.falar()

/* 
Uma das minhas dúvidas era referente a definição de functions diretamente, sem ser por constante
Aqui está a pergunta de um estudante do curso e a resposta logo abaixo:

--- Aluno: ---
Fala professor, tudo certo? Existe alguma diferença entre criar uma função anonima 
e atribui-la a uma constante, e criar uma função não anonima? 
Por que criar a função soma em uma constante? qual é o beneficio de usar uma constante ou 
variável com uma função armazenada? Eu posso simplesmente criar uma função normal
function soma(x, y) {} e atribui-la como parâmetro de outra função, 
ou eu só posso atribui como parâmetro se tiver uma variável/constante?

--- Assistente de ensino #01: ---

Um das utilidades de se colocar uma função dentro de uma constante 
é para que ela não possa sofrer overwrite. Por exemplo, se você criar a função 
soma normalmente com a sintaxe:

    function soma(a, b) {
        return a + b
    }

caso você mais a baixo no código faça função com o mesmo nome, a primeira função soma 
vai ser substituída pela segunda que você criou. E graças a propriedade do JavaScript 
chamada de hoisting, onde funções e variáveis são puxadas para cima na hora da execução, 
caso você crie a segunda função, a primeira vai ser substituída mesmo antes da segunda 
ter sido feita. Sacou?

Quando você salva a função numa const você impede isso, 
já que uma vez definida a const não pode ser redefinida, sacou?
Espero ter ajudado, bons estudos!

--- Assistente de ensino #02: ---

Boa tarde, Lucas! Tenha em mente também que o ideal é usar 
constante o máximo possível, torna o código mais previsível.

Ficou claro? Bons estudos!

*/ 
