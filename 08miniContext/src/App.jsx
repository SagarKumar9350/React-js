import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Profile from './components/Profile'
import Entry from './components/Entry'
// import Login from './components/Login'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Hello Everyone</h1>
        {/* <Login/> */}
        <Entry/>
        <Profile/>

      </UserContextProvider>
    </>
  )
}

export default App
