import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { useNotification } from "../../NotificationProvider/NotificationContext"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({ text1 }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const { showNotification } = useNotification()


    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(querySnapshot => {

                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification("Hubo un error al cargar los productos, intente nuevamente")
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


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