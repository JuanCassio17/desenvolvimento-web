import React from "react";

const CardDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <div>
                <h2>Detalhes do carro</h2>
                <ul>
                    <li>Marca: {brand}</li>
                    <li>KM: {km}</li>
                    <li>Cor: {color}</li>
                </ul>
                {newCar && <p>Este carro é novo</p>}
            </div>
        </div>
    )
}

export default CardDetails;