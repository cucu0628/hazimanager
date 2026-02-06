import Style from "./Item.module.css"

const Item = ({theme, date, deadline, description, subject, type}) =>{
    return(
        <>
        <div className={Style.card}>
            <p className={`${Style.theme} ${Style.fullWidth}`}>{theme}</p>
            <p>{date}</p>
            <p>{deadline}</p>
            <p>{description}</p>
            <p>{subject}</p>
            <p>{type}</p>
        </div>
            
        </>
    )
}
export default Item;