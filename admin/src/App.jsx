import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div className="">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
