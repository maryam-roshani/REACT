import React from 'react'
import { useState } from 'react'


const Create = () => {
    const {tasks} = useContext(TaskContext);
    const myTasks = tasks
    ln = myTasks.length()
    const [inputTitle, setInputTitle] = useState(""); 
    const [inputText, setInputText] = useState("");
    const [inputPriority, setInputPriority] = useState("");
    const [items, setitems] = useState([
       {
         name: "Default Task",
         text: "Default Text",
         priority: "medium",
         status: "in progress...",
         time_added: new Date()
       },
    ]);

    const handleInputTitle = (e) => {
     setInputTitle(e.target.value);
    };
    const handleInputText = (e) => {
     setInputText(e.target.value);
    };
    const handleInputPriority = (e) => {
        setInputPriority(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!inputTitle || !inputText) {
        alert("fill data");
      }
      else {
        const allInputData = {
          id: ln+1,
          title: inputTitle,
          text: inputText,
          priority: inputPriority,
          time_added: new Date()
        };
      setitems([allInputData, ...items]);
      }
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
                    <input id="my-input" type="text" name="Title" onChange={handleInputTitle} value={inputTitle} className='p-3 w-full rounded-md' />
                    <label htmlFor="my-textarea">Text</label> 
                    <textarea id="my-textarea" name="Text" onChange={handleInputText} value={inputText} className='p-3 w-full rounded-md' />
                    <div className="w-1/2 p-3 rounded-md border-1">
                        <h4>Priority</h4>
                        <select name="Priority" onChange={handleInputPriority} value={inputPriority} className='block text-lg'>
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
