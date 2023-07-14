// testando o uso dos módulos no arquivo "modulos"

const moduloA = require('./moduloA') // utiliza o 'require'
const moduloB = require('./moduloB')
console.log("------ Moudlo A ------\n");
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA); // fica em formato de objeto

console.log("------ Moudlo B ------\n");

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);
