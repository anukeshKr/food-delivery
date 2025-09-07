import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div className='m-auto mt-[100px] text-[max(3vw,20px)] font-semibold text-gray-800 flex flex-col items-center '>
        <p className="text-center font-semibold mb-9">
            For Better Experience Download<br />
            <span className="text-4xl block">Tomato App</span>
        </p>
        <div className='flex'>
            <img src={assets.play_store} alt=""  className='w-[200px] h-[50px] object-contain hover:scale-110'/>
            <img src={assets.app_store} alt="" className='w-[200px] h-[50px] object-contain hover:scale-110'/>
        </div>
    </div>
  )
}

export default Appdownload