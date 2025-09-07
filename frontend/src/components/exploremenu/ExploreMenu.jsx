import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px] mb-5'>
        <h1 className='text-[#262626] font-[600] text-4xl'>Explore our menu</h1>
        <p className='max-w-[60%] text-[#808080]'>Choose your diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary expertise. One delicious meal at a time</p>
        <div className='flex justify-between items-center gap-[30px] text-center'>
            {menu_list.map((item,idx)=>{
                return(
                    <div key={idx} onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}}>
                        <img 
                        src={item.menu_image} 
                        alt=""
                        className='cursor-pointer my-4' 
                        />
                        <p className={`cursor-pointer my-4 ${category===item.menu_name?'border-b-2 border-blue-950 pb-2':''}`}>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-7 w-[90%] mx-auto'/>
    </div>
  )
}

export default ExploreMenu