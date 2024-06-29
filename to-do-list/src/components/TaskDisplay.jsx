import React from 'react'
import './taskdisplay.css'
import { TaskContext } from '../context/TaskContext';
import { useContext, useState } from 'react';

const TaskDisplay = (props) => {
    const {task} = props;
    const {timeDistance} = useContext(TaskContext)
    const time = task.time_added

    return (
        <div className="bg-slate-50 flex justify-content-center align-items-center w-full h-full">
            <div className="w-96 h-64 rounded-md p-5 m-auto relative" style={{ backgroundColor: task.status == "done" ? "#7dd3fc" : (task.status == "cancelled" ? "#dfe6ed" : "white") }} >
                <h3 className="text-xl font-medium mb-5 text-left ps-3">{task.title}</h3>
                <p className="p-3 mt-3">{task.text}</p>
                <span className= "absolute rotate-45 top-5 -right-11 text-lg trapezoid" style={{ borderBottomColor: task.priority == "high" ? " rgb(23, 130, 23)" : (task.priority == "medium" ? "rgb(162, 162, 27)" : "rgb(185, 25, 25)") }}><p className="top-2 left-4 text-white absolute">{task.priority}</p></span>
                <p className="right-0 p-3 my-2 text-xs bottom-0 absolute">{timeDistance(time)}</p>
            </div>
        </div>
    )
}

export default TaskDisplay