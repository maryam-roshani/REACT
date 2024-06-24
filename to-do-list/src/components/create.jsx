import React from 'react'
import { useState } from 'react'

const OptionSelect = (props) => {
  <option className='w-48 h-12 bg-slate-300' value={props.value}>{props.value}</option>
}

const Create = () => {
  const [value, setValue] = React.useState('priority');
  const handleChange = (event) => {
     setValue(event.target.value);
  };


  const [formData, setFormData] = useState({})
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    const dataToSubmit = { 
      ...formData 
    };
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
    <div>
       <form onSubmit={handleSubmit}>
         <label htmlFor="my-input">Title</label> 
         <input id="my-input" type="text" name="myInput" onChange={handleInputChange} />
         <select value={value} onChange={handleInputChange}>

           <OptionSelect value= "high" />
           <OptionSelect value= "medium" />
           <OptionSelect value= "low" />

         </select>
         <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Create