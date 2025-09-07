import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ _id, name, price, image, description }) => {
  
  
  const { cartItems, addToCart, removeCartItem, url } = useContext(StoreContext);
  
  // console.log("cartItems in FoodItem:", cartItems);
  return (
    <div className="w-full m-auto rounded hover:shadow-2xl transition-transform duration-200">
      <div className="relative">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="w-full rounded-tl-2xl rounded-tr-2xl"
        />

        <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
          {!cartItems[_id] ? (
            <img
              src={assets.add_icon_white}
              alt="Add"
              className="w-10 shadow-md round cursor-pointer"
              onClick={() => {addToCart(_id),console.log('Clicked item id:', _id);}}
            />
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={assets.remove_icon_red}
                alt="Remove"
                className="w-6 cursor-pointer"
                onClick={() => removeCartItem(_id)}
              />
              <p>{cartItems[_id]}</p>
              <img
                src={assets.add_icon_green}
                alt="Add More"
                className="w-6 cursor-pointer"
                onClick={() => addToCart(_id)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-[0px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-red-500 text-[22px] font-medium my-2.5">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
