import React from 'react'
import data from './accountsData'
import { useState } from 'react';


const IntegratedAccount = (props) => {
    const [connected, setConnected] = useState(false);
    return (
        <div className='flex m-3 align-items-center justify-between'> 
            <div className='flex gap-3'>
                <img src={props.logo} alt="" className='w-6 h-6 my-auto'/>
                <div cl>
                    <h3 className='text-black text-xl font-serif'>{props.name}</h3>
                    <p className="text-slate-600 font-sm">Login with {props.name}</p>
                </div>
            </div>
            {connected? 
                <div>
                    <p className="text-sm">dashdrops@{name}.com</p>
                    <p className="text-blue-700">Signout</p>
                </div> :
                <button className='bg-blue-700 py-2 w-24 text-center rounded-md  text-slate-50  text-sm h-10'>Connect</button>}
        </div>
    )
}

const IntegratedAccounts = () => {
  return (
    <div className='p-5 bg-slate-50'>
        <div className=" bg-white rounded-md shadow-sm pt-5 px-4 pb-12 font-semibold">
            <h3 className="text-xl font-bold text-black">Integrated Accounts</h3>
            <p className="text-xs mb-3  text-slate-500">Select your prefrences for the notification that are the most common for all users.</p>
            <hr />
            <ul className='list-none'>
                {data.map(item => 
                    <li key={item.id} className=''>
                        <hr />
                        <IntegratedAccount logo={item.logo} name={item.name} />
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default IntegratedAccounts