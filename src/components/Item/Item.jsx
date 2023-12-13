import classes from "./Item.module.css"
import { Link } from "react-router-dom";

const Item = ({ id, name, pictureUrl, price }) => {
    return (

        <div className={classes.cardItemMan1}>
            <img src={pictureUrl} className={classes.styleImg} alt={name}/>
            <div>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">${price.toFixed(2)}</p>
                <Link to={`/detail/${id}`} className="btn btn-outline-secondary">Ver mas </Link>
            </div>
        </div>
    )
}

export default Item;
