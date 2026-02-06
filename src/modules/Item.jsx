const Item = ({theme, date, deadline, description, subject, type}) =>{
    return(
        <>
            <p>{theme}</p>
            <p>{date}</p>
            <p>{deadline}</p>
            <p>{description}</p>
            <p>{subject}</p>
            <p>{type}</p>
        </>
    )
}
export default Item;