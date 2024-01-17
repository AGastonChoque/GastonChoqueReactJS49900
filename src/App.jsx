import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import CheckoutView from './components/CheckoutView/CheckoutView'
import AdminContainer from './components/AdminContainer/AdminContainer'
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
              <Route path="/detail/:productId" element={<ItemDetailContainer text1={"Detalle de producto"} />} />
              <Route path="/cart" element={<CartView text1={"Carrito"} />} />
              <Route path="/checkout" element={<CheckoutView text1={"Checkout"} />} />
              <Route path="/admin" element={<AdminContainer text1={"Admin"}/>} />
              <Route path="*" element={<h2 className='container d-flex justify-content-center mt-5'>Pagina no encontrada</h2>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </>
  )
}

export default App
