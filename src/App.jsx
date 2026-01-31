import { useState } from 'react'

import Form from './modules/Form'

function App() {
  const [data, setData] = useState([])

  const addData = (actualData) =>{
    setData((prevData) => [...prevData, actualData])
  }
  console.log(data)
  return (
    <>
      <Form upToApp={addData}/>
    </>
  )
}

export default App
