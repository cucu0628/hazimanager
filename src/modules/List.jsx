import Item from "./Item";

const List = ({adat}) =>{
    return(
        <>
        {adat.map((item,key) => <Item theme={item.theme} date={item.date} deadline={item.deadline} description={item.description} subject={item.subject} type={item.type} key={key} done={item.done} id={item.id}/>)}
        
        </>
    )
}
export default List;