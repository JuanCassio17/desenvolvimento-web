// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: '1234.80'}
const clone = {ativo: true, ...funcionario} // ele vai pegar todos os atributos de funcionario com o operador "..."
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafael', ...grupoA, 'Rafaela'] // pode colocar em qualquer lugar do array
console.log(grupoFinal);