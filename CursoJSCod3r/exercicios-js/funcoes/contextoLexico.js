const valor = 'Global'

// a função carrega o contexto léxico na qual ela foi atribuída
// portanto ao ser chamada em qualquer canto, ela vai carregar o valor inicial
function minhaFuncao() {
    console.log(valor); // vai acessar a variável global porque é o mais próximo
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // retorna a variável com o valor "global"




