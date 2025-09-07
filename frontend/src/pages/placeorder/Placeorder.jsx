import React, { useContext, useState } from "react";
import { StoreContext } from "../../components/context/StoreContext";

const Placeorder = () => {
  const {
    cartItems,
    food_list,
    removeCartItem,
    getTotalCartAmount,
    token,
    url,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async(e)=>{
    e.preventDefault();
    let orderItems = []
  }

  
  return (
    <form
      onSubmit={placeorder} 
      className="flex items-start justify-between mt-[100px] gap-[50px]">
      <div className="w-[100%]">
        <p className="font-bold text-3xl mb-3">Delievery Information</p>
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
        />
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="Zip Code"
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          className="w-full mb-2 p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>
      <div className="w-[80%] h-auto">
        <div className=" bg-white shadow-md rounded-2xl p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold border-b pb-3">Cart Total</h2>

          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p className="font-medium">
              ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}
            </p>
          </div>
          <hr />

          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p className="font-medium">${getTotalCartAmount() === 0 ? 0 : 5}</p>
          </div>
          <hr />

          <div className="flex justify-between text-lg font-bold text-gray-900">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
          </div>
          <button 
          type="submit"
          className="w-[400px] bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-all">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
