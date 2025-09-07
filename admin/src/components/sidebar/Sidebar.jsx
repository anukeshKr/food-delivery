import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border border-t-0 text-[max(1vw,10px)]'>
        <div className='pt-[50px] pl-[20%] flex flex-col gap-[20px]'>
            <NavLink 
            to="/add" 
            className={({ isActive }) =>
                `flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2 py-2.5 
                rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer 
                ${isActive ? "bg-[#fff0ed] border-orange-500" : ""}`
            }>
                <img src={assets.add_icon} alt="" />
                <p className="max-[900px]:hidden">Add Items</p>
            </NavLink>
            <NavLink 
            to="/list" 
            className={({ isActive }) =>
                `flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2 py-2.5 
                rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer 
                ${isActive ? "bg-[#fff0ed] border-orange-500" : ""}`
            }
            >
                <img src={assets.order_icon} alt="" />  
                <p className="max-[900px]:hidden">List Items</p>
            </NavLink>
            <NavLink 
            to="/orders" 
            className={({ isActive }) =>
                `flex items-center gap-3 border border-[#a9a9a9] border-r-0 px-2 py-2.5 
                rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer 
                ${isActive ? "bg-[#fff0ed] border-orange-500" : ""}`
            }
            >
                <img src={assets.order_icon} alt="" />
                <p className="max-[900px]:hidden">Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar