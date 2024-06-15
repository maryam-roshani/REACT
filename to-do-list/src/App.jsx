import './App.css'
import Home from './components/home/home'
import LoginSignup from './components/loginSignup/LoginSignup'
import Detail from './components/TaskDisplay'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './pages/Task'



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
