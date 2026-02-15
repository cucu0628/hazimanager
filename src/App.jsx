import { useState, useEffect } from 'react'

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
      <List adat={data} />
    </>
  )
}

export default App
