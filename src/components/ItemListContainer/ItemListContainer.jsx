import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])
    

    const { text1 } = props
    return (
        <div className="container">
            <h4 className="text-center mt-5">{text1}</h4>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer