import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Menú</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light">Carrito</a>
                        </li>
                    </ul>
                    <div className="d-flex flex-column">
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar"/>
                        <button className="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar