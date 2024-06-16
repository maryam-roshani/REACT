import React from 'react'

const TaskDisplay = (props) => {
    const {task} = props;
    return (
        <div className="bg-slate-50 flex justify-content-center align-items-center w-full h-full">
            <div className="w-96 h-48 rounded-md bg-white p-5 m-auto">
                <h3 className="text-xl font-medium mb-5 text-center">{task.title}</h3>
            </div>
        </div>
    )
}

export default TaskDisplay