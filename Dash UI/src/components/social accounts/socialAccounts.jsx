import React from 'react'
import data from './socialData.js'

const SocialAccounts = () => {
  return (
    <div>
        <div className="bg-slate-50 rounded-md shadow-sm pt-5 px-4 pb-3">
            <h3 className="text-xl font-semibold">Social accounts</h3>
            <p className="text-sm text-slate-800">Let everyone know where they can find you.</p>
            <hr />
            <ul>
                {data.map(item => 
                    <li key={item.id} className='flex justify-between'>
                        <h3 className="text-lg">{item.socialNetwork}</h3>
                        <input type="text" className="py-2 px-3 border-1 border-slate-600 rounded-md" placeholder={item.placeHolder}/>
                    </li>
                )}
            </ul>
            
        </div>
    </div>
  )
}

export default SocialAccounts