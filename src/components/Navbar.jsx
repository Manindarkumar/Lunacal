import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" mt-10  bg-zinc-900 py-4 mx-12 rounded-2xl">
        <nav className="list-none flex justify-center items-center gap-6">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } transition duration-500 ease-in-out  text-lg 
                 px-10 py-3 rounded-2xl text-white`
              }
            >
              About me
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/exp"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } transition duration-500 ease-in-out  text-lg 
                 px-10 py-3 rounded-2xl text-white`
              }
            >
              Experiences
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/recom"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } transition duration-500 ease-in-out  text-lg 
                 px-10 py-3 rounded-xl text-white`
              }
            >
              Recommended
            </NavLink>{" "}
          </li>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
