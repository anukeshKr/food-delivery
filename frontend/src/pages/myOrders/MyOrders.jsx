import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {
    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([])

    const fetOrders = async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data)
        console.log(response.data.data);
        
    }

    useEffect(()=>{
        if (token) {
            fetOrders()
        }
    },[token])

  return (
    <div className='mx-[50px] my-3 pb-10'>
        <h2 className='font-bold'>My Orders</h2>
        <div className='flex flex-col gap-[20px] mt-[30px]'>
            {data.map((order,idx)=>{
                return(
                    <div key={idx} className='grid grid-cols-[0.5fr_2.5fr_0.5fr_1fr_2fr_1fr] items-center gap-[30px] px-[10px] py-[20px] text-[#454545] border border-orange-800'>
                        <img src={assets.parcel_icon} alt='' className='w-[50px]'/>
                        <p>{order.items.map((item,idx)=>{
                            if (idx === order.items.length - 1) {
                                return item.name +"X" +item.quantity
                            }
                            else{
                               return item.name +"X" +item.quantity +"," 
                            }
                        })}</p>
                        <p>${order.amount}</p>
                        <p>Items : {order.items.length}</p>
                        <p><span className='text-orange-500'>&#x25cf;</span><b>{order.status}</b></p>
                        <button className='px-3 py-2 outline-0 bg-orange-200 hover:bg-orange-400 text-black rounded'>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders