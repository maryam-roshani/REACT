import React from 'react'

const TaskDisplay = (props) => {
    const {task} = props;
    return (
        <div className="bg-slate-50 flex justify-content-center align-items-center w-full h-full">
            <div className="w-96 h-48 rounded-md bg-white p-5 m-auto">
                <h3 className="text-xl font-medium mb-5 text-left ps-3">{task.title}</h3>
                <p className="p-3 mt-3">{task.text}</p>
                <span className="bg-slate-100 p-3">{task.priority}</span>
            </div>
        </div>
    )
}

export default TaskDisplay