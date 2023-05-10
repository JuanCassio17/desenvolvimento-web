// estrutura semelhante a classe, porém é convertida para função
// classes não são bem aproveitas em js, mas você pode aproveitar bastante em React
// em js você utiliza mais funções construtoras

// classes é apenas uma forma diferente de você usar o método construtor

class Lancamento {
    constructor(nome = "Genérico", valor = 0) { // definindo construtor da classe e valores padrões
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) { // não precisa definir valores padrões
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salario", 45000)
const contaDeLuz = new Lancamento("Luz", -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario());