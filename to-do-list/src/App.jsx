import './App.css'
import Home from './components/home/home'
import Login from './components/loginSignup/login'
import Signup from './components/loginSignup/signUp'
import Create from './components/create1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './pages/Task'
import Navbar from './components/navbar'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/task' element={<Task/>}>
          <Route path=':taskId' element={<Task/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
