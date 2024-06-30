import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="w-full h-12 bg-slate-300 p-2 flex align-items-center justify-content-between">
        <Link to={`/`}><h3 className="my-auto px-6 text-lg font-semibold">home</h3></Link>
        <div className="flex my-auto justify-conten-right">
        <Link to={`/login`}><h3 className=" text-lg font-semibold">Login</h3></Link>
        <Link to={`/signup`}><h3 className=" text-lg font-semibold">Sign Up</h3></Link>
        </div>
    </div>
  )
}

export default Navbar