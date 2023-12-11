import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, price, category, pictureUrl, stock, description }) => {
    return (

        <div className={classes.cardItemDetailMan1}>
            <div>
                <img src={pictureUrl} className="img-fluid rounded" alt={name} />
            </div>
            <div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small>{category}</small></p>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <ItemCount initialValue={0} incrementBy={1} /></div>
        </div>
    )
}

export default ItemDetail