// o objetivo é formar um array com todas as notas que são menores que 7.0
// você pode utilizar a função ".filter()"
const notas = [10, 9.0, 8.2, 2.0, 1.0, 4.5]

// Sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]) // para inserir elementos no array use o ".push()"
    }

}

console.log(notasBaixas1);

// Com callback
// a função ".filter()" retorna true ou falso a cada iteração do array
// ou seja, se for menor que 7 (true) adicione em um novo array
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2);

// Com callback e função arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3);







