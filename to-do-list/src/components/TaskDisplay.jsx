import React from 'react'

const TaskDisplay = (props) => {
    const {task} = props;
    return (
        <div className="w-96 h-48 rounded-md bg-white p-5">
            <h3 className="text-xl font-medium mb-5 text-center">{task.title}</h3>
        </div>
    )
}

export default TaskDisplay