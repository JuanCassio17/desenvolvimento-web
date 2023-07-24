// estrutura não indexada e que não aceita repetições
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times); // só vai imprimir 'Vasco' uma vez
console.log(times.size);
console.log(times.has('Vasco')); // true -> se atentar as letras maiúsculas e minúsculas
console.log(times.has('vasco')); // false

times.delete("Flamengo")
console.log(times.has('Flamengo'));


// adicionando partir de um array
const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)

console.log(nomesSet);