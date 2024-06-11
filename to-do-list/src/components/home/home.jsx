import React from 'react'
import data from './tasksData'

const Home = () => {
  return (
    <div className="flex justify-content-center align-items-center bg-slate-100">
        <div className="rounded-md p-2 bg-white">
          <ul className='list-none'>
            {data.map(item => 
                <li key={item.id} className='flex gap-2 rounded-md p-2'>
                    <h4 className="text-base font-medium">{item.id}</h4>
                    <h4 className="text-base font-medium">{item.priority}</h4>
                    <h4 className="text-base font-medium">{item.status}</h4>
                </li>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Home