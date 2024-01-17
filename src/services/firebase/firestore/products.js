import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createProductAdaptedFromFirestore } from "../../../adapters/createProductAdaptedFromFirestore"


export const getProducts = (categoryId) => {

    const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

    return getDocs(collectionRef)
        .then(querySnapshot => {

            const productsAdapted = querySnapshot.docs.map(doc => {
                return createProductAdaptedFromFirestore(doc)
            })
            return productsAdapted
        })
        .catch(() => {
            return "Hubo un error al cargar los productos, intente nuevamente"
        })
}


export const getProductById = (productId) => {

    const documentRef = doc(db, "products", productId)

        return getDoc(documentRef)
            .then(queryDocumentSnapshot => {
                return createProductAdaptedFromFirestore(queryDocumentSnapshot)
            })
            .catch(() => {
                return "Hubo un error al cargar el producto, intente nuevamente"
            })
}
