function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID

}

// quando você usa o "new" o prototype referencia ao pai (nesse caso é "Aula")
const aula1 = new Aula("Bem vindo", 123)
const aula2 = new Aula("Até Breve", 456)
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) { // vou ter vários parâmetros -> operador splat
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // params vai ser um array
    return obj
}

const aula3 = novo(Aula, "Bem vindo", 123)
const aula4 = novo(Aula, "Até breve", 456)
console.log(aula3, aula4);