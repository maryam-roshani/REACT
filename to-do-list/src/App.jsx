import { useState } from 'react'
import './App.css'
import Home from './components/home/home'
import LoginSignup from './components/loginSignup/LoginSignup'
import Detail from './components/detail'

function App() {

  return (
    <>
      <div className='h-full'>
        < Home />
        <LoginSignup />
        <Detail />
      </div>
    </>
  )
}

export default App
