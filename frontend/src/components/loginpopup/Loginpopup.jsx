import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Loginpopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("signup");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  

  const onlogin = async (event) => {
    event.preventDefault();
    let newurl = url;

    if (currState === "login") {
      newurl += "/api/user/login";
    } else {
      newurl += "/api/user/register";
    }

    const response = await axios.post(newurl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }};

    

  return (
    <div className="absolute z-[1] w-full h-full grid bg-[#00000090]">
      <form
        onSubmit={onlogin}
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] rounded-[8px] text-[14px] animate-fadeIn"
      >
        <div className="flex justify-between items-center text-black font-bold">
          <h2>{currState === "login" ? "Login" : "Sign up"}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          {currState === "login" ? null : (
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={onchangeHandler}
              required
              className="outline-0 border p-2.5"
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            name="email"
            value={data.email}
            onChange={onchangeHandler}
            className="outline-0 border p-2.5"
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={data.password}
            onChange={onchangeHandler}
            className="outline-0 border p-2.5"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-black font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-200"
        >
          {currState === "signup" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" required className="mt-1.5" />
          <p>By continuing, I agree to the terms of use & Privacy Policy</p>
        </div>

        {currState === "login" ? (
          <p>
            Create a new account?
            <span
              onClick={() => setCurrState("signup")}
              className="text-orange-500 cursor-pointer pl-1"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              onClick={() => setCurrState("login")}
              className="text-orange-500 cursor-pointer pl-1"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
