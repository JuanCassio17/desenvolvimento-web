import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { Fragment, useState } from 'react'
import CardDetails from './components/CardDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  // const name = "Joaquim"
  // const [userName] = useState("Maria")

  // const cars = [
  //   { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
  //   { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
  //   { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  // ]

  // function showMessage() {
  //   console.log("Evento do componente pai");
  // }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      {/* <ManageData /> */}
      {/* <ListRender /> */}
      {/* <ConditionalRender /> */}
      {/* <ShowUserName name={userName}/> */}
      {/* <CardDetails brand="VW" km={100000} color="Azul" newCar={true}/>
      <CardDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CardDetails brand="Fiat" km={4500} color="Branco" newCar={false}/> */}

      {/* {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))} */}

        {/* <Fragments propFragment="teste"/> */}

        {/* <Container myValue="testing">
          <p>Este é o conteúdo filho</p>
        </Container> */}

        {/* <ExecuteFunction myFunction={showMessage}/> */}

        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>

    </>
  )
}

export default App
