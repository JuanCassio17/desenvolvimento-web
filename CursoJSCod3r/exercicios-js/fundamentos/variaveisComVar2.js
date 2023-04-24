var numero = 1
{ // em var esse bloco não importa. A estrutura local só serve para function
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);
// aqui o numero recebe 1, e logo em seguida recebe 2. Ou seja, mudou o número da variável