import { Link } from "react-router-dom"

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className="navbar-brand text-light">Menú</p>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/category/celular" className="nav-link active text-light">Celular</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/tablet" className="nav-link active text-light">Tablet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/notebook" className="nav-link active text-light">Notebook</Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-column">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar" />
                                <button className="btn btn-outline-light" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar