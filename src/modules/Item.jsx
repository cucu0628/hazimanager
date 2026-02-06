import Style from "./Item.module.css"

const Item = ({theme, date, deadline, description, subject, type}) =>{
    return(
        <>
        <div className={Style.card}>
            <div className={`${Style.theme} ${Style.fullWidth}`}>
                
                <p className={Style.text}>{subject}</p>
                <p className={Style.icon}>{type}</p>
            </div>
            <h1 className={Style.fullWidth}>Téma: {theme}</h1>
            <p>{date}</p>
            <p>{deadline}</p>
            <p>{description}</p>
            
           
        </div>
            
        </>
    )
}
export default Item;