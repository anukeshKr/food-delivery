import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'


const Footer1 = () => {
  return (
    <footer>
        <div className=' h-[70px] font-bold text-2xl mt-[30px] bg-[#2e2e2e] text-white  cursor-pointer flex items-center justify-center'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <p>Back to top</p>
        </div>
        <div className='bg-[#323232] flex flex-col py-[20px] px-[8vw] items-center gap-[20px] pt-[80px] text-white'>
            <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-[20px]'>
                <div className='flex flex-col gap-[20px] items-start'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus doloremque architecto nobis, facere obcaecati rem voluptas, ad iure quasi officia distinctio unde! Modi voluptate recusandae fugit dignissimos ipsam delectus quos.</p>
                    <div className='flex gap-9'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] items-start'>
                    <h2 className='text-2xl font-bold'>COMPANY</h2>
                    <ul className='flex flex-col gap-1.5'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[20px] items-start'>
                    <h2 className='text-2xl font-bold'>GET IN TOUCH</h2>
                    <ul className='flex flex-col gap-1.5'>
                        <li className=''>+91-123-456-7890</li>
                        <li>tomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] bg-gray-900 border-none my-2'/>
            <p>Copyright 2025 © Tomato.com. All rights reserved.</p>
        </div>
    </footer>
    
  )
}

export default Footer1