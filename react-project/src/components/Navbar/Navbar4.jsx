import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { DiVim } from 'react-icons/di';
import data2 from './NavbarData';

const NavbarItem = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div role="button" onClick={() => setIsOpen((prev) => !prev)} className="item flex justify-between items-center p-3 w-32 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
            <span >item 1</span>
            {!isOpen ? (
                <BsChevronDown/>
            ):(
                <BsChevronUp />
            )}
        </div>
        {isOpen ? (<div>
            {data2.map((item, index) => (
                <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                    {item}
                </div>
            ))}
        </div>):<></>}
        </>
    )
}

const Navbar = () => {
  return (
    <div>
        <div className="relative flex w-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mx-auto my-3">
            <nav className="flex gap-1 p-2 font-sans text-lg font-normal text-blue-gray-700 w-full justify-around">
                <div role="button" className="item flex justify-between items-center p-3 w-32 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                    <span>item 1</span>
                    <BsChevronDown/>
                </div>
                <div className="hidden">
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem1
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem2
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem3
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem4
                    </div>
                </div>
                <div role="button" className="item flex justify-between items-center p-3 w-32 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                    <span>item 2</span>
                    <BsChevronDown />
                </div>
                <div className="hidden">
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem1
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem2
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem3
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem4
                    </div>
                </div>
                <div role="button" className="item flex justify-between items-center p-3 w-32 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                    <span>item 3</span>
                    <BsChevronDown />
                </div>
                <div className="hidden">
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem1
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem2
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem3
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem4
                    </div>
                </div>
                <div role="button" className="item flex justify-between items-center p-3 w-32 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                    <span>item 4</span>
                    <BsChevronDown />
                </div>
                <div className="hidden">
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem1
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem2
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem3
                    </div>
                    <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-300 hover:bg-opacity-80 hover:text-blue-800 hover:font-medium">
                        subItem4
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavbarItem