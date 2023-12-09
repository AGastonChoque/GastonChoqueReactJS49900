import cartImg from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <a className="m-3 p-2 bg-white rounded-pill d-flex justify-content-evenly align-items-center">
            <img src={cartImg} alt="Carrito" width="25" />
            <span className="badge rounded-pill bg-danger">
                0
            </span>
        </a>
    )
}

export default CartWidget