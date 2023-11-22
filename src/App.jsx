import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <>
    <header className="bg-dark bg-gradient p-2">
      <Navbar />
    </header>
    <ItemListContainer text1={"Hola, aqui abajo tienes un contador!"} text2={"Puedes sumar, restar y reiniciar el contador, diviertete!"}/>
    <ItemCount initialValue={0} incrementBy={1} />
    </>
  )
}

export default App
