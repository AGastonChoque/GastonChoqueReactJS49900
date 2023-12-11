import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
    <header className="bg-dark bg-gradient p-2">
      <Navbar />
    </header>
    <ItemListContainer text1={"Bienvenido a mi E-Commerce"} />
    <ItemDetailContainer />
    </>
  )
}

export default App
