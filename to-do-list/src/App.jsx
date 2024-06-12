import { useState } from 'react'
import './App.css'
import Home from './components/home/home'
import LoginSignup from './components/LoginSignup'

function App() {

  return (
    <>
      <div className='h-full'>
        < Home />
        <LoginSignup />
      </div>
    </>
  )
}

export default App
