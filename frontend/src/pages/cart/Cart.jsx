import React, { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,food_list,removeCartItem,getTotalCartAmount,url}=useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='mt-[100px] mb-[100px]'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,idx)=>{
          if (cartItems[item._id]>0) {
            return(
              <div key={idx}>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center text-black mt-[10px]'>
                  <img src={url + "/images/" + item.image} alt=""
                  className='w-[50px]' 
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p className='cursor-pointer' onClick={()=>{removeCartItem(item._id)}}>x</p>
                </div>
                <hr className='h-[2px] bg-[#e2e2e2] border-0 my-2'/>
              </div>
            )
          }
        })}
      </div>
      <div className="mt-[80px] flex flex-col lg:flex-row justify-between gap-[max(12vw,20px)] w-[85%] mx-auto">
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6 flex flex-col gap-6">
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
        </div>
        <div className="w-full lg:w-[40%] bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4">
          <b className="text-lg text-gray-800">Have a promo code?</b>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter promo code"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-8">
        <button className="w-[400px] bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-all" onClick={()=>navigate("/order")}>
          PROCEED TO CHECKOUT
        </button>
      </div>

    </div>
  )
}

export default Cart