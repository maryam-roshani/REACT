import React from 'react'
import { useState } from 'react';
import ExampleInput from './ExampleInput';
import {Link} from 'react-router-dom';


const Signup = () => {

    const [inputField , setInputField] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }
    
    const submitButton = (e) =>{
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
            <h1 className='mb-3 mx-1 text-xl font-semibold '>Sign Up</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                    <ExampleInput type = "text" name= "name" value= {inputName} onChange= {nameHandler}/>
                    <ExampleInput type = "email" name= "email" value= {inputEmail} onChange= {emailHandler}/>
                    <ExampleInput type = "password" name= "password" value= {inputPassword} onChange= {passwordHandler} />
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={submitButton}>Continue</button>
                <p className="">Already have an account? <Link to={`/login`}><span className='font-bold text-red-600 text-lg cursor-pointer' >Login </span></Link>Here</p>
                <div className="">
                  <div className="flex gap-2">
                    <input type="checkbox" className="" id="exampleCheck1"/>
                    <p className='text-sm'>By continuing, i agree to the terms of use & privacy policy.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}


export default Signup