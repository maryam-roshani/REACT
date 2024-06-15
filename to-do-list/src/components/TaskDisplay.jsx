import React from 'react'
import { TaskContext } from '../context/TaskContext';

const TaskDisplay = (props) => {
    const {task} = useContext(TaskContext);
    return (
        <div className="w-96 h-48 rounded-md"></div>
    )
}

export default TaskDisplay