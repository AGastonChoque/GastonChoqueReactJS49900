const ItemListContainer = (props) => {
    const { text1, text2 } = props
    return (
        <div className="d-flex flex-column aling-items-center">
            <h4 className="text-center mt-5">{props.text1}</h4>
            <h5 className="text-center mb-4 p-1">{props.text2}</h5>
        </div>

    )
}

export default ItemListContainer