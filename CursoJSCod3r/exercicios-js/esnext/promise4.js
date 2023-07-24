function gerarNumerosEntre(min, max, tempo){
    if(min > max) {
        [max, min] = [min, max] // destructing e array
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1,60, 4000),
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 500),
        gerarNumerosEntre(1,60, 300),
        gerarNumerosEntre(1,60, 1500),
        gerarNumerosEntre(1,60, 1000)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');
    })
