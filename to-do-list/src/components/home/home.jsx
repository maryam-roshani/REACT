import React from 'react'
import data from './tasksData'

const Home = () => {
  return (
    <div className="h-screen flex justify-content-center align-items-center bg-slate-100">
        <div className="rounded-md p-3 bg-white m-auto">
          <ul className='list-none'>
            {data.map(item => 
                <li key={item.id} className='grid grid-cols-7 gap-4 rounded-md p-3'>
                    <h4 className="text-base font-medium col-span-1">{item.id}</h4>
                    <h4 className="text-base font-medium col-span-2">{item.title}</h4>
                    <h4 className="text-base font-medium col-span-2">{item.priority}</h4>
                    <h4 className="text-base font-medium col-span-2">{item.status}</h4>
                </li>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Home