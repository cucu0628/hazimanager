import Style from "./Form.module.css";

const Form = () => {
  return (
    <div className={Style.container}>
      <form onSubmit={(e) => e.preventDefault()} className={Style.form}>
        <div className={Style.field}>
          <label>Tantárgy</label>
          <select>
            <option value="Angol">Angol</option>
            <option value="Magyar">Magyar</option>
            <option value="Matek">Matek</option>
            <option value="Töri">Töri</option>
            <option value="Frontend">Frontend</option>
          </select>
        </div>

        <div className={Style.field}>
          <label>Témakör</label>
          <input type="text" placeholder="Témakör megnevezése" />
        </div>

        <div className={Style.field}>
          <label>Feladás napja</label>
          <input type="date" />
        </div>

        <div className={Style.field}>
          <label>Határidő</label>
          <input type="date" />
        </div>

        <div className={`${Style.field} ${Style.fullWidth}`}>
          <label>Feladat bővebb leírása</label>
          <textarea rows="3"></textarea>
        </div>

        <div className={`${Style.field} ${Style.radioGroup}`}>
          <p>Típus:</p>
          <label>
            <input type="radio" name="tipus" id="elso" /> Szóbeli
          </label>
          <label>
            <input type="radio" name="tipus" id="masodik" /> Írásbeli
          </label>
        </div>

        <button type="submit" className={Style.submitBtn}>Felvétel</button>
      </form>
    </div>
  );
};

export default Form;