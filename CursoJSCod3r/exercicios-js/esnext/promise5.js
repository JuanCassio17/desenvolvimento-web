// tratamento de erros em promise

function funcionarOuNao(valor, chanceErro) { // resolve, reject
    return new Promise((resolve, reject) => {
        
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro.')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }

    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => `Valor ${v}`)
    .then( // pode tratar direto no 'then'
        v => consol.log(v),
        err => console.log(`Erro específico ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`)) // catch trata o erro da promise
    .then(() => console.log('fim.'))