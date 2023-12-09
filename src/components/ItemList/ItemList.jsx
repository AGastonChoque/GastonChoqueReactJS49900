import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="d-flex justify-content-between">
            {
                products.map(product => {
                    return (
                        <Item key={product.id} {...product} />
                )
            })
            }
        </div>
    )
}

export default ItemList