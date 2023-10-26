/**
 * 10. Props
 * props é outro recurso fundamental do react
 * nos permite passar valores de um componente pai para um componente filho
 * isso será muito útil quando os dados forem carregados via banco de dados, por exemplo
 * as props vem em um objeto no argumento da função do componente


--- Rascunho props

import React from "react";

const ShowUserName = (props) => {

    return (
        <div>
            <h2>O nome do usuário é: {props.name}</h2>
        </div>
    )
}

export default ShowUserName;

chamando no arquivo importado:

const name = "Joaquim"
const [userName] = useState("Maria")

<ShowUserName name={userName}/>

 */

/**
 * 11. Desestruturando props (maneira mais moderna)
 * é super comum passar mais de uma prop em um componente
 * para facilitar isso o React nos permite desestruturar as propriedades que chega, com o recurso de destructuring
 * se temos duas props: name e age
 * podemos fazer assim: function MyComponent({name, age})
 * agora não precisamos mais utilizar props.algumaCoisa
 
dica: valores numericos coloque entre chaves, ex km={100000}

---- Rascunho props com destructuring

import React from "react";

const CardDetails = ({brand, km, color}) => {
    return (
        <div>
            <div>
                <h2>Detalhes do carro</h2>
                <ul>
                    <li>Marca: {brand}</li>
                    <li>KM: {km}</li>
                    <li>Cor: {color}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardDetails;

 */

/**
 * 12. Reutilização de componentes
 * com props a reutilização de componentes começa a fazer muito sentido
 * se temos os dados de 1000 carros por exemplo, podemos reaproveitar carDetails 1000 vezes
 * isso torna nosso código mais padronizado facilitando a manutenção

---- Rascunho do reaproveitamento

      <CardDetails brand="VW" km={100000} color="Azul" newCar={true}/>
      <CardDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CardDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
 */

/**
 * 13. Reutilização com loop
 * o arrays de dados podem ter muitos itens também
 * então o correto é utilizar uma estrutura de loop (map) para a sua exibição
 * e com isso conseguimos conciliar os três conceitos: renderização de listas, reaproveitamento de componentes e props

---- Rascunho de reutilização com loop

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

        {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))}

*/

/**
 * 14. React Fragments
 * os react fragments são interessantes para quando precisamos ter mais de um elemento pai em um componente
 * criamos uma tag vazia <>...</>
 * e ela serve como elemento pai, não alterando a estrutura do HTML com uma div, por exemplo

muito importante para não poluir o HTML com elementos pai
exemplo:
    <>
        <Fragments propFragment="teste"/>
    </>
 */

/**
 * 15. Children prop
 * children prop é um recurso utilizado para quando um componente precisa ter JSX dentro dele
 * porém este JSX vem do componente pai
 * então o componente age como um container, abraçando estes elementos
 * e children é considerada uma prop do componente

---- Rascunho children prop

import React from "react";

const Container = ({children, myValue}) => {
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children}
            <p>O valor é: {myValue}</p>
        </div>
    )
}

export default Container

ao chamar o componente:

        <Container myValue="testing">
          <p>Este é o conteúdo filho</p>
        </Container>

 */

/**
 * 16. Funções em props
 * as funções podem ser passadas para as props normalmente
 * basta criar a função no componente pai e enviar como prop para o componente
 * no componente filho ela pode ser ativada por um evento, por exemplo


----- Rascunho das funções em props

import React from "react";

const ExecuteFunction = ({myFunction}) => {
    return (
        <div>
            <button onClick={myFunction}>Clique aqui para executar a função</button>
        </div>
    )
}

export default ExecuteFunction

no arquivo que será utilizado

<ExecuteFunction myFunction={showMessage}/>

 */

/**
 * 17. Elevação de state
 * elevação de state ou state lift é quando um valor é elevado do componente filho para o componente pai
 * geralmente temos um componente que usa o state e outro que o altera
 * então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state

----- Rascunho state lift

Componente Message:

import React from "react";

const Message = ({msg}) => {
    return (
        <div>
            <p>A mensagem é: {msg}</p>
        </div>
    )
}

export default Message


Componente ChangeMessage:

import React from "react";

const ChangeMessage = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Oi. Tudo bem?"]
    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
        </div>
    )
}

export default ChangeMessage;

ao chamar os arquivos:

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

   <Message msg={message}/>
   <ChangeMessage handleMessage={handleMessage}/>

 */