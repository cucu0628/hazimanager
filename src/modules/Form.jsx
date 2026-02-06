import { useState, useRef } from 'react'
import Style from "./Form.module.css";

const Form = ({upToApp}) => {

  const [subject, setSubject] = useState("Angol")
  const [type, setType] = useState()

  const themeRef = useRef()
  const dateRef = useRef()
  const deadlineRef = useRef()
  const descriptionRef = useRef()


  const Submit = () =>{
    let theme = themeRef.current.value
    let date = dateRef.current.value
    let deadline = deadlineRef.current.value
    let description = descriptionRef.current.value

    upToApp({theme,date,deadline,description,subject,type})
  }



  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={Style.form}>
        <div className={Style.field}>
          <label>Tantárgy</label>
          <select onChange={(e) => setSubject(e.currentTarget.value)}>
            <option value="Angol">Angol</option>
            <option value="Magyar">Magyar</option>
            <option value="Matek">Matek</option>
            <option value="Töri">Töri</option>
            <option value="Frontend">Frontend</option>
          </select>
        </div>

        <div className={Style.field}>
          <label>Témakör</label>
          <input type="text" placeholder="Témakör megnevezése" ref={themeRef}/>
        </div>

        <div className={Style.field}>
          <label>Feladás napja</label>
          <input type="date" ref={dateRef}/>
        </div>

        <div className={Style.field}>
          <label>Határidő</label>
          <input type="date" ref={deadlineRef}/>
        </div>

        <div className={`${Style.field} ${Style.fullWidth}`}>
          <label>Feladat bővebb leírása</label>
          <textarea rows="3" ref={descriptionRef}></textarea>
        </div>

        <div className={`${Style.field} ${Style.radioGroup}`}>
          <p>Típus:</p>
          <label>
            <input type="radio" name="tipus" id="elso" onClick={() => setType("Szóbeli")}/> Szóbeli
          </label>
          <label>
            <input type="radio" name="tipus" id="masodik" onClick={() => setType("Írásbeli")}/> Írásbeli
          </label>
        </div>

        <button type="submit" className={Style.submitBtn} onClick={Submit}>Felvétel</button>
      </form>
    </>
  );
};

export default Form;