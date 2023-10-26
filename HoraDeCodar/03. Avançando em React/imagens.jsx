/**
 * 1. Imagens no react
 * as imagens públicas do nosso projeto podem ficar na pasta public
 * de lá elas podem ser chamadas pelas tags img diretamente pelo /nome.jpg
 * pois a pasta publc fica linkada com o src das imagens


quando a imagem está em public, você pode acessar ela diretamente

function App() {
    return (
        <div>
            <h1>Avançando em React</h1>
            <div>
                <img src="/img1.jpg" alt="paisagem" />
            </div>
        </div>
    )
}

**/

/**
 * 2. Imagens em asset
 * a pasta pode ser utilizada para colocar imagens, como fizemos na aula passada
 * mas um padrão bem utilizada para imagens dos projetos é colocar em uma pasta chamada assets, em src
 * ou seja, você vai encontrar projeto com as duas abordagens
 * em assets precisamos importar as imagens e o src é dinâmico com o nome de importação

é como se fosse importar um componente em react

import City from './assets/city.jpg'

function App() {
    return (
        <div>
            <h1>Avançando em React</h1>
            <div>
                <img src={City} alt='Cidade' />
            </div>
        </div>
    )
}
 */


