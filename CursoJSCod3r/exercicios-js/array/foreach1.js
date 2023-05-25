// foreach serve para percorrer elementos do array
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

// você não é obrigado a passar parâmetros
aprovados.forEach(function(nome, indice) { // definir função callback
    console.log(`${indice + 1} ${nome}`); // retorna o índice + nome
}) 

aprovados.forEach(nome => console.log(nome)); // só retorna os nomes

// você também pode armazenar a função e passar como parâmentro
const exibirResultados = aprovado => console.log(aprovado);
aprovados.forEach(exibirResultados)

// o foreach por padrão tem 3 parâmetros, mas vocẽ fica a vontade para definir o que precisar
// não é obrigatório definir todos os parâmetros
// o array retorna o próprio array
// aprovados.forEach(function(nome, indice, array))



