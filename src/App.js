import React, {useEffect, useState} from 'react'

function App() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log(date)
      setTimeout(() =>{setDate( new Date())}, 5000)
  },[date])
  return (
    <div>
 time:{date.toLocaleTimeString()}

    </div>
  )
}

export default App