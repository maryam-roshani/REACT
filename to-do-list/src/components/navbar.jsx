import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white p-2 flex align-items-center justify-content-between">
        <h3 className="my-auto px-6">home</h3>
        <div className="flex justify-around w-1/3 my-auto">
            <h3 className="">Login</h3>
            <h3 className="">Sign Up</h3>
        </div>
    </div>
  )
}

export default Navbar