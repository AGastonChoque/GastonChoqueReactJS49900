import { useState } from "react"



const ItemCount = ({ initialValue, incrementBy, stock, onAdd, countCart, prodId }) => {

    const [quantity, setQuantity] = useState(initialValue)

    const restar = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - incrementBy)
        }
    }

    const sumar = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + incrementBy)
        }
    }


    return (
        countCart ? (
            <div className="d-flex align-items-center" >
                <button className="btn btn-danger m-2" onClick={() => onAdd(prodId, quantity, restar)} >-</button>
                <p id={`{onRef${prodId}}`} > {quantity} </p>
                <button className="btn btn-success mx-2 " onClick={() => onAdd(prodId, quantity, sumar)} >+</button>
            </div>
        ) : (
            <div className="d-flex flex-column align-items-center" >
                <div>
                    <h3>{quantity}</h3>
                </div>
                <div>
                    <button className="btn btn-danger m-1" onClick={restar}>-</button>
                    <button className="btn btn-warning m-1" onClick={() => onAdd(quantity)}>Sumar al carrito</button>
                    <button className="btn btn-success m-1" onClick={sumar}>+</button>
                </div>
            </div >
        )

    )
}

export default ItemCount