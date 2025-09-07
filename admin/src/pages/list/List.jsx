import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list,setList] = useState([]);

  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response); 
    
    if (response.data.success) {
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }
  const removeItem = async(foodId)=>{
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className='px-6 py-4 w-[60%]'>
      <p className='text-2xl font-sans mb-3'>All Food List</p>
      <div>
        <div className='grid grid-cols-[100px_2fr_1fr_1fr_1fr] gap-4 items-center border bg-[#f9f9f9] border-[#cacaca] px-3 py-4 text-center text-[14px]'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,idx)=>{
          return(
            <div key={idx} className='grid grid-cols-[100px_2fr_1fr_1fr_1fr] gap-4 items-center border border-[#cacaca] px-3 py-4 text-center text-[14px]'>
              <img src={`${url}/images/`+item.image} alt="" className='w-16 h-16 object-cover rounded-lg'/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='text-2xl cursor-pointer' onClick={()=>removeItem(item._id)}>X</p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List