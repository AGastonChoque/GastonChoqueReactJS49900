import logoSilvinaTejerina from "./assets/transparente.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-between align-items-center">
            
                <img onClick={() => navigate("/")} className="logo-header" src={logoSilvinaTejerina} alt="Logo Silvina Tejerina"
                    width="250"/>
            
            <div>
                <Link to="/admin" className="m-2">Admin</Link>
                <CartWidget />
            </div>
        </div>
    )
}

export default Header