import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Form from './modules/Form'
import TopBar from './modules/TopBar'
import List from './modules/List'

function App() {
  const [data, setData] = useState([])

  const loadData = async () => {
    const res = await fetch("http://localhost:8080/keres");
    const data = await res.json();
    setData(data);
  };

  const deletData = async (id) => {
    const del = await fetch("http://localhost:8080/del", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
      })
    })

    const torol = await del.json();
    if (torol) {
      setData((prevData) => prevData.filter(item => item.id !== id));
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

  const addData = (actualData) => {
    setData((prevData) => [...prevData, actualData])
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
