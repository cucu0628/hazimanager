import { useState, useRef } from 'react'
import Style from "./Form.module.css";
import Swal from 'sweetalert2'

const Form = ({ upToApp }) => {

  const [subject, setSubject] = useState("Angol")
  const [type, setType] = useState("")
  const themeRef = useRef()
  const dateRef = useRef()
  const deadlineRef = useRef()
  const descriptionRef = useRef()


  const Submit = async () => {
    let theme = themeRef.current.value
    let date = dateRef.current.value
    let deadline = deadlineRef.current.value
    let description = descriptionRef.current.value
    if (theme == "" || date == "" || deadline == "" || subject == "" || type === "") {
      Swal.fire({
        theme: 'dark',
        icon: "error",
        title: "Nem jó",
        text: "Töltsél ki minden adatot!",
      });

    } else {

      const add = await fetch("http://localhost:8080/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          theme: theme,
          date: date,
          deadline: deadline,
          subject: subject,
          type: type,
          description: description,
          done: 0
        })
      })

      const data = await add.json()
      console.log(data)

      if (data.success && data.id) {
        upToApp(data.data);

        Swal.fire({
          theme: 'dark',
          title: "Sikeres felvétel",
          icon: "success",
        });
      } else {
        Swal.fire({
          theme: 'dark',
          icon: "error",
          title: "Nem jó",
          text: data.error || "Nem sikerült feltölteni",
        });
      }


    }

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
          <input type="text" placeholder="Témakör megnevezése" ref={themeRef} />
        </div>

        <div className={Style.field}>
          <label>Feladás napja</label>
          <input type="date" ref={dateRef} />
        </div>

        <div className={Style.field}>
          <label>Határidő</label>
          <input type="date" ref={deadlineRef} />
        </div>

        <div className={`${Style.field} ${Style.fullWidth}`}>
          <label>Feladat bővebb leírása</label>
          <textarea rows="3" ref={descriptionRef}></textarea>
        </div>

        <div className={`${Style.field} ${Style.radioGroup}`}>
          <p>Típus:</p>
          <label>
            <input type="radio" name="tipus" id="elso" onClick={() => setType("Szóbeli")} /> Szóbeli
          </label>
          <label>
            <input type="radio" name="tipus" id="masodik" onClick={() => setType("Írásbeli")} /> Írásbeli
          </label>
        </div>

        <button type="submit" className={Style.submitBtn} onClick={Submit}>Felvétel</button>
      </form>
    </>
  );
};

export default Form;