import { useState } from 'react'

import Form from './modules/Form'
import TopBar from './modules/TopBar'

function App() {
  const [data, setData] = useState([])

  const addData = (actualData) =>{
    setData((prevData) => [...prevData, actualData])
  }
  console.log(data)
  return (
    <>
    <TopBar />
      <Form upToApp={addData}/>
    </>
  )
}

export default App
