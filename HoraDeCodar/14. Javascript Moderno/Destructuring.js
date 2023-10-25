/**
 * 7. Destructuring (Desestruturação)
 * o destructuring é um recurso que pode ser utilizado em arrays e objetos
 * a ideia é transformar os itens de um desses dados em variáveis
 * simplificando a declaração de n variáveis para apenas 1 linhas
 */

const arr = ["Professor", "Udemy", "Cursos online"]

const objeto = {
    nome: "Matheus",
    empresa: "Hora de codar",
    curso: "react",
    modulo: "ES6"
}

// em array

const [a1, a2, a3] = arr

// cada elemento do array fica em um array separado (respectivamente)
console.log(a1);
console.log(a2);
console.log(a3);

// em objeto

// precisa colocar a chave + nome da variável desejada
// nesse caso o nome é a chave e professor é a variável
// se não colocar o valor (somente a chave), é considerado o nome do próprio atributo do objeto
// exemplo: "empresa" e "curso" permanecem o mesmo nome do atributo do objeto (só basta a chave)
const {nome: professor, empresa, curso, modulo: secao} = objeto

console.log(professor);
console.log(empresa);
console.log(curso);
console.log(secao);