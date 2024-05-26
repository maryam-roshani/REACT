import React from 'react'
import data from './dropDownData.js'
import girl from '../../assets/girl.jpg'
import './dropdown.css'
const Dropdown = () => {
  return (
    <div>
        <img src={girl}  alt="" className='w-24 h-24 rounded-full object-cover relative' />
        <ul className='absolute items-list border-2 left-2 rounded-md top-28 pt-3'>
            {data.map(item => (
            <li
                key={item.id}
                className='p-1 hover:bg-slate-200 rounded-xl m-1 cursor-pointer duration-300 hover:text-black navItem text-sm text-slate-700'
            >
                {item.text}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown