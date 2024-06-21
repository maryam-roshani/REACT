import React from 'react'
import data from '../../assets/tasksData'
import {Link} from 'react-router-dom';


const TaskProp = (props) => {
  return (
   <>
      <h4 className="text-base font-medium col-span-1">{props.content}</h4>
   </>
  )
}

const TaskHeader = (props) => {
  return (
    <>
       <h3 className="text-lg font-medium col-span-1">{props.content}</h3>
    </>
  )
}


const TaskItem = (props) => {
  return (
    <>
      <TaskProp content = {props.id} />
      <TaskProp content = {props.title} />
      <TaskProp content = {props.priority} />
      <TaskProp content = {props.status} />
    </>
  )
}

const Home = () => {
  const [filter, setFilter] = useState('')

  const narrowItems = () => {
    return filter.toLowerCase() === ""
      ? item
      : item.id.includes(filter) | item.title.icludes(filter) | item.priority.includes(filter) | item.status.includes(filter) ;
  }

  const handleSort1 = () => {
    const data2 = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
    data = data2
    return data
  }

  const handleSort2 = () => {
    const data2 = data.sort((a, b) => (a.title > b.title) ? 1 : -1)
    data = data2
    return data
  }

  const handleSort3 = () => {
    const data2 = data.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    data = data2
    return data
  }

  const handleSort4 = () => {
    const data2 = data.sort((a, b) => (a.status > b.status) ? 1 : -1)
    data = data2
    return data
  }

  return (
    <div className="h-screen flex justify-content-center align-items-center bg-slate-100">

        <div className="rounded-md p-3 bg-white m-auto">
          <div className="block my-3 w-full p-2">
            <input type="text" onChange={(e) => setFilter(e.target.value)} />
          </div>
          <ul className='list-none'>
            <div className='grid grid-cols-7 gap-4 rounded-md p-3'>
              <TaskHeader content="id" onClick = {handleSort1} />
               <TaskHeader content="title" onClick = {handleSort2} />
               <TaskHeader content="priority" onClick = {handleSort3} />
               <TaskHeader content="status" onClick = {handleSort4} />
            </div>
            {data.filter(narrowItems).map(item => 
                <Link to={`/task/${item.id}`} key={item.id}><li key={item.id} className='grid grid-cols-7 gap-4 rounded-md p-3'>
                    <TaskItem id = {item.id} title={item.title} priority={item.priority} status={item.status} />
                </li></Link>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Home