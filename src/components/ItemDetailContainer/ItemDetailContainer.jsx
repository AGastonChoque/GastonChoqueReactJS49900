import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { useParams } from "react-router-dom"
import { useNotification } from "../../NotificationProvider/NotificationContext"
import { getProductById } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemDetailContainer = ({ text1 }) => {

    const { productId } = useParams()
    const { showNotification } = useNotification()

    const { data: product, loading, error } = useAsync(() => getProductById(productId), [productId])

    if(error) {
        showNotification(error)
    }

    return (
        loading ? (
            <Loading />
        ) : (
            <div className="container mt-5">
                <h4 className="text-center mt-5">{text1}</h4>
                <ItemDetail {...product} />
            </div>
        )
    )

}

export default ItemDetailContainer
