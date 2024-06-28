import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white p-2 flex align-items-center justify-content-between">
        <Link to={`/`}><h3 className="my-auto px-6">home</h3></Link>
        <div className="flex justify-around w-1/3 my-auto">
        <Link to={`/login`}><h3 className="">Login</h3></Link>
        <Link to={`/signup`}><h3 className="">Sign Up</h3></Link>
        </div>
    </div>
  )
}

export default Navbar