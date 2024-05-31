import React from 'react'
import { DiBackbone } from 'react-icons/di';
import data from './accountsData'
import { useState } from 'react';


const IntegratedAccount = ({logo}, {name}) => {
    const [connected, setConnected] = useState(false);
    return (
        <div className='flex'> 
            <img src={logo} alt="" />
            <div>
                <h3>{name}</h3>
                <p className="text-slate-600 font-sm">Login with {name}</p>
            </div>
            {connected? 
                <div>
                    <p className="text-sm">dashdrops@{name}.com</p>
                    <p className="text-blue-700">Signout</p>
                </div> :
                <button className='bg-purple-900 py-2 px-3'>Connect</button>}
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
            <button className='text-white rounded-md bg-blue-600 text-sm py-2 px-4 mt-3 absolute bottom-3 right-12'>Save Social</button>
        </div>
    </div>
  )
}

export default IntegratedAccounts