import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import data from './NavbarData.js'
import './navbar.css'


//  accordionitem component
const NavbarItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
       </button>
   
        <div ref={contentHeight} className="answer-container" style={
             isOpen
             ? { height: contentHeight.current.scrollHeight }
             : { height: "0px" }
            }>
         <p className="answer-content">{answer}</p>
        </div>
      </div>
     )
   }

// main Accordion component
const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='container'>
       {data.map((item, index) => (
       <NavbarItem
        key={index}
        question={item.question}
        answer={item.answer}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
   
   export default Navbar;