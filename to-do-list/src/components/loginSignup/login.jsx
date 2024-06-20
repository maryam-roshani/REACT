import React from 'react'
import { useState } from 'react';

const ExampleInput = (props) => {
    return (
      <input type= {props.type} value = {props.value} className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.name} onChange={props.onChange} />
    )
}

const Login = () => {
    const [inputField , setInputField] = useState({
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
            <h1 className='mb-3 mx-1 text-xl font-semibold '>Login</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                  <ExampleInput type = "email" name= "email" value= {inputField.email} onChange= {inputsHandler}/>
                  <ExampleInput type = "password" name= "password" value= {inputField.password} onChange= {inputsHandler} />
                  <div className="">Lost Password? <span className='font-semibold text-xs cursor-pointer'>Click Here!</span></div>
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={() =>{handleSubmit()}}>Continue</button>
                <div className="">No account? <span className='font-bold cursor-pointer text-red-600' onClick={()=>{setAction("Sign Up")}}>Sign Up </span></div>
              </form> 
            </div>
          </div>
        </div>
    )
}


export default LoginSignup

