// Bastante utilizado e inclusive é recomendação do professor
// itera em cima de valores ou índices (for in e for of)
// for in ->>>>> retorna os índices
// for of ->>>>> retorna os valores

for(let letra of "Cod3r") {
    console.log(letra); // vai imprimir letra por letra com quebra de linha
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for(let i in assuntosEcma) {
    console.log(i); // retorna os índices
}

for(let assunto of assuntosEcma) {
    console.log(assunto); // retorna os valores
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto); // retorna os valores
}

for(let chave of assuntosMap.keys()) {
    console.log(chave); // usando o Map() para retornar somente as chaves
}

for(let valor of assuntosMap.values()) {
    console.log(valor); // usando o Map() para retornar somente os valores
}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl); // retorna chaves e valores sem estrutura de array
}

const s = new Set(['a', 'b', 'c']) // exemplo com Set
for(let letra of s) {
    console.log(letra);
}