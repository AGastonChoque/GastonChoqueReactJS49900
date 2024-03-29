import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../NotificationProvider/NotificationContext"



const ItemDetail = ({ id, name, price, category, pictureUrl, stock, description }) => {

    const { addItem, isInCart, prodInCart } = useCart()

    const { showNotification } = useNotification()

    const enElCarrito = prodInCart(id)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, category, pictureUrl, quantity, stock, description
        }
        addItem(objProductToAdd)
        showNotification(`Agregaste ${quantity} "${name}" al carrito!`)
    }

    return (

        <div className={classes.cardItemDetailMan1}>
            <div>
                <img src={pictureUrl} className={classes.imgType} alt={name} />
            </div>
            <div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small>{category}</small></p>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                {
                    isInCart(id) ? (
                        <div className="d-flex flex-column">
                            <ItemCount initialValue={enElCarrito.quantity} incrementBy={1} stock={stock} onAdd={handleOnAdd} countCart={false} />
                            <Link to="/cart" className="btn btn-success m-1">Terminar Compra</Link>
                        </div>
                    ) : (
                        <ItemCount initialValue={1} incrementBy={1} stock={stock} onAdd={handleOnAdd} count2={false} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail