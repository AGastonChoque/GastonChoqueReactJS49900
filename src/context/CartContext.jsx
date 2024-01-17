import { useState, createContext, useContext } from 'react'
import { useNotification } from '../NotificationProvider/NotificationContext'


export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    isInCart: () => { },
})


export const CartProvider = ({ children }) => {

    const { showNotification } = useNotification()

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            updateCart(productToAdd)
        }
    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    const prodInCart = (productId) => {
        const prodExistente = cart.find(prod => prod.id === productId)
        if (prodExistente) {
            return prodExistente
        }
    }

    const updateCart = (productId) => {
        const posId = cart.findIndex(prod => prod.id === productId.id)
        const newCart = [...cart]
        newCart[posId] = { ...newCart[posId], quantity: productId.quantity }
        setCart(newCart)
    }

    const updateFromCart = (productId, quantityValue, func) => {

        const func2 = () => {
            const posId = cart.findIndex(prod => prod.id === productId)
            let refQuant = document.getElementById(`{onRef${productId}}`).textContent

            if (quantityValue >= 1) {
                const newCart = [...cart]
                newCart[posId] = { ...newCart[posId], quantity: parseInt(refQuant) }
                setCart(newCart)
            }
        }

        const restaSuma = async () => { await func(); func2() }
        restaSuma()

    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const removeItem = (productId, productName) => {
        const cartUpdate = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdate)
        showNotification(`Eliminaste "${productName}" del carrito!`)
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

    const total = getTotal()


    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, prodInCart, updateCart, updateFromCart, removeItem, totalQuantity, total, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}