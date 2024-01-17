import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { useNotification } from "../../NotificationProvider/NotificationContext"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"


const ItemListContainer = ({ text1 }) => {

    const { categoryId } = useParams()
    const { showNotification } = useNotification()

    const { data: products, loading, error } = useAsync(() => getProducts(categoryId), [categoryId])

    if(error) {
        showNotification(error)
    }


    return (
        loading ? (
            <Loading />
        ) : (
            <div className="container">
                <h4 className="text-center mt-5">{text1}</h4>
                <ItemList products={products} />
            </div>
        )
    )
}

export default ItemListContainer