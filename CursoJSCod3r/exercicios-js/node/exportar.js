console.log(module.exports === this); // true -> todo arquivo é this (módulo)
console.log(module.exports === exports); // true

// exports é uma variável que aponta para um mesmo objeto

// obrigatoriamente para exportar um objeto use "module.exports"

module.exports = {
    nome: 'a',
    sobrenome: 'b'
}
