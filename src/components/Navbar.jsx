import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-4 top-0 sticky z-10 bg-gray-300 shadow align-middle">
        <Link to={"/"}>
          <GiHotMeal className="text-3xl ml-4" />
        </Link>
        <div className="">
          <form action="" className="nav-form">
            <input
              type="text"
              className="nav-form-input w-[200px] p-1 border rounded-lg"
              placeholder="Search Meals"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
