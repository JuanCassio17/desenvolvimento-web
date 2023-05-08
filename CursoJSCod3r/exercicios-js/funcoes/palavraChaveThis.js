// a palavra-chave "this" é um pouco confuso em JS
// ele pode variar dependendo de como é chamado

// this é o referencial global no contexto da execução
// por exemplo o this no browser é o "window"
function fun1() {
    console.log(this === window); // retorna true -> somente no browser
}

// as funções arrow podem utilizar o this para encurtar o retorno da função
// o this não varia nessa situação. Não entendeu? Também não
// contexto "this léxico"
const fun2 = () => console.log(this === window);



