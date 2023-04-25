function soBoaNoticia(nota){
    if(nota >=7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(9.1)
soBoaNoticia('10')

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

const valor = 8 > 7
seForVerdadeEuFalo(valor) // retorna true

seForVerdadeEuFalo() // undefined é false
seForVerdadeEuFalo(undefined) // undefined é false
seForVerdadeEuFalo(null) // null é false
seForVerdadeEuFalo(NaN) // NaN é false
seForVerdadeEuFalo('') // String vazia é false
seForVerdadeEuFalo(0) // zero é false
seForVerdadeEuFalo(1) // 1 é true
seForVerdadeEuFalo(-1) // -1 é true
seForVerdadeEuFalo(' ') // ' ' é true
seForVerdadeEuFalo('?') // '?' é true
seForVerdadeEuFalo([]) // array é true
seForVerdadeEuFalo([1,2]) // array é true
seForVerdadeEuFalo({}) // objeto é true

