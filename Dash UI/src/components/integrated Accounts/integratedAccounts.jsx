import React from 'react'


const IntegratedAccount = () => {
    const [connected, setConnected] = useState(false);
    return (
        <div>

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
                    <li key={item.id} className='flex justify-between p-3'>
                        <h3 className="text-base text-slate-700 my-auto">{item.socialNetwork}</h3>
                        <input type="text" className="py-2 px-3 border-2 border-slate-200 rounded-md w-3/4 text-sm" placeholder={item.placeHolder}/>
                    </li>
                )}
            </ul>
            <button className='text-white rounded-md bg-blue-600 text-sm py-2 px-4 mt-3 absolute bottom-3 right-12'>Save Social</button>
        </div>
    </div>
  )
}

export default IntegratedAccounts