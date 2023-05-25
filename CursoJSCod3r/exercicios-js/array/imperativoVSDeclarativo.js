const alunos = [
    {nome: "João", nota: 7.4, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

// imperativo você fala o "como?" é mais importante -> detalhes
// declarativo você diz o que deve ser feito -> internamente

// imperativo
let total1 = 0
for(let i = 0; i< alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

// declarativo -> mais legal por conta do reuso
// paradigma funcional
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);

