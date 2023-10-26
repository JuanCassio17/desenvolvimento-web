import React from "react";
import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"])
    
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

    return (
        <div>
            <ul>
                {list.map((item, i) => ( // tem que usar parênteses ao invés de {} para chamar as funções
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => ( // use a key do objeto ao invés do index do map
                    <li key={user.id}> 
                        {user.name}-{user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;