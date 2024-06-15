import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'
import {useParams} from 'react-router-dom';
import TaskDisplay from '../components/TaskDisplay.jsx';
// import Breadcrum from '../Components/breadcrum.jsx';


const Task = () => {
  const {tasks} = useContext(TaskContext);
  const myTasks = tasks

  const {taskId} = useParams()
  console.log(taskId)

  const task = myTasks.find((e) =>
      e.id === Number(taskId)
  )

  return (
    <div>
      {/* <Breadcrum task={task} /> */}
      <TaskDisplay task={task} />
      <h1>hello</h1>
    </div>
  )
}

export default Task