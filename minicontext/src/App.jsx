import UserContextProvider from './context/UserContextProvider'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
    
      <h1>Hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
