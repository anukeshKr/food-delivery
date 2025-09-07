import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className={`h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-cover bg-center 
        flex items-center relative`}>
        <div className='absolute flex flex-col items-start gap-[1.5vw] bottom-[10%] left-[6vw] max-w-[50%]'>
            <h2 className='font-bold text-white text-[max(4.5vw,22px)] font-serif'>Order your favourite food</h2>
            <p className='text-white text-[1vw]'>Choose your diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary expertise. One delicious meal at a time</p>
            <button className='border-0 rounded-3xl bg-gray-200 font-medium py-[1vw] px-[2.3vw] '>View menu</button>
        </div>
    </div>
  )
}

export default Header