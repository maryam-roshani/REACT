import React from 'react'
import { useState } from 'react'

const OptionSelect = (props) => {
  <option className='w-48 h-12 bg-slate-300' value={props.value}>{props.value}</option>
}

const Create = () => {
    const [value, setValue] = useState('')
    const [formData, setFormData] = useState({})
    const handleSubmit = (event) => { 
      event.preventDefault(); 
      const dataToSubmit = { 
        ...formData 
      };
    }
    const options = [
       { label: "high", value: "high"},
       { label: "medium", value: "medium"},
       { label: "low", value: "low"}
    ]
    function handleSelect(event) {
        setValue(event.target.value)
    }
    const handleInputChange = (event) => { 
        const { target } = event; 
        const { name, value } = target;
        setFormData({
          ...formData, 
          [name]: value 
        }); 
      }

    return (
        <div className="bg-slate-50 flex justify-content-center align-items-center w-full h-full">
            <div className="w-96 h-64 rounded-md flex justify-content-center mt-5" >
                <form onSubmit={handleSubmit} className='block'>
                    <label htmlFor="my-input">Title</label> 
                    <input id="my-input" type="text" name="myInput" onChange={handleInputChange} className='p-3 w-full rounded-md' />
                    <div className="w-1/2 p-3 rounded-md border-1">
                   <h4>Priority</h4>
                   <select value={value} onChange={handleSelect} className='block text-lg'>
                      {options.map(option => (
                         <option value={option.value}>{option.label}</option>
                      ))}
                   </select>
                </div>
                    <button type="submit" className='block'>Submit</button>
                </form>
           </div>
        </div>
    )
}

export default Create
