import React from 'react'
import data from './questionData'

const Questions = () => {
  return (
    <div>
        <h1 className='capitalize text-xl'>frequently asked questions</h1>
        <div className="grid grid-cols-3 gap-4">
            <ul className='list-none'>
            {data.map(item => 
                <li key={item.id} className='block p-2'>
                    <h3 className="text-base text-black my-auto font-bold mb-1">{item.question}</h3>
                    <p>{item.answer}</p>
p                </li>
            )}
            </ul>
        </div>
    </div>

  )
}

export default Questions