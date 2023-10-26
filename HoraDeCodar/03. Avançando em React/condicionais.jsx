/**
 * 8. Renderização condicional
 * renderização condicional é quando imprimimos uma parte do template baseado em uma condição
 * ou seja, utilizando uma checagem com if
 * isso é interessante em situações como: usuário autenticado/não autenticado

----- Rascunho renderização simples

import React, { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true)

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Agora x é falso</p>}
        </div>
    )
}

export default ConditionalRender

 */

/**
 * 9. Adicionando um else
 * podemos também utilizar um if/else no JSX
 * aqui devemos utilizar o if ternário
 * onde temos a sintaxe: condição ? bloco1 : bloco2

bastante comum em autenticação de usuários

----- Rascunho da renderização condicional com operado ternário

const [name, setName] = useState("Sucesso")

            <div>
                <h1>If ternário</h1>
                {name === "João" ? (
                    <div>
                        <p>O nome é João</p>
                    </div>
                ) : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )}
                <button onClick={() => setName("João")}>Clique aqui</button>
            </div>
 */

