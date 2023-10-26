import React from "react";

import { useState } from "react";

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15) 

    return (
        <div>
            <div>
                <p>Valor {someData}</p>
                <button onClick={() => someData = 15}>Mudar variável</button> {/**somente dessa forma não muda o valor original */}
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData;