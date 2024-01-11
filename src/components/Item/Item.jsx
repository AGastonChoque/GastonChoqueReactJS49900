import classes from "./Item.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Item = ({ id, name, pictureUrl, price }) => {

    const [classBtn, setClassBtn] = useState("btn btn-secondary")
    const divRef = useRef()
    
    useEffect(() => {
        const handleScroll = () => {
            const classDiv = divRef.current
            const {y} = classDiv.getBoundingClientRect()
            const newClass = y < -70 ? "btn btn-outline-secondary" : "btn btn-secondary"
            setClassBtn(newClass)
        }
        window.addEventListener("scroll", handleScroll)
        
        return() => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div ref={divRef} className={classes.cardItemMan1}>
            <img src={pictureUrl} className={classes.styleImg} alt={name}/>
            <div>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">${price.toFixed(2)}</p>
                <Link to={`/detail/${id}`} className={`${classBtn}`}>Ver mas </Link>
            </div>
        </div>
    )
}

export default Item;
