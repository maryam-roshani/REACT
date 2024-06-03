import React from 'react'
import data from './addressData'

const BillingAddress = () => {
    return (
        <div className='p-5 bg-slate-50'>
            <div className=" relative bg-white rounded-md shadow-sm pt-5 px-4 pb-12 font-semibold">
                <h3 className="text-xl font-bold text-black">Billing Address</h3>
                <p className="text-xs mb-3  text-slate-500">Please provide the billing address with the credit card you've provided.</p>
                <hr />
                <ul className='list-none'>
                    {data.map(item => 
                        <li key={item.id} className='block p-2'>
                            <h3 className="text-base text-black my-auto font-bold mb-1">{item.label}</h3>
                            <input type="text" className="py-2 px-3 border-2 border-slate-200 rounded-md w-full text-base" placeholder={item.placeHolder}/>
                        </li>
                    )}
                </ul>
                <div className="p-2">
                <button className='text-white rounded-md bg-blue-800 py-2 px-4 mt-3 w-full'>Save Social</button>

                </div>
            </div>
        </div>
      )
}

export default BillingAddress