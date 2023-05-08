// o this também pode ser armazenado em uma constante

function Pessoa() {
    this.idade = 0
    
    const self = this // armazenando o this em uma constante
    setInterval(function() { // dispara uma outra função dentro de um intervalo definido
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000) // o segundo parâmetro é o intervalo
    // aqui no final da definição da função chamamos o bind para pegar o "this" do objeto
    // mas você pode usar a constante "self" que recebe o "this" do objeto
}

new Pessoa // instanciando um objeto "Pessoa"

// só por via de curiosidade e também isso não foi mostrado no curso,
// você também pode chamar funções por new + nome função
// exemplo já visto acima, mas segue outro exemplo pra enfatizar

/* 

function sucesso() {
    for(let i = 0; i < 10; i++) {
        console.log('teste');
    }
    
}

new sucesso 

*/