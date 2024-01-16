import ContactForm from "../ContactForm/ContactForm"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useState } from "react"
import Loading from "../Loading/Loading"
import { useNotification } from "../../NotificationProvider/NotificationContext"

const CheckoutView = () => {
    const { cart, total, vaciarCarrito } = useCart()
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    number: userData.phone,
                    message: userData.message
                },
                items: cart,
                total
            }


            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids))

            const { docs } = await getDocs(productsCollection)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })


            if (outOfStock.length === 0) {
                batch.commit()

                const ordersCollection = collection(db, "orders")

                const { id } = await addDoc(ordersCollection, objOrder)

                vaciarCarrito()
                setOrderId(id)
            } else {
                showNotification("Ups, algunos productos no cuentan con la cantidad solicitada")
            }

        } catch (error){
            showNotification(`Ups hubo un error ${error.message}`)
        } finally {
            setLoading(false)
        }
    }


    if (loading) {
        return (
            <Loading />
        )
    }

    
    if (orderId) {
        return (
            <div className="container">
                <h2 className="container d-flex justify-content-around mt-5">Tu compra se realizo de manera exitosa!</h2>
                <div className="row justify-content-between">
                    <h2 className="d-flex justify-content-around mt-5">El orden de tu compra es "{orderId}"</h2>
                </div>
            </div>
        )
    }



    return (
        <div className="container">
            <h2 className="container d-flex justify-content-around mt-5">Checkout</h2>
            <div className="container mt-5 mb-2">
                <div className="row justify-content-between">
                    <h2>Tus datos</h2>
                </div>
                <div>
                    <ContactForm createOrder={createOrder} />
                </div>
            </div>
        </div>
    )
}

export default CheckoutView