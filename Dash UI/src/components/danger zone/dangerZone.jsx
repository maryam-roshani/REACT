import React from 'react'

const DangerZone = () => {
  return (
    <div className='p-5 bg-slate-50'>
        <div className=" relative bg-white rounded-md shadow-sm py-5 px-4 font-semibold">
            <h3 className="text-xl font-bold text-red-600">Danger Zone</h3>
            <p className="text-xs mb-3 text-slate-500"> Delete your profile, along with your authentication associations.</p>
            <hr />
            <p className="text-sm mt-5 text-slate-500"> Delete any and all content you have, such as articles, comments, your reading list or chat messages.</p>
            <p className="text-sm mb-5 text-slate-500"> Allow your username to become available to anyone. </p>
            <button className='text-white rounded-md bg-red-600 text-sm py-2 px-4 mb-5'>Delete Account</button>
            <p className="text-sm mt-5 text-slate-500"> Feel free to contact <span className='text-sm mt-5 text-blue-500'>dashdrops@example.com</span> with any questions.</p>
        </div>
    </div>
  )
}

export default DangerZone