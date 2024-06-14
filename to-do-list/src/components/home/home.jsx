import React from 'react'
import data from './tasksData'

const TaskItem = (props) => {
  return (
    <>
      <h4 className="text-base font-medium col-span-1">{props.id}</h4>
      <h4 className="text-base font-medium col-span-2">{props.title}</h4>
      <h4 className="text-base font-medium col-span-2">{props.priority}</h4>
      <h4 className="text-base font-medium col-span-2">{props.status}</h4>
    </>
  )
}

const Home = () => {
  return (
    <div className="h-screen flex justify-content-center align-items-center bg-slate-100">
        <div className="rounded-md p-3 bg-white m-auto">
          <ul className='list-none'>
            <div className='grid grid-cols-7 gap-4 rounded-md p-3'>
              <h3 className="text-lg font-medium col-span-1">ID</h3>
              <h3 className="text-lg font-medium col-span-2">Title</h3>
              <h3 className="text-lg font-medium col-span-2">Priority</h3>
              <h3 className="text-lg font-medium col-span-2">Status</h3>
            </div>
            {data.map(item => 
                <li key={item.id} className='grid grid-cols-7 gap-4 rounded-md p-3'>
                    <TaskItem id = {item.id} title={item.title} priority={item.priority} status={item.status} />
                </li>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Home