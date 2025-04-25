import React from "react";
import logo from "../assets/logo.jpg";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  const Links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        {" "}
        <a>Contact Us</a>
      </li>{" "}
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg font-semibold"
          >
            {Links}
          </ul>
        </div>
        <div className=" flex items-center justify-center gap-3">
          <img
            className="h-10 w-10 object-cover"
            src={logo}
            alt="pizza-hub-logo"
          />
          <span className="text-lg font-bold text-[#EE3A43]">Pizza Hub</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex justify-end items-center gap-3">
        <IoIosNotifications className="w-7 h-7 text-gray-500" />
        <a className="btn py-3 px-6 rounded-full text-sm  text-white bg-[#FFC222] ">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
