var numero = 1 // fora do bloco, é global. Numero é 1
{ 
    /*
    escopo de bloco, numero é 2. 
    Sempre dá preferência ao escopo menor, caso não tenha variavel com esse nome, 
    ele considera a variável global.
    */ 
    let numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);