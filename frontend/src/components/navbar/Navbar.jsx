import React, { useContext, useState } from 'react'
import {assets} from "../../assets/frontend_assets/assets"
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
  return (
    <nav className='sticky top-0 h-[80px] pl-2 pr-2 shadow-md flex justify-between items-center bg-white z-50'>
        <Link to={"/"}>
            <img 
            src={assets.logo} 
            alt="" 
            className='w-[150px]'
            />
        </Link>
        <ul className='flex gap-6 cursor-pointer list-none text-gray-700 font-medium'>
            {['Home', 'Menu', 'MobileApp', 'Contact us'].map((item) => {
                const path = 
                item === 'Home' ? '/' : 
                item === 'Contact us' ? '/contact' : 
                `/${item.toLowerCase()}`; // e.g., /menu, /mobileapp

                return (
                <li
                    key={item}
                    onClick={() => setMenu(item)}
                    className={`pb-2 transition-all duration-150 hover:border-b-2 hover:border-gray-400 
                    ${menu === item ? 'border-b-2 border-blue-950 pb-2' : ''}`}
                >
                    <Link to={path}>
                    {item}
                    </Link>
                </li>
                );
            })}
        </ul>
        <div className='flex gap-7 cursor-pointer items-center '>
            <img 
            src={assets.search_icon} 
            alt="" 
            className='relative'
            />
            <div className='relative'>
                <Link to={"/cart"}>
                    <img 
                    src={assets.basket_icon} 
                    alt="" 
                    className='w-6 h-6'
                    />
                </Link>
                <div className={getTotalCartAmount()===0?"":'w-2 h-2 bg-red-500 rounded-full absolute top-[-2px] right-[-5px]'}></div>
            </div>
            {!token ? (
    <button
        className="bg-orange-200 outline outline-orange-500 px-5 py-2.5 rounded-full font-[500] text-black hover:bg-orange-500 transition-all duration-200"
        onClick={() => setShowLogin(true)}
    >
        Sign in
    </button>
    ) : (
    <div className="relative group">
        {/* Profile Icon */}
        <img src={assets.profile_icon} alt="Profile" className="cursor-pointer" />

        {/* Dropdown Menu */}
        <ul className="absolute hidden group-hover:block right-0  w-40 bg-white shadow-lg rounded-lg z-10">
            <li onClick={()=>{navigate("/myorders")}} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-orange-500 cursor-pointer ">
                <img src={assets.bag_icon} alt="Orders" className="w-4 h-4 " />
                <p>Orders</p>
            </li>
            <hr className="border-gray-200" />
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-orange-500 cursor-pointer" onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" className="w-4 h-4" />
                <p>Logout</p>
            </li>
        </ul>
    </div>
)}

            
        </div>
    </nav>
  )
}

export default Navbar