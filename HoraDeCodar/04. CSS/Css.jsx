/*

**CSS global**

- O Css global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS
- Utilizamos o arquivo index.css para isso
- Ele está na pasta src

**CSS de componente**

- O CSS de componente é utilizado para um componente em específico
- Geralmente é criado um arquivo com o mesmo nome do componente e este é importado no componente
- Note que este método não é scoped, ou seja, o CSS vaza para outros componentes se houver uma regra de colisão
- O React já cria um exemplo dessa técnica com o App.css/js

**CSS inline style**
- O inline style React é igual o do CSS
- Por meio do atributo style conseguimos aplicar regrar diretamente em um elemento
- Devemos optar por outras maneiras de CSS, o inline pode dificultar a manutenção ou deixar o código imprevisível em alguma situações

é formado por um objeto (chave e valor):
-> palavras compostas use a estrutura camelCase
Exemplo

p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Elemento</p>

**CSS inline style dinâmico**

- O CSS dinâmico inline aplica ao estilo baseado em uma condicional
- Vamos inserir no atributo um if ternário
- Dependendo da condição podemos mudar que regras de estilo um elemento recebe

-> muito comum com o hook useState();
Exemplo:

estrutura:
style={condição ? ({estilo se verdadeiro}) : ({estilo se falso})}


<h2 style={n < 10 ? ({color: "purple"}) : ({color: "blue"})}></h2>

const [name] = useState("Matheus");

<h2 style={name === "Matheus" ? ({color: "purple"}) : ({color: "blue"})}></h2>
<h2 style={name === "Matheus" ? ({color: "purple"}) : null}></h2>

**Classes dinâmicas no CSS**

- Podemos também aplicar lógica para mudar a classe de CSS de um elemento
- Também utilizaremos o if ternário
- Essa abordagem é mais interessante que o CSS inline
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização do código

Exemplo:

const [redTitle] = useState(true);

<h2 className={redTitle ? "red-title" : "title"}></h2>
-> os estilos de .red-title e .title devem estar em um arquivo externo de CSS.

**CSS Modules**
-> pra mim é o melhor jeito

- O CSS Modules é um recurso de CSS scoped
- Ou seja, ele vai ser exclusivo do componente
- O nome do arquivo é: "Componente.module.css"
- Precisamos importá-lo também no componente

Exemplo:

import styles from "./Title.module.css"

<h2 className={styles.h2Element}></h2>

 */

