import React, { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'



const Placeorder = () => {
  const {cartItems,food_list,removeCartItem,getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='flex items-start justify-between mt-[100px] gap-[50px]'>
      <div className='w-[100%]'>
        <p className='font-bold text-3xl mb-3'>Delievery Information</p>
        <div className='flex gap-2.5'>
          <input type="text" placeholder='first name 'className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
          <input type="text" placeholder='last name' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
        </div>
        <input type="email" placeholder='Email' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
        <input type="text" placeholder='Street'className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
        <div className='flex gap-2.5'>
          <input type="text" placeholder='City' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
          <input type="text" placeholder='State' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
        </div>
        <div className='flex gap-2.5'>
          <input type="text" placeholder='Zip Code' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
          <input type="text" placeholder='Country' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
        </div>
        <input type="text" placeholder='Phone' className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"/>
      </div>
      <div className='w-[80%] h-auto'>
        <div className=" bg-white shadow-md rounded-2xl p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold border-b pb-3">Cart Total</h2>
          
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p className="font-medium">${getTotalCartAmount()===0?0:getTotalCartAmount()}</p>
          </div>
          <hr />
          
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p className="font-medium">${getTotalCartAmount()===0?0:5}</p>
          </div>
          <hr />
          
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</p>
          </div>
          <button className="w-[400px] bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-all">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder