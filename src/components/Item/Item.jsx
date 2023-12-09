import classes from "./Item.module.css"

const Item = ({ name, img, price }) => {
    return (

        <div className={classes.cardMan1}>
            <img src={img} className="card-img-top" alt={name}/>
            <div>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">${price.toFixed(2)}</p>
                <a href="#" className="btn btn-outline-secondary ">Ver mas</a>
            </div>
        </div>
    )
}

export default Item;
