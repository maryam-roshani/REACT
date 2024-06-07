import React from 'react'
import data from './efficientData.js'



const Efficient = () => {
  return (
    <div>
        <div className='p-9 text-slate-700'>
          <h1 className='capitalize text-3xl font-semibold mt-3 mb-9 text-black'>everything you need to build efficiently</h1>
          <p>start building your app using our tools, be efficient, spend less time with details<br>more time with your business</br></p>
          <div className="">
              <ul className='list-none grid grid-cols-3 gap-4'>
              {data.map(item => 
                  <li key={item.id} className='block p-2 mb-4'>
                      <h3 className="text-base text-black my-auto font-medium mb-3 capitalize">{item.question}</h3>
                      <p>{item.answer}</p>
                  </li>
              )}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Efficient

const Questions = () => {
    return (
      <div className='p-9 text-slate-700'>
          <h1 className='capitalize text-3xl font-semibold mt-3 mb-9 text-black'>frequently asked questions</h1>
          <div className="">
              <ul className='list-none grid grid-cols-3 gap-4'>
              {data.map(item => 
                  <li key={item.id} className='block p-2 mb-4'>
                      <h3 className="text-base text-black my-auto font-medium mb-3 capitalize">{item.question}</h3>
                      <p>{item.answer}</p>
                  </li>
              )}
              </ul>
          </div>
      </div>
  
    )
  }