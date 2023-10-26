/**
 * 3. O que são hooks?
 * recursos do react que tem diversas funções
 * como: guardar e alterar o estado de algum dado na nossa aplicação
 * todos os hooks começam com use, por exemplo: useState
 * podemos criar os nossos hooks, isso é chamado de custom hook
 * os hooks precisam ser importados
 * geralmente são úteis em todas as aplicações
 */

/**
 * 4. useState hook
 * o hook de useState é um dos mais utilizados
 * utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza
 * para guardar o dado definimos o nome da variável e para alterar vamos utilizar setNome, onde nome é o nome do nosso dado

    sintaxe do useState:
    const [number, setNumber] = useState()

    você pode definir o valor inicial entre parênteses
    const [number, setNumber] = useState(15) -> inicializa com o valor 15


    mudar um valor a partir do evento de um botão
    <button onClick={() => setNumber(25)}>Mudar o state</button>

    uma boa prática é trabalhar com states ao invés de variáveis


    ----- Rascunho do useState

import React from "react";

import { useState } from "react";

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15) 

    return (
        <div>
            <div>
                <p>Valor {someData}</p>
                <button onClick={() => someData = 15}>Mudar variável</button> somente dessa forma não muda o valor original
                </div>
                <div>
                    <p>Valor: {number}</p>
                    <button onClick={() => setNumber(25)}>Mudar o state</button>
                </div>
            </div>
        )
    }
    
    export default ManageData;
*/

/**
 * 5. Renderização de listas
 * um outra ação bem comum é renderizar listas de dados no template
 * fazemos isso com os dados com tipo de array
 * utilizando o método map para nos auxiliar
 * além dos dados podemos inserir JSX em cadas iteração

    ------ Rascunho do useState() com listas

import React from "react";
import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"]) 

    return (
        <div>
            <ul>
                {list.map((item) => ( // tem que usar parênteses ao invés de {} para chamar as funções
                    <li>{item}</li>
                ))}
            </ul>
            <h1>Ola</h1>
        </div>
    )
}

export default ListRender;
 */

/**
 * 6. A propriedade key
 * iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console
 * o react precisa de uma chave única em cada um dos itens iterados
 * isso serve para ajudá-lo na renderização do componente
 * geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado
 * em último caso devemos utilizar o index do método map
 
para isso utilize o seguinte parâmetro do map (index)
{list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}


    ------ Rascunho do useState() com listas e chave

        const [users] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 72378423, name: "João", age: 28},
        {id: 8328823, name: "Pedro", age: 44}
    ])

                <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}-{user.age}
                    </li>
                ))}
            </ul>
 */

/**
 * 7. Previous state
 * previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado
 * isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um novo valor
 * o primeiro argumento de um set sempre será o previous state


    ---- Rascunho do previousState

const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)


        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }   
 */

