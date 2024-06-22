import React from 'react'
import './taskdisplay.css'
import { TaskContext } from '../context/TaskContext';
import { useContext, useState } from 'react';


function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

const TaskDisplay = (props) => {
    const {task} = props;
    const {timeDistance} = useContext(TaskContext)
    const [currentDate, setCurrentDate] = useState(getDate());
    return (
        <div className="bg-slate-50 flex justify-content-center align-items-center w-full h-full">
            <div className="w-96 h-48 rounded-md bg-white p-5 m-auto relative">
                <h3 className="text-xl font-medium mb-5 text-left ps-3">{task.title}</h3>
                <p className="p-3 mt-3">{task.text}</p>
                <span className=" absolute rotate-45 top-5 -right-11 text-lg trapezoid"><p className="top-2 left-4 absolute">{task.priority}</p></span>
                <p className="text-right p-3 my-2">{currentDate}</p>
            </div>
        </div>
    )
}

export default TaskDisplay