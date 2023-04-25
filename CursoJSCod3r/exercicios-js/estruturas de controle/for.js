console.log("--- Estrutura While ---");
let contador = 1

while (contador <= 10) {
    console.log(`Contador: ${contador}`);
    contador++
}

console.log("--- Estrutura For ---");
for (let contador = 1; contador <= 10; contador++) {
    console.log(`Contador: ${contador}`);
}


console.log("--- Estrutura For com Array ---");
const notas = [5.4, 3.2, 9.0, 10.0]
for (let contador = 0; contador < notas.length; contador++) {
    console.log(`nota: ${notas[contador]}`);
}