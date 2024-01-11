import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const ItemDetail = ({ id, name, price, category, pictureUrl, stock, description }) => {
    /* const [quantityAdded, setQuantityAdded] = useState(0) */

    const { addItem, isInCart, totalQuantity } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, category, pictureUrl, quantity
        }
        addItem(objProductToAdd)
        /* setQuantityAdded(count) */
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
                        <div>
                            <Link to="/" className="btn btn-warning m-1">Seguir comprando</Link>
                            <Link to="/cart" className="btn btn-success m-1">Terminar Compra</Link>
                        </div>
                    ) : (
                        <ItemCount initialValue={1} incrementBy={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail