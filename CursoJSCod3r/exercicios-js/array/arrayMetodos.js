// pode adicionar o array em uma constante
const pilotos = ["Piloto1", "Piloto2", "Piloto3", "Piloto4"]
pilotos.pop() // remove o último elemento do array -> Piloto4
console.log(pilotos); // só retorna os 3

// pode atribuir mais de um em push("","")
pilotos.push("Piloto4", "Piloto5") // adiciona elementos no final do array
console.log(pilotos); // retorna os 4

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos); // retorna a partir do "Piloto2"

// pode atribuir mais de um também
pilotos.unshift("Piloto1", "Piloto1.2") // adiciona elemento no primeiro índice
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Piloto3.1") // adicionando no índice 2 e não removendo nenhum
console.log(pilotos);

// remover
pilotos.splice(3, 1) // a partir do 3 indíce remova 1
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // realiza um novo array a partir do indíce 2
console.log(algunsPilotos1);

// cria um novo array a partir do índice 1 até o 4, desconsiderando o índice 4
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);




