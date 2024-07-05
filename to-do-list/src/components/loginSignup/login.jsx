import React from 'react'
import { useState } from 'react';
import ExampleInput from './ExampleInput';
import {Link} from 'react-router-dom';

const Login = () => {
    const [inputEmail , setInputEmail] = useState('')
    const [inputPassword , setInputPassword] = useState('')


    const emailHandler = (e) =>{
        setInputEmail( e.target.value )
        e.target.value = ""
    }

    const passwordHandler = (e) =>{
      setInputPassword( e.target.value )
      e.target.value = ""
  }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = "email : " + inputEmail
        const text1 = "password : " + inputPassword
        console.log(text + '\n' + text1)
        alert(text + '\n' + text1)
    }    
  
    return (
        <div className="p-6 bg-blue-400">
          <div className="flex justify-content-center bg-white rounded-lg w-1/3 m-auto">
            <div className="gap-2 mt-3 rounded-md p-5 w-full">
            <h1 className='mb-3 mx-1 text-xl font-semibold '>Login</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                  <ExampleInput type = "email" name= "email" value= {inputEmail} onChange= {emailHandler}/>
                  <ExampleInput type = "password" name= "password" value= {inputPassword} onChange= {passwordHandler} />
                  <div className="">Lost Password? <span className='font-semibold text-xs cursor-pointer'>Click Here!</span></div>
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={handleSubmit}>Continue</button>
                <div className="">No account? <Link to={`/signup`}><span className='font-bold cursor-pointer text-red-600'>Sign Up </span></Link></div>
              </form> 
            </div>
          </div>
        </div>
    )
}


export default Login

