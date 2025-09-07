import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'


const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-2'>
        <h2 className='text-2xl font-bold'>Top Dishes near you</h2>
        <div className=' mt-5 grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'>
            {food_list.map((item,idx)=>{
                if (category==="All" || category===item.category) {
                    // console.log(item._id);
                    return<FoodItem key={item._id || idx} _id={item._id || idx} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay