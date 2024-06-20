import React from 'react'
import { useState } from 'react';

const ExampleInput = (props) => {
    return (
      <input type= {props.type} value = {props.value} className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.name}/>
    )
}

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    return (
        <div className="p-6 bg-blue-400">
          <div className="flex justify-content-center bg-white rounded-lg w-1/3 m-auto">
            <div className="gap-2 mt-3 rounded-md p-5 w-full">
            <h1 className='mb-3 mx-1 text-xl font-semibold '>Login</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                  <ExampleInput type = "email" name= "email" value= {email}/>
                  <ExampleInput type = "password" name= "password" value= {password} />
                  <div className="">Lost Password? <span className='font-semibold text-xs cursor-pointer'>Click Here!</span></div>
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={() =>{setName()}}>Continue</button>
                <div className="">No account? <span className='font-bold cursor-pointer text-red-600' onClick={()=>{setAction("Sign Up")}}>Sign Up </span></div>
              </form> 
            </div>
          </div>
        </div>
    )
}


export default LoginSignup

