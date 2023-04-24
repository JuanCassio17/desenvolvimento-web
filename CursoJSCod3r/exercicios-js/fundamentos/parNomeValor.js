// par nome/valor -> chave + valor

const saudacao = 'Opa' // contexto léxico 1

function exec(){
    // contexto dentro de uma função (constante)
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 31,
    peso: 40,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 301
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);