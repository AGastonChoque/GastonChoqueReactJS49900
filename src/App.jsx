import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './NotificationProvider/NotificationContext'


function App() {

  return (
    <>
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <header className='bg-dark bg-gradient'>
              <Header />
              <Navbar />
            </header>
            <Routes>
              <Route path="/" element={<ItemListContainer text1={"Bienvenido a mi E-Commerce"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer text1={"Productos filtrados"} />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="*" element={<h3 className='container d-flex justify-content-center'>Pagina no encontrada</h3>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </>
  )
}

export default App
