const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")() // retorna um objeto então tem que ter ()
const contadorD = require("./instanciaNova")()

// valor começa em 1
contadorA.inc() // incrementa 1 vez
contadorA.inc() // + 1 vez

console.log(contadorA.valor, contadorB.valor); // retorna 3 no valor de B

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor); // retorna 1 no valor de D
// retorna o valor 1 pois é uma nova instância





