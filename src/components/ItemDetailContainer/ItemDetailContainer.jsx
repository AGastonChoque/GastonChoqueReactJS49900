import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { useNotification } from "../../NotificationProvider/NotificationContext"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)
    const { showNotification } = useNotification()

    useEffect(() => {

        const documentRef = doc(db, "products", productId)

        getDoc(documentRef)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(() => {
                showNotification("Hubo un error al cargar el producto, intente nuevamente")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])


    return (
        loading ? (
            <Loading />
        ) : (
            <div className="container mt-5">
                <h4 className="text-center mt-5">Detalle del producto</h4>
                <ItemDetail {...product} />
            </div>
        )
    )

}

export default ItemDetailContainer
