import { useCart } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"


const CartView = ({ text1 }) => {


    const { cart, updateFromCart, removeItem, total, vaciarCarrito } = useCart()


    return (
        cart.length >= 1 ? (
            <div className="container">
                <h4 className="container d-flex justify-content-around mt-5">{text1}</h4>
                <div className="container mt-5 mb-2">
                    <div className="row justify-content-between">
                        <h4>Sus productos</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(prod => {
                                        return (
                                            <tr key={prod.id}>
                                                <th scope="row"></th>
                                                <td><img src={prod.pictureUrl} alt={prod.name} width="50" /></td>
                                                <td>{prod.name}</td>
                                                <td>
                                                    <ItemCount initialValue={prod.quantity} incrementBy={1} stock={prod.stock} onAdd={updateFromCart} countCart={true} prodId={prod.id} />
                                                </td>
                                                <td>${prod.price}</td>
                                                <td>${prod.price * prod.quantity}</td>
                                                <td><button type="button" className="btn-close" aria-label="Close" onClick={() => removeItem(prod.id, prod.name)}></button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Total de la compra</th>
                                    <th>${total}</th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="container d-flex justify-content-around mb-5">
                            <button type="button" className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                            <Link className="btn btn-outline-success" to="/checkout">Finalizar Compra!</Link>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-around mb-5"></div>
            </div>
        ) : (
            <div className="container d-flex flex-column align-items-center mt-5">
                <h4>{text1}</h4>
                <h3 >Usted no tiene ningun producto en su carrito</h3>
            </div>
        )
    )
}

export default CartView