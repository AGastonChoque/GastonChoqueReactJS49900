import classes from "./Item.module.css"

const Item = ({ name, pictureUrl, price }) => {
    return (

        <div className={classes.cardItemMan1}>
            <img src={pictureUrl} className="card-img-top" alt={name}/>
            <div>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">${price.toFixed(2)}</p>
                <a href="#" className="btn btn-outline-secondary ">Ver mas</a>
            </div>
        </div>
    )
}

export default Item;
