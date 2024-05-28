import React from 'react'
import { useState } from 'react'
import data from './accordionData';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";


const Accordion = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
        };
  return (
    <div className='p-3 w-64'>
        <div className="w-full p-2 rounded-md bg-slate-100" >
            <div className='flex justify-between align-items-center' onClick={handleMenu}>
                <p>Items</p>
                {
                    menu ? <FaCaretUp className='my-auto' /> : <FaCaretDown className='my-auto' />
                }
            </div>
        </div>
        {menu ? 
        <ul className='items-list border-2 rounded-md pt-3'>
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

export default Accordion