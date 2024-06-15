import { useState } from 'react'
import './App.css'
import Home from './components/home/home'
import LoginSignup from './components/loginSignup/LoginSignup'
import Detail from './components/TaskDisplay'
import TaskCategory from './Pages/TaskCategory'
import { BrowserRouter } from 'react-router-dom'




function App() {

  return (
    <>
      <BrowserRouter>
      <div className='h-full'>
        < Home />
        <LoginSignup />
        <Detail />
      </div>
      <Routes>
        <Route path='/task' element={<Task/>}>
          <Route path=':taskId' element={<Task/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
