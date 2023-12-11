import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../asyncMock"
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById("2")
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [])

    return(
        <div className="container">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer