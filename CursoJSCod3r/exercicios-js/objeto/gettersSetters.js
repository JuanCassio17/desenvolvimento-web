// importante para o encapsulamento
// privar os atributos e deixar os métodos para serem responsáveis por inserir ou alterar valores

// atenção: js não suporta sobrecarga de métodos com mesmo nome e diferentes parâmetros
// com exceção do método set

const sequencia = {
    _valor: 1, // o _ significa convenção
    // você mostra para os desenvolvedores que isso é um atributo privado

    get valor(){ // para definir o get
        return this._valor++
    },
    
    // pode usar o mesmo nome do método aqui (somente para o set)
    set valor(valor){ // aqui ele já espera o atributo com parâmetro
        if(valor > this._valor) { // agora você pode definir validações para o atributo valor
            this._valor = valor
        }
    }
}

// acessando o valor pelos métodos
// aqui virou bagunça, nada impede de acessar ou alterar _valor
console.log(sequencia._valor);
sequencia._valor = 1000 // não impede
console.log(sequencia._valor); // não impede
sequencia.valor = 2000
console.log(sequencia.valor, sequencia.valor);

