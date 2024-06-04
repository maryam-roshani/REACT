import React from 'react'
import data from './planData'

const Plan = (props) => {
    const [connected, setConnected] = useState(false);
    function handleConnect(){
        setConnected(!connected)
    }
    return (
        <div className='flex m-3 align-items-center justify-between'> 
            <div className='flex gap-4'>
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full " />
                <div cl>
                    <h3 className='text-black text-xl font-serif'>{props.name}</h3>
                    <p className="text-slate-600 font-sm">Login with {props.name}</p>
                </div>
            </div>
            {connected? 
                <div>
                    <p className="text-sm">dashdrops@<span className='lowercase'>{props.name}</span>.com</p>
                    <p className="text-blue-700 cursor-pointer" onClick={handleConnect}>Signout</p>
                </div> :
                <button className='bg-blue-700 py-2 w-24 text-center rounded-md text-slate-50 text-sm h-10 my-auto' onClick={handleConnect}>Connect</button>}
        </div>
    )
}

const Plans = () => {
  return (
    <div className='p-5 bg-slate-50'>
        <div className=" bg-white rounded-md shadow-sm pt-5 px-4 pb-12 font-semibold">
            <h3 className="text-xl font-bold text-black capitalize">update your plan</h3>
            <hr />
            <h3 className="text-3xl capitalize font-bold text-black">change your plan</h3>
            <p className="text-xs mb-3  text-slate-500">You can choose from one of the available plans below.</p>
            <hr />
            <ul className='list-none'>
                {data.map(item => 
                    <li key={item.id} className=''>
                        <IntegratedAccount logo={item.logo} name={item.name} />
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Plan