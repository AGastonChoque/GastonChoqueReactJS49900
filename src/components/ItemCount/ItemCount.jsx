import { useState } from "react"

const ItemCount = ({initialValue, incrementBy, stock, onAdd}) => {

    const [quantity, setQuantity] = useState(initialValue)

    const restar = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - incrementBy)
        }
    }

    const sumar = () => {
        if(quantity < stock) {
            setQuantity(prev => prev + incrementBy)
        }
        
    }

return(
    <div className="d-flex flex-column align-items-center">
        <div>
        <h3>{quantity}</h3>
        </div>
        <div>
            <button className="btn btn-danger m-1" onClick={restar}>-</button>
            <button className="btn btn-warning m-1" onClick={() => onAdd(quantity)}>Sumar al carrito</button>
            <button className="btn btn-success m-1" onClick={sumar}>+</button>
        </div>
    </div>
)
}

export default ItemCount