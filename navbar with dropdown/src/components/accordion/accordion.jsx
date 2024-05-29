import React from 'react';
import { useState } from 'react';
import data ,{data2} from './accordionData';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";


const AccordionItem = ({text}) => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div className='flex justify-between align-items-center' onClick={handleMenu}>
            <p>{text}</p>
            {
                menu ? <FaCaretUp className='my-auto' /> : <FaCaretDown className='my-auto' />
            }
            </div>
            {menu ? 
                <ul className='rounded-md pt-3'>
                    {data.map(item => (
                    <li
                        key={item.id}
                        className='p-1 hover:bg-slate-200 rounded-lg m-1 cursor-pointer duration-300 hover:text-black navItem text-sm text-slate-700'
                    >
                        {item.text}
                    </li>
                ))}
                </ul>:<></>
            }
        </>
    )
}


const Accordion = () => {
  return (
    <div className='p-3 w-64'>
        <div className="w-full p-2 rounded-md bg-slate-100" >
            {data2.map(item => (
                <AccordionItem text = {item.text} />
            ))}
        </div>
        
    </div>
  )
}

export default Accordion