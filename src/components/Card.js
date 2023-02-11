

const Card = (props) => {
    const { name } = props

    return(
        <div style={{ border: '1px solid black'}}>
            Name = {name}
        </div>
    )
}

export default Card;