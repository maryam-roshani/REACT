import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'
import {useParams} from 'react-router-dom';
// import Breadcrum from '../Components/breadcrum.jsx';


const Task = () => {
  const {tasks} = useContext(TaskContext);
  const myTasks = tasks

  const {taskId} = useParams()

  const task = myTasks.find((e) =>
      e.id === Number(taskId)
  )

  return (
    <div>
      {/* <Breadcrum task={task} /> */}
      <TaskDisplay task={task} />
    </div>
  )
}

export default Task