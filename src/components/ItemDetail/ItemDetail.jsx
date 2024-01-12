import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { ToastContainer, toast } from 'react-toastify';



const ItemDetail = ({ id, name, price, category, pictureUrl, stock, description }) => {

    const { addItem, isInCart, cart, existeEnElCarrito} = useCart()

    const enElCarrito = existeEnElCarrito(id)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, category, pictureUrl, quantity
        }
        addItem(objProductToAdd)

        toast.success(`Agregaste ${quantity} "${name}" al carrito!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

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
                            <ItemCount initialValue={enElCarrito.quantity} incrementBy={1} stock={stock} onAdd={handleOnAdd}/>
                            
                            <Link to="/cart" className="btn btn-success m-1">Terminar Compra</Link>
                        </div>
                    ) : (
                        <ItemCount initialValue={1} incrementBy={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                <ToastContainer />
            </div>
        </div>
    )
}

export default ItemDetail