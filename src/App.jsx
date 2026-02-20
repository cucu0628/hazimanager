import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Form from './modules/Form'
import TopBar from './modules/TopBar'
import List from './modules/List'

function App() {
  const [data, setData] = useState([])

  const loadData = async () => {
    const res = await fetch("http://localhost/22c-adam/backend/index.php/keres");
    const data = await res.json();
    setData(data);
  };

  const deletData = async (id) => {
    const del = await fetch("http://localhost/22c-adam/backend/index.php/del", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
      })
    })
    const torol = await del.json();
    if (torol) {
      setData([]);
      loadData();
      Swal.fire({
        theme: "dark",
        title: "Sikeres törlés",
        icon: "success",
      });
    }else{
      Swal.fire({
        theme: "dark",
        title: "Sikertelen törlés",
        icon: "error",
      });
    }

  }

  useEffect(() => {
    loadData();
  }, []);

  const addData = () => {
    setData([]);
    loadData();
  }
  console.log(data)
  return (
    <>
      <TopBar />
      <Form upToApp={addData} />
      <List adat={data} deletData={deletData} />
    </>
  )
}

export default App
