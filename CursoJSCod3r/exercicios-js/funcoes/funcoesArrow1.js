// objetivo das arrows fuctions é ser mais curta e 
// ter um contexto "this" atribuído a função

let dobro = function(a) { // definindo uma função por variável
    return 2 * a
}

dobro = (a) => { // funções arrows são anônimas, você sempre tem que atribuir a uma variável
    return 2 * a
}

dobro = a => 2 * a // forma mais reduzida. Retorno implícito.
// Quando tem uma única linha como retorno pode usar dessa forma.
/* Funções definidas dessa forma são melhores quando você quer definir ações simples
que são chamadas várias vezes durante o projeto. */ 

console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá'
}

ola = () => "Olá"
ola = _ => "Olá" // você também pode usar o _ ao invérs de () para definir os parâmetros vazios

console.log(ola());

/*

Caso você não atribua uma função arrow a uma variável ela se torna um escopo global.
Aqui está a explição do professor.

Nesse caso, você está criando uma variável global implícita, só que no contexto do Node. Essa é uma declaração que funciona, que era permitida em outras versões do EcmaScript, só que não é recomendada nas versões atuais. Existe uma expressão que você pode adicionar no topo do seu código que ficará de olho nesse tipo de prática e te avisará, em formato de erro, que algo não está de acordo. A expressão é: 

    "strict mode"

Com aspas duplas mesmo. Essa expressão, indica que o código deve ser analisado em um modo mais restrito, que por exemplo não permite esse tipo de declaração de variáveis. Então, se você fizer assim:

    "strict mode"
     
    dobro = a => 2*a //return implicito
     
    console.log(dobro(Math.PI))

O código acusará um erro. Caso deseje se aprofundar mais no assunto posso te passar materiais :)  

*/