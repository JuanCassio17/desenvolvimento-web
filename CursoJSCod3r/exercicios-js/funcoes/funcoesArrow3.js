let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global) // retorna true -> rodando no NODE
// se fosse objeto "window" retornaria true também

const obj = {}

comparaComThis = comparaComThis.bind(obj) // por causa do bind() o "this" pertence ao "obj"
comparaComThis(global) // retorna false
comparaComThis(obj) // retorna true

/* function arrow define dentro de um módulo NODE, 
portanto essa função recebe um "this" próprio referente ao módulo */ 
let ComparaComThisArrow = param => console.log(this === param);
ComparaComThisArrow(global) // retorna false. O "this" é da function e não global
ComparaComThisArrow(module.exports) // retorna true, pois é um módulo exportado

// se você fazer um teste com arrow function e bind() vai perceber que a function arrow prevalece
ComparaComThisArrow = ComparaComThisArrow.bind(obj)
ComparaComThisArrow(obj) // retorna false, pois o bind() não converte de uma function arrow
ComparaComThisArrow(module.exports) // retorna true, mesmo atribuindo o "obj" em bind()






