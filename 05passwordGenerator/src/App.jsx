import { useCallback, useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

   const generatepassword =  useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i<= length; i++){
      let letter = str.charAt(Math.floor(Math.random()*str.length+1))
      pass += letter
    }
    setPassword(pass)

   },[length,numallowed,charallowed,setPassword])

   const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    // important *************************************************
    window.navigator.clipboard.writeText(password)
   },[password])

useEffect(()=>{
  generatepassword()
},[length,numallowed,charallowed,generatepassword])


  return (
    <>
    <div className=' flex justify-center mt-8 w-full h-screen text-center'>
    <div className=' bg-gray-700 w-1/2 max-w-md h-min p-5 rounded-2xl '>
    <h1 className='text-white mb-4'>Password generator</h1>
    <div className=' w-full rounded-lg overflow-hidden'>
      <input type="text" 
            placeholder='password' 
            className='p-1  outline-0 rounded-l-lg w-5/6'
            value={password} 
            readOnly
            ref={passwordRef}
      />
      <button 
      onClick={copytoclipboard}
      className='bg-blue-600  p-1 max-w-max rounded-r-lg text-white'>copy</button>
    </div>
        <div className='flex justify-between mt-6 text-orange-500'>
          <div>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='mr-1 cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >length:{length}</label>
          </div>
          <div>
            <input type="checkbox" 
                  defaultChecked = {numallowed}
                  className='mr-1' 
                  onChange={()=>{
              setNumallowed((prev)=> !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            <input type="checkbox" 
                  defaultChecked = {charallowed}
                  className='mr-1' 
                  onChange={()=>{
              setCharallowed((prev)=> !prev);
            }}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
