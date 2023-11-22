import { useState } from "react"
import Button from "../Button/Button"

const ItemCount = ({initialValue, incrementBy}) => {
    const [count, setCount] = useState(initialValue)

    const restar = () => {
        if (count > 0) {
            setCount(count - incrementBy)
        }
    }

    const sumar = () => {
        setCount(count + incrementBy)
    }

return(
    <div className="d-flex flex-column align-items-center">
        <div className=" ">
        <h3>{count}</h3>
        </div>
        <div>
            <Button btnClases={"btn btn-danger m-1"} onClick={restar} label={"Restar"} />
            <Button btnClases={"btn btn-warning m-1"} onClick={() => setCount(initialValue)} label={"Reiniciar"} />
            <Button btnClases={"btn btn-success m-1"} onClick={sumar} label={"Sumar"} />
        </div>
    </div>

)
}

export default ItemCount