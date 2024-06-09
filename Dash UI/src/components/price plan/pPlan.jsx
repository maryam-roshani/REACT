import React from 'react'
import data from './pPlanData'



const PricePlan = () => {
  return (
    <div>
        <div className='p-9 text-slate-700'>
            <div className="w-[600px]">
                <h1 className='capitalize text-3xl font-semibold mt-3 mb-3 text-black'>Find a plan that's right for you</h1>
                <div className="flex gap-2">
                    <p className='mb-9 text-wrap lh-lg'>Or simply leverage the expertise of our consultation team.</p>
                    <button className='bg-white border-1 border-blue-700 text-blue-700 rounded-md p-1'>Talk to us</button>
                </div>
                <button className="rounded-full p-2 bg-white ouline-0 border-0 my-10"><span className='p-1 rounded-full text-white bg-blue-700'>Annual</span>Monthly</button>
            </div>
          <div className="">
              <ul className='list-none grid grid-cols-3 gap-4'>
              {data.map(item => 
                  <li key={item.id} className='block py-4 px-3 mb-4 bg-white rounded-md'>
                      <h3 className="text-base text-black my-auto font-medium mb-1 capitalize">{item.name}</h3>
                      <p>{item.text}</p>
                      <div className="flex mt-6 mb-4">
                      <h1 className=" text-black">${item.price}</h1><p>/mo</p>
                      </div>
                  </li>
              )}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default PricePlan
