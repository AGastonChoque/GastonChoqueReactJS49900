import { getDocs, collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { productsMock } from "../../asyncMock"
import { db } from "../../services/firebase/firebaseConfig"
import UpdateStock from "../UpdateStock/UpdateStock"


const updateFromMock = async () => {
    try {
        const collectionRef = collection(db, "products")
        const currentProductsSnapshot = await getDocs(collectionRef)
        const currentProducts = currentProductsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        for (const mockProduct of productsMock) {
            const existingProduct = currentProducts.find(prod => prod.name === mockProduct.name)
            if (!existingProduct) {
                await addDoc(collectionRef, mockProduct);
            } else if (existingProduct.stock !== mockProduct.stock) {
                const productDocRef = doc(db, "products", existingProduct.id)
                await updateDoc(productDocRef, { stock: mockProduct.stock })
            }
        }
    } catch (error) {
        showNotification(`Ups hubo un error ${error.message}`)
    } finally {
    }

}

const AdminContainer = ({ text1 }) => {

    return (
        <div className="container">
            <h4 className="text-center mt-5">{ text1 }</h4>
            <UpdateStock updStock={updateFromMock} />
        </div>
    )

}

export default AdminContainer