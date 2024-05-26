import React from 'react'
import data from './dropDownData.js'
import girl from '../../assets/girl.jpg'
import { useState } from 'react'
import './dropdown.css'
const Dropdown = () => {
    const [menu, setMenu] = useState(false);

    // Toggle function to handle the navbar's display
    const handleMenu = () => {
      setMenu(!menu);
    };
  return (
    <div>
        <img src={girl} onClick={handleMenu}  alt="" className='w-16 h-16 rounded-full object-cover relative' />
        {menu ? 
        <ul className='absolute items-list border-2 rounded-md top-20 pt-3'>
            {data.map(item => (
            <li
                key={item.id}
                className='p-1 hover:bg-slate-200 rounded-xl m-1 cursor-pointer duration-300 hover:text-black navItem text-sm text-slate-700'
            >
                {item.text}
            </li>
            ))}
        </ul>:<></>}
    </div>
  )
}

export default Dropdown