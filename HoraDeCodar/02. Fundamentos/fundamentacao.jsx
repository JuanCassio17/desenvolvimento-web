/**
 * 1. Criando componentes
 * na maioria dos projetos os componentes ficam em uma pasta chamada "src/componentes, que devemos criar"
 * geralmente são nomeados com a camelCase: FirstComponent.jsx
 * no arquivo criamos uma função, que contém o código deste componente.
 * e também precisamos exportar a função, para reutilizá-lo

import React from "react";

const firstComponent = () => {

}

function firstComponent() {
    return (
        <>
            <h1>Component</h1>
        </>
    )
}

export default firstComponent;

 */

// ---------------------------------------------------------------------------

/**
 * 2. Importação de componentes
 * a importação é a maneira que temos de reutilizar o componente
 * utilizamos a sintaxe: import X from './componentes/X onde x é o nome do componente (arquivo jsx)
 * para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstComponent />
 * e então finalizamos o ciclo de importação
 

em outro arquivo

// components
import FirstComponent from './components/FirstComponent'

// styles / css
import "./App.css"

function App() {
    return (
        <div>
            <FirstComponent />
        </div>
    );
}

export default App();

 */

// ---------------------------------------------------------------------------

/**
 * 3. JSX
 * jsx é o html do react
 * onde vamos declarar as tags de html que serão exibidas no navegador
 * ficam no return do component
 * temos algums diferenças do html, por exemplo: class será className 
 * isso se dá pelas instruções semelhantes de js e html, pois o jsx é javascript, então algumas terão nomes diferentes
 * o jsx pode ter APENAS UM ELEMENTO PAI 
 */


// ---------------------------------------------------------------------------

/**
 * 4. Comentários
 * podemos inserir comentários de duas maneiras no componente
 * na parte da função, onde é executada a lógica, a sintaxe é : "// Algum comentário"
 * e também no JSX: {// algum comentário} barra asterisco, asterisco barra
 * as chaves nos permitem executar senteças em javascript
 */

// ---------------------------------------------------------------------------

/**
 * 5. Template expressions
 * template expressions é o recurso que nos permite executar js no jsx e também interpolar variáveis
 * isso será muito útil ao longo dos seus projetos em react
 * a sintaxe é: {algumCódigoEmJS}
 * tudo que está entre chaves é processado em javascript e nos retorna um resultado
 

const TemplateExpressions = () => {

    const name = "Matheus"

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
        </div>
    )
}

*/

// ---------------------------------------------------------------------------

/**
 * 6. Hierarquia de componentes
 * os componentes que criamos podem ser reutilizados em vários componentes
 * e ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em app
 */

// ---------------------------------------------------------------------------

/**
 * 7. Eventos
 * os eventos para o front-end são essencias
 * em várias situações vamos precisar do click, como ao enviar formulários
 * no react os eventos já estão 'prontos', podemos utilizar onClick para ativar uma função ao clicar em um elemento
 * esta função é criada na própria função do componente
 * as funções geralmente tem o padrão handleAlgumaCoisa. Não precisa colocar os parênteses.
 * se colocar os parênteses handleMyEvent() a função será executada sem clicar no componente.
 * todo evento tem o atributo evente (e) que será essencial para resgatar informações que o evento possui.


const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )
}

export default Events;

 */

// ---------------------------------------------------------------------------

/**
 * 8. Funções no evento
 * Quando as funções são simples, podemos realizar a lógica no próprio evento
 * isso torna nosso código mais 'complicado', por atrelar lógica com html
 * mas em algumas situações é aplicável


const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir");
                    }
                }}>Clique aqui, por favor.</button>
            </div>
        </div>
    )
}

export default Events;

 */


// ---------------------------------------------------------------------------

/**
 * 9. Funções de renderização
 * podemos criar funções que retornam jsx
 * isso serve para criar situações que dependam de outras condições
 * ou seja, o jsx a ser renderizado pode variar por alguma variável, por exemplo


const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando essa outra coisa!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir");
                    }
                }}>Clique aqui, por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;

 */


