// estrutura de layers (camadas)
// difere essa organização do front e back
// não precisa se preocupar com a compactação desse arquvio, já que diferente do front-end, esse arquvio não será executado no browser e sim no servidor.

// a organização é em pastas e em arquivos
// todo arquivo é um módulo

// como exportar os módulos para sem usados em outros arquvios?
// maneiras abaixo:
this.ola = "Olá mundo"
exports.bemVindo = "Bem-vindo ao node"
module.exports.ateLogo = "Até o próximo exemplo"

module.exports = { // modo mais clássico
    bomDia: 'bom dia',
    boaNoite() {
        return 'boa noite'
    }

}