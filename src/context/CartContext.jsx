import { useState, createContext, useContext } from 'react'

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    isInCart: () => { },
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            removeItem(productToAdd.id)
            /* let prodExistente = existeEnElCarrito(productToAdd.id)
            prodExistente.quantity = productToAdd.quantity */
            setCart(prev => [...prev, productToAdd])
        }
    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    const existeEnElCarrito = (productId) => {
        const prodExistente = cart.find(prod => prod.id === productId)
        if(prodExistente){
            return prodExistente
        }
    }

    const removeItem = (productId) => {
        const cartUpdate = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdate)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const total = getTotalQuantity()


    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, existeEnElCarrito, removeItem, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}