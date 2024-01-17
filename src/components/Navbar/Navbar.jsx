import { Link, useNavigate } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate ()

    useEffect(() => {
        const categoriesCollection = query(collection(db, "categories"), orderBy("order", "asc"))

        getDocs(categoriesCollection)
        .then(querySnapshot => {
            const CategoriesAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields}
            })

            setCategories(CategoriesAdapted)
        })
    }, [])


    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className="navbar-brand text-light">Menú</p>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                categories.map(cat => {
                                    return <li className="nav-item">
                                    <Link key={cat.id} to={`/category/${cat.slug}`} className="nav-link active text-light">{cat.name}</Link>
                                </li>
                                })
                            }
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