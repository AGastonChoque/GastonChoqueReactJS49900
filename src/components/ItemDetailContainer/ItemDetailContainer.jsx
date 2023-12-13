import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { getProductById } from "../../asyncMock"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [productId])

if(loading) {
    return <Loading/>
}


    return(
        <div className="container mt-5">
            <h4 className="text-center mt-5">Detalle del producto</h4>
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer