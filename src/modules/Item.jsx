import { useState } from 'react'
import { RiSpeakFill } from "react-icons/ri";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import { FcExpired } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import moment from 'moment';
import Swal from 'sweetalert2'

import Style from "./Item.module.css"

const Item = ({ theme, date, deadline, description, subject, type, done, id , deletData}) => {
    const [doneState, setDone] = useState(done);
    const ma = moment()
    const deadlineMoment = moment(deadline, "YYYY-MM-DD")
    const kulonbseg = deadlineMoment.diff(ma, "days") + 1



    const doneFgv = async () => {
        
        if(doneState == 0){
            Swal.fire({ theme: 'dark', title: "Sikeresen megcsináltad", icon: "success", })
        }
        if(doneState == 1){
            done = 0
        }else if(doneState == 0){
            done = 1
        }
        setDone(done)
        console.log(done);
        const change = await fetch("http://localhost/22c-adam/backend/index.php/done", {
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



    const del = () => {
        Swal.fire({
            theme: "dark",
            title: "Szeretnéd törölni?",
            showDenyButton: true,
            confirmButtonText: "Igen",
            denyButtonText: `Nem`
        }).then((result) => {
            if (result.isConfirmed) {
                deletData(id)
            } 
        });
    }

    return (
        <>
            <div className={doneState == 1? Style.done : Style.notDone}>
                <div className={`${Style.top} ${Style.fullWidth}`}>
                    <p className={`${Style.text} ${Style.check}`}>{subject}</p>
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
                <p className={`${Style.fullWidth} ${Style.check}`}><input type="checkbox" onChange={doneFgv} defaultChecked={done == 1 ? true : false} /> Kész <span onClick={del}><FaTrash /></span></p>


            </div>

        </>
    )
}
export default Item;