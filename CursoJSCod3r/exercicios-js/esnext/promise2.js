// comparando callback com promise

// usando callback
// setTimeout(function () {
//     console.log('Executando callback 1');

//     setTimeout(function () {
//         console.log('Executando callback 2');
        
//         setTimeout(function () {
//             console.log('Executando callback 3');
//         }, 2000)

//     }, 2000)

// }, 2000)

// usando promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            console.log('Executando promise');
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor(3000))
    .then(esperarPor)