import { useState } from "react"

const ItemCount = ({initialValue, incrementBy}) => {
    const [count, setCount] = useState(initialValue)

    const restar = () => {
        if (count > 0) {
            setCount(prev => prev - incrementBy)
        }
    }

    const sumar = () => {
        setCount(prev => prev + incrementBy)
    }

return(
    <div className="d-flex flex-column align-items-center">
        <div>
        <h3>{count}</h3>
        </div>
        <div>
            <button className="btn btn-danger m-1" onClick={restar}>Restar</button>
            <button className="btn btn-warning m-1" onClick={() => setCount(initialValue)}>Reiniciar</button>
            <button className="btn btn-success m-1" onClick={sumar}>Sumar</button>
        </div>
    </div>

)
}

export default ItemCount