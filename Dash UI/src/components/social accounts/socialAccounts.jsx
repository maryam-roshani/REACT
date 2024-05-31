import React from 'react'
import data from './socialData.js'

const SocialAccounts = () => {
  return (
    <div className='p-5 bg-slate-50'>
        <div className="bg-white rounded-md shadow-sm pt-5 px-4 pb-3 font-semibold">
            <h3 className="text-xl font-bold text-red-950">Social accounts</h3>
            <p className="text-xs mb-3  text-slate-500">Let everyone know where they can find you.</p>
            <hr />
            <ul className='list-none'>
                {data.map(item => 
                    <li key={item.id} className='flex justify-between p-3'>
                        <h3 className="text-base text-slate-700">{item.socialNetwork}</h3>
                        <input type="text" className="py-2 px-3 border-2 border-slate-200 rounded-md w-3/4 text-sm" placeholder={item.placeHolder}/>
                    </li>
                )}
            </ul>
            <button className='text-white rounded-md bg-blue-800 text-sm py-2 px-4 mt-3 float-end'>Save Social</button>
        </div>
    </div>
  )
}

export default SocialAccounts