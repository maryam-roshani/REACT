import React from 'react'
import { TaskContext } from '../context/TaskContext';

const Detail = () => {
    const {tasks} = useContext(TaskContext);
    const myTasks = tasks
    return (
        <div>Detail</div>
    )
}

export default Detail