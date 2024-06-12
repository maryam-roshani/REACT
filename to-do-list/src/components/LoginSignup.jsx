import React from 'react'
import { useState } from 'react';

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
  
    return (
        <div className="py-3">
          <div className="flex justify-content-center">
            <div className="gap-2 mt-3 rounded-md py-4 px-3">
            <h1 className='mb-3 mx-1 h4'>{action}</h1>
              <form className='grid gap-2'>
                <div className="grid gap-3">
                  {action==="Login"?<div></div>:<input type="text" className="py-2 shadow-sm rounded-none" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your Name"/>}
                  <input type="email" className="py-2 shadow-sm rounded-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <input type="password" className="py-2 shadow-sm rounded-none" id="exampleInputPassword1" placeholder="Password"/>
                  {action==="Sign Up"?<div></div>:<div className="">Lost Password? <span className='font-semibold text-xs'>Click Here!</span></div>}
                </div>
                <button className=' mx-2 border-none py-2 my-2'>Continue</button>
                {action==="Login"?<div></div>:<p className="">Already have an account? <span className='font-bold' onClick={()=>{setAction("Login")}}>Login </span>Here</p>}
                {action==="Sign Up"?<div></div>:<div className="">No account? <span className='font-bold' onClick={()=>{setAction("Sign Up")}}>Click Here! </span></div>}
                {action==="Login"?<div></div>:<div className="">
                  <div className="">
                    <input type="checkbox" className="" id="exampleCheck1"/>
                    <p className=''>By continuing, i agree to the terms of use & privacy policy.</p>
                  </div>
                </div>}
              </form>
            </div>
          </div>
        </div>
    )
}


export default LoginSignup