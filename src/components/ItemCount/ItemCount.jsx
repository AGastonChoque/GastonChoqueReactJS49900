import { useState } from "react"

const ItemCount = ({initialValue, incrementBy, stock, onAdd}) => {

    const [count, setCount] = useState(initialValue)

    const restar = () => {
        if (count > 1) {
            setCount(prev => prev - incrementBy)
        }
    }

    const sumar = () => {
        if(count < stock) {
            setCount(prev => prev + incrementBy)
        }
        
    }

return(
    <div className="d-flex flex-column align-items-center">
        <div>
        <h3>{count}</h3>
        </div>
        <div>
            <button className="btn btn-danger m-1" onClick={restar}>-</button>
            <button className="btn btn-warning m-1" onClick={() => onAdd(count)}>Sumar al carrito</button>
            <button className="btn btn-success m-1" onClick={sumar}>+</button>
        </div>
    </div>
)
}

export default ItemCount