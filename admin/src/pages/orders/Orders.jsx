import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(orders.status);

  const fetchAllOrders = async () => {
    const resposne = await axios.get(url + "/api/order/list");

    if (resposne.data.success) {
      setOrders(resposne.data.data);
      console.log(resposne.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async(event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value});
    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Orders</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, idx) => {
          const { firstName, lastName, email, phone } = order.address;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 border-b pb-3 mb-3">
                <img
                  src={assets.parcel_icon}
                  alt="Parcel"
                  className="w-10 h-10 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {firstName} {lastName}
                  </h4>
                  <p className="text-sm text-gray-500">{email}</p>
                  <p className="text-sm text-gray-500">{phone}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="font-medium text-gray-700 mb-1">Items:</p>
                <p className="text-sm text-gray-600">
                  {order.items
                    .map((item) => `${item.name} x ${item.quantity}`)
                    .join(", ")}
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-500">Status:</p>
                  <select
                    onChange={(event)=>{statusHandler(event,order._id)}}
                    value={order.status}
                    className="text-sm border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <p className="font-bold text-gray-800">${order.amount}</p>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(order.date).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
