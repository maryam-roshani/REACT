import React from 'react'
import data from '../../assets/tasksData'
import {Link} from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaTrashCan } from "react-icons/fa6";


const TaskProp = (props) => {
  return (
   <>
      <h4 className="text-base font-medium gap-7 col-span-1">{props.content}</h4>
   </>
  )
}

const TaskHeader = (props) => {
  return (
    <>
       <h3 className="text-lg font-medium col-span-1 cursor-pointer gap-7">{props.content}</h3>
    </>
  )
}


const TaskItem = (props) => {
  return (
    <>
      <TaskProp content = {props.id} />
      <Link to={`/task/${props.id}`} key={props.id}><TaskProp content = {props.title} /></Link>
      <TaskProp content = {props.priority} />
      <TaskProp content = {props.status} />
      <div className='relative'>
      <FaTrashCan className='absolute right-3' onClick={props.onDelete} />
      </div>
    </>
  )
}
const d1 = new Date(2024, 5, 10, 10, 33)
const d2 = new Date(2024, 5, 15, 22, 23)
const d3 = new Date(2024, 5, 14, 12, 33)
let Initial_Tasks = [
    { id: 1, title: "task-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "high", status: "done", time_added: d1 },
    { id: 2, title: "task-2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "medium", status: "cancelled", time_added: d2 },
    { id: 3, title: "task-3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "low", status: "in progress...", time_added: d3 }
]


const Home = () => {
  const [filter, setFilter] = useState('')
  const [todos, setTodos] = useState(Initial_Tasks);
  let ln = todos.length
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputText, setInputText] = useState("");
  const [inputPriority, setInputPriority] = useState("");






  // const createHeight = useRef()
  // const [ create, setCreate ] = useState(false)




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
    if (!inputTitle || !inputText || !inputPriority) {
      alert("fill data");
    }
    else {
      const allInputData = {
        id: ln+1,
        title: inputTitle,
        text: inputText,
        priority: inputPriority,
        status: "in progress...",
        time_added: new Date()
      };
      setTodos([...todos, allInputData]);
      console.log(todos)
    }
  }
  const options = [
     { label: "high", value: "high"},
     { label: "medium", value: "medium"},
     { label: "low", value: "low"}
  ]

  const handleDelete = (id) => {
    setTodos(todos => todos.filter((item) => item.id !== id));
  };

  function toggleIsCreate() {
    if (create === true) {
        setCreate(false);
        console.log(create)
    } else {
        setCreate(true);
        console.log(create)
    }
  }

  const narrowItems = (item) => {
    return item.filter === ""
      ? item
      : item.id == filter | (typeof item.title == "string" && item.title.indexOf(filter) > -1)
      | (typeof item.priority == "string" && item.priority.indexOf(filter) > -1) | (typeof item.status == "string" && item.status.indexOf(filter) > -1) 
  }

  const handleSort1 = () => {
    const data2 = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
    return data2
  }

  const handleSort2 = () => {
    const data2 = data.sort((a, b) => (a.title > b.title) ? 1 : -1)
    return data2
  }

  const handleSort3 = () => {
    const data2 = data.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    return data2
  }

  const handleSort4 = () => {
    const data2 = data.sort((a, b) => (a.status > b.status) ? 1 : -1)
    return data2
  }

  return (
    <div className="h-screen flex justify-content-center align-items-center bg-slate-100">
        <div className='w-full h-full p-5'>
          <div className="rounded-md p-3 bg-white m-auto w-2/3">
            <div className="block my-3">
              <input type="text" onChange={(e) => setFilter(e.target.value)} className='w-full p-2 border-slate-400 rounded-md bg-slate-50' placeholder='search what you want ...'/>
            </div>
            <ul className='list-none w-full'>
              <div className='grid grid-cols-5 rounded-md p-3 w-full'>
                <TaskHeader content="id" onClick = {handleSort1} />
                <TaskHeader content="title" onClick = {handleSort2} />
                <TaskHeader content="priority" onClick = {handleSort3} />
                <TaskHeader content="status" onClick = {handleSort4} />
                <TaskHeader content="" />
              </div>
              {todos.filter(narrowItems).map((item, i) => 
                  <li index={i} key={item.id} className='grid grid-cols-5 rounded-md p-3'>
                    <TaskItem id = {item.id} title={item.title} priority={item.priority} status={item.status} onDelete={() => handleDelete(item.id)} />
                  </li>
              )}
            </ul>
            <button className="w-full p-3 text-lg bg-purple-700 text-zinc-50 rounded-lg mt-12" onClick={toggleIsCreate}>Add New Task</button>
          </div>
          {create? <div className="w-96 h-64 rounded-md flex justify-content-center mt-5" > 
                      <form onSubmit={handleSubmit} className='' >
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
                    </div> : <div></div>}
        </div>
      </div>
  )
}

export default Home