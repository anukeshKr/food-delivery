import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onchangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }
    const onsubmitHandler =async (event)=>{
        event.preventDefault()
        const formData = new FormData();
        formData.append("description",data.description)
        formData.append("name",data.name);
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image);

        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false) 
            toast.success(response.data.message)     
        }
        else{
            toast.error(response.data.message)
        }
    }
  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
        <form className="flex flex-col gap-6 bg-white shadow-md rounded-2xl p-6" onSubmit={onsubmitHandler}>
        
            <div className="flex flex-col gap-2 w-[50%]">
                <p className="font-medium">Upload Image</p> 
                <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center border-gray-300 rounded-xl cursor-pointer w-36 h-18 mt-2"
                >
                    <img
                    src={image?URL.createObjectURL(image):assets.upload_area}
                    alt="upload"
                    className="w-36 h-18 object-cover bg-center rounded"
                    />
                    <span className="text-sm text-gray-500">Click to upload</span>
                </label>
                <input type="file" id="image" hidden required onChange={(e)=>{setImage(e.target.files[0])}}/>
            </div>

            {/* Product Name */}
            <div className="flex flex-col gap-2 w-[50%]">
                <p className="font-medium">Product Name</p>
                <input
                    onChange={onchangeHandler}
                    value={data.name}
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-2 w-[50%]">
                <p className="font-medium">Product Description</p>
                <textarea
                    name="description"
                    onChange={onchangeHandler}
                    value={data.description}
                    rows="6"
                    placeholder="Write Description"
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                ></textarea>
            </div>

            {/* Category + Price */}
            <div className="flex gap-6">
                <div className="flex flex-col gap-2 w-[25%]">
                    <p className="font-medium">Product Category</p>
                    <select
                    name="category"
                    onChange={onchangeHandler}
                    className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 w-[25%]">
                    <p className="font-medium">Product Price</p>
                    <input
                    type="number"
                    onChange={onchangeHandler}
                    value={data.price}
                    name="price"
                    placeholder="$20"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="bg-black text-white font-semibold py-3 px-6 rounded-lg w-[20%]"
            >
            ADD
            </button>
      </form>
    </div>
  );
};

export default Add;
