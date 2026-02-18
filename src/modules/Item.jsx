import { useState } from 'react'
import { RiSpeakFill } from "react-icons/ri";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import { FcExpired } from "react-icons/fc";
import moment from 'moment';
import Swal from 'sweetalert2'

import Style from "./Item.module.css"

const Item = ({ theme, date, deadline, description, subject, type, done, id }) => {
    const [doneState, setDone] = useState(done == 1);
    const ma = moment()
    const deadlineMoment = moment(deadline, "YYYY-MM-DD")
    const kulonbseg = deadlineMoment.diff(ma, "days") + 1
    console.log(doneState)


    const doneFgv = async() =>{
        setDone(!doneState); !doneState ? Swal.fire({ theme: 'dark', title: "Sikeresen megcsináltad", icon: "success", }) : "";
        doneState ? done = 0 : done = 1;
        const change = await fetch("http://localhost:8080/done",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                done: done
            })
        })
        const changed = await change.json()
        console.log(changed)
    }


    return (
        <>
            <div className={doneState == true ? Style.done : Style.notDone}>
                <div className={`${Style.top} ${Style.fullWidth}`}>
                    <p className={`${Style.text} ${Style.check}`}>{subject}</p>
                    <p>{ }</p>
                    <p className={Style.icon}>{type == "Szóbeli" ? <RiSpeakFill /> : <BsChatRightTextFill />}</p>
                </div>
                <p className={`${Style.fullWidth} ${Style.theme}`}>Téma: {theme}</p>
                <div className={Style.fullWidth}>
                    <p >{date}</p>
                    <p >{deadline}</p>
                </div>
                <p className={`${Style.fullWidth} ${kulonbseg <= 3 ? Style.warning : Style.notwarning}`}>
                    {kulonbseg <= 3 && kulonbseg > 0 ? <FaExclamationTriangle /> : <FcExpired />}

                </p>
                <p className={Style.fullWidth}>{description}</p>
                <p className={`${Style.fullWidth} ${Style.check}`}><input type="checkbox" onChange={doneFgv} defaultChecked={doneState}/> Kész</p>


            </div>

        </>
    )
}
export default Item;