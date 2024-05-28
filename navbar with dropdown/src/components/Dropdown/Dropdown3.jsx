import React from 'react'
import data from './dropDownData.js'
import girl from '../../assets/girl.jpg'
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import './dropdown.css'
const Dropdown = () => {
    const [menu, setMenu] = useState(false);

    // Toggle function to handle the navbar's display
    const handleMenu = () => {
      setMenu(!menu);
    };
  return (
    <div className='p-3'>
        <div className="w-64 p-2 flex justify-between rounded-md align-items-center bg-slate-100" onClick={handleMenu} >
            <p>Items</p>
            {
                menu ? <FaAngleUp className='my-auto' /> : <FaAngleDown className='my-auto' />
            }
        </div>
        {menu ? 
        <ul className='absolute items-list border-2 rounded-md top-14  w-64 pt-3'>
            {data.map(item => (
            <li
                key={item.id}
                className='p-1 hover:bg-slate-200 rounded-lg m-1 cursor-pointer duration-300 hover:text-black navItem text-sm text-slate-700'
            >
                {item.text}
            </li>
            ))}
        </ul>:<></>}
    </div>
  )
}

export default Dropdown