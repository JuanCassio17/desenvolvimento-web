/* sempre foi utilizado o "var" mas depois da atualização do
ecmascript (2015) chegou o "let" */

var a = 3;
let b = 2;

// por enquanto, crie variáveis com "let"

// você não pode declarar uma mesma variável com outro valor, por exemplo:
// let b = 3;
// o b já foi declarado lá em cima, então você não precisa colocar "let" novamente
// para atribuir outro valor a essa variável, simplesmente atribua o valor da variável:
b = 3;

// essa lógica visto acima, não se aplica ao "var". "var" você pode bagunçar tudo, olha só:
var a = 4;

// por fim, o const. É uma constante, só atribui o valor uma única vez e não pode ser alterado.
const c = 30;
c = 40;



console.log(a, b);






