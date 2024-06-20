import React from 'react'
import { useState } from 'react';

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    return (
        <div className="p-6 bg-blue-400">
          <div className="flex justify-content-center bg-white rounded-lg w-1/3 m-auto">
            <div className="gap-2 mt-3 rounded-md p-5 w-full">
            <h1 className='mb-3 mx-1 text-xl font-semibold '>{action}</h1>
              <form className='grid gap-3'>
                <div className="grid gap-7">
                  {action==="Login"?<div></div>:<input type="text" className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your Name"/>}
                  <input type="email" className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <input type="password" className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputPassword1" placeholder="Password"/>
                  {action==="Sign Up"?<div></div>:<div className="">Lost Password? <span className='font-semibold text-xs cursor-pointer'>Click Here!</span></div>}
                </div>
                <button className='border-none p-3 text-lg mb-2 bg-red-500 rounded-md font-semibold text-white' onClick={() =>{setName()}}>Continue</button>
                {action==="Login"?<div></div>:<p className="">Already have an account? <span className='font-bold text-red-600 text-lg cursor-pointer' onClick={()=>{setAction("Login")}}>Login </span>Here</p>}
                {action==="Sign Up"?<div></div>:<div className="">No account? <span className='font-bold cursor-pointer text-red-600' onClick={()=>{setAction("Sign Up")}}>Sign Up </span></div>}
                {action==="Login"?<div></div>:<div className="">
                  <div className="flex gap-2">
                    <input type="checkbox" className="" id="exampleCheck1"/>
                    <p className='text-sm'>By continuing, i agree to the terms of use & privacy policy.</p>
                  </div>
                </div>}
              </form>
            </div>
          </div>
        </div>
    )
}


export default LoginSignup

