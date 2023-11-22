const Button = ({btnClases, onClick, label}) => {
    return(
        <button className={btnClases} onClick={onClick}>{label}</button>
    )
}

export default Button