import Sytle from "./Form.module.css"

const Form = () =>{
 return(
    <div >
        <form onSubmit={(e) => e.preventDefault()} className={Sytle.form}>
            <select >
                <option value="Angol">Angol</option>
                <option value="Magyar">Magyar</option>
                <option value="Matek">Matek</option>
                <option value="Töri">Töri</option>
                <option value="Frontend">Frontend</option>
            </select>
            <label>Támakör</label>
            <input type="text" name="" id="" placeholder="Témakör"/>
            <label>Feladás napja</label>
            <input type="date" name="" id="" />
            <label>Határidő</label>
            <input type="date" name="" id="" />
            <label>Feladat bővebb leírása</label>
            <textarea name="" id=""></textarea>
            <div>
                <label htmlFor="elso">Szóbeli</label>
                <input type="radio" name="tipus" id="elso" /><br />
                <label htmlFor="masodik">Írásbeli</label>
                <input type="radio" name="tipus" id="masodik" />
            </div>
            <input type="submit" value="Felvétel" />
        </form>
    </div>
 )   
}
export default Form;