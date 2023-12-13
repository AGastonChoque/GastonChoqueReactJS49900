import logoSilvinaTejerina from "./assets/transparente.png"
import CartWidget from "../CartWidget/CartWidget"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-between align-items-center">
            
                <img onClick={() => navigate("/")} className="logo-header" src={logoSilvinaTejerina} alt="Logo Silvina Tejerina"
                    width="250"/>
            
            <div>
                <a href="#" className="m-2">
                    Iniciar sesión
                </a>
                <CartWidget />
            </div>
        </div>
    )
}

export default Header