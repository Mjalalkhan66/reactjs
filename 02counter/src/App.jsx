import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
    //let counter = 5

    const addValue = () => {            
     setCounter(counter + 1)
    }

    const removeValue = () => {
      setCounter(counter - 1)
    }
  return (
    <>
     <h1>Conter with react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value: {counter}</button>
     <br /><br />
     <button onClick={removeValue}>Remove value: {counter}</button>
     <p>Updating counter in different places on single click : {counter}</p>
    </>
  )
}

export default App
