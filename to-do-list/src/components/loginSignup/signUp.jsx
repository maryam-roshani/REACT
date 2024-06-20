import React from 'react'
import { useState } from 'react';
import ExampleInput from './ExampleInput';

const Signup = () => {

    const [inputField , setInputField] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField)
    }    
  
    return (
        <div className="p-6 bg-blue-400">
          <div className="flex justify-content-center bg-white rounded-lg w-1/3 m-auto">
            <div className="gap-2 mt-3 rounded-md p-5 w-full">
            <h1 className='mb-3 mx-1 text-xl font-semibold '>Sign Up</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                    <ExampleInput type = "text" name= "name" value= {inputField.name} onChange= {inputsHandler}/>
                    <ExampleInput type = "email" name= "email" value= {inputField.email} onChange= {inputsHandler}/>
                    <ExampleInput type = "password" name= "password" value= {inputField.password} onChange= {inputsHandler} />
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={() =>{setName()}}>Continue</button>
                <p className="">Already have an account? <span className='font-bold text-red-600 text-lg cursor-pointer' onClick={()=>{setAction("Login")}}>Login </span>Here</p>}
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


export default LoginSignup