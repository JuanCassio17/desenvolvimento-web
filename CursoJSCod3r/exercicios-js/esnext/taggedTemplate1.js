// taggedTemplate - para processar o template dentro de uma função
// você usa uma vez perdida

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String';
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`);

/* Saída:
[ '', ' está ', '' ]
[ 'Gui', 'Aprovado' ]
Outra String
*/