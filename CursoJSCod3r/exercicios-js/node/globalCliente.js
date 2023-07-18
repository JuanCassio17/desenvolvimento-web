require('./global') // não precisa definir variável já que o acesso é em todo sistema

console.log(MeuApp.saudacao()); // retorna o valor "Bem-vindo."
// a estratégia de inserir em escopo global não é recomendado, utilize o padrão de módulos.

console.log(MeuApp.nome); // retorna "Sistema legal"
MeuApp.nome = 'Eita, mudei o nome' // em escopo global é possível alterar os valores pré-definidos
console.log(MeuApp.nome); // retorna "Eita, mudei o nome"

// para evitar isso, você pode utilizar o "freeze()"
