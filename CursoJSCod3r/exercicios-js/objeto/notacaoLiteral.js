const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // esse tipo de atribuição já não precisa mais
// aqui você pode continuar usando essa abordagem caso queira alterar o valor das variáveis
const obj1_2 = {a: "a", b: "b", c: "c"}

// a partir da atualização do EcmaScript é possível atribuir os valores diretamente pelo nome da variável
const obj2 = {a, b, c}
console.log(obj1, obj1_2, obj2);

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr} // atribuição entre {[:]}
console.log(obj4);

const obj5 = {
    funcao1: function() { // você pode tirar ": function()"
    },
    funcao2(){ // e pode definir diretamente

    }
}

console.log(obj5); // retorna as funções que foram criadas