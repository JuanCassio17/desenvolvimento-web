// usa como uma promessa. Uso assíncrono
// pode ter dois resultados: promessa cumprida ou promessa rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // recebe dois parâmetros: resolvido e rejeitado, mas se você quiser pode colocar somente 'resolve'
        setTimeout(() =>{
            resolve(frase) // utilizar o then() ao chamar. Só aceita um parâmetro
        }, segundos * 1000)
    })
}

// then quando você quer chamar a promise. Pode usar quantas vezes quiser.
falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // para tratar o reject use o catch(). Pode usar uma única vez.