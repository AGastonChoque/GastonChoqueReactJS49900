import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"


const ItemListContainer = ({ text1 }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()
    const { categoryId } = useParams()


    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <Loading/>
    }

    return (
        <div className="container">
            <h4 className="text-center mt-5">{text1}</h4>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer