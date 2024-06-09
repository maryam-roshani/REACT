import React from 'react'
import data from './pPlanData'



const PricePlan = () => {
  return (
    <div>
        <div className='p-9 text-slate-700'>
            <div className="w-[600px]">
                <h1 className='capitalize text-3xl font-semibold mt-3 mb-3 text-black'>Find a plan that's right for you</h1>
                <p className='mb-9 text-wrap lh-lg'>Or simply leverage the expertise of our consultation team.</p>
                <button className='bg-white border-1 border-blue-700 text-blue-700 rounded-md p-1'>Talk to us</button>
            </div>
          <div className="">
              <ul className='list-none grid grid-cols-3 gap-4'>
              {data.map(item => 
                  <li key={item.id} className='block p-2 mb-4'>
                        <img src={item.logo} className='bg-indigo-600 text-white w-10 h-10 my-5 p-2 rounded-md' alt="" />
                      <h3 className="text-base text-black my-auto font-medium mb-1 capitalize">{item.name}</h3>
                      <p>{item.text}</p>
                  </li>
              )}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default PricePlan
