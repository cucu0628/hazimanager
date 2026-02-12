import { useState } from 'react'
import { RiSpeakFill } from "react-icons/ri";
import { BsChatRightTextFill } from "react-icons/bs";

import Style from "./Item.module.css"

const Item = ({theme, date, deadline, description, subject, type}) =>{
    const [done, setDone] = useState(false);
    return(
        <>
        <div className={done == true ? Style.done : Style.notDone}>
            <div className={`${Style.theme} ${Style.fullWidth}`}>
                <p className={Style.text}>{subject}</p>
                <p className={Style.icon}>{type == "Szóbeli" ? <RiSpeakFill /> : <BsChatRightTextFill />}</p>
            </div>
            <h1 className={Style.fullWidth}>Téma: {theme}</h1>
            <p className={Style.fullWidth}>{date}</p>
            <p className={Style.fullWidth}>{deadline}</p>
            <p className={Style.fullWidth}>{description}</p>
            <p className={`${Style.fullWidth} ${Style.check}`}><input type="checkbox" checked={done} onChange={() => setDone(!done)}/> Kész</p>
            
           
        </div>
            
        </>
    )
}
export default Item;