// manipulando entrada e saída com node

const anonimo = process.argv.indexOf('-a') !== -1 // definindo flag para execução no terminal. Exemplo: node entradaESaida -a
// console.log(anonimo);

if(anonimo) {
    process.stdout.write('Fala anônimo\n') // se colocar node entradaESaida.js -a
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ') // se colocar node entradaESaida.js ele pede o nome
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', "")
        
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}

