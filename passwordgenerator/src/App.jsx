import React from 'react'
import { useState , useCallback , useEffect} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumbersAllowed] = useState(false) 
   const [charactersAllowed , setCharactersAllowed] = useState(false) 
    const [password , setPassword] = useState("")
    
    const PasswordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charactersAllowed) str += "/.,;'[]-)(*&^%$#@!~?><]|}"

      for(let i = 1; i<= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)

      }

      setPassword(pass)

    } , [length, numberAllowed, charactersAllowed, setPassword])

  useEffect(() => {PasswordGenerator()} , [length, numberAllowed, charactersAllowed, PasswordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'><h1 className='text-white text-center my-3' ><br /><b>Password Generator</b></h1><br />
      <div className='flex shadow rounded-lg overflow-hidden mb-5' >
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-blue-300'
        placeholder='password'
        readOnly />
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-l'>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumbersAllowed((prev) => !prev);
          }}
         />
          <label htmlFor="numberInput"> <pre> Numbers</pre></label>

          

        </div>

        <div className='flex items-center gap-x-l'>
          <input type="checkbox"
          defaultChecked = {charactersAllowed}
          id='characterInput'
          onChange={() => {
            setCharactersAllowed((prev) => !prev);
          }}
         />
          <label htmlFor="characterInput"> <pre> Characters</pre></label>

          

        </div>
      </div>
     </div>
    </>
  )
}

export default App
