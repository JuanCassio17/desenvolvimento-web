import React from "react";

const ShowUserName = (props) => {

    return (
        <div>
            <div>
                <h2>O nome do usuário é: {props.name}</h2>
            </div>
        </div>
    )
}

export default ShowUserName;