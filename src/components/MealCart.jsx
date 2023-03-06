import React from "react";
import { BiSearch } from "react-icons/bi";
import "./MealCart.css";
import { Link } from "react-router-dom";
const MealCart = ({ name, img, id }) => {
  return (
    <>
      <div className=" bg-gray-200 shadow-m border rounded-lg p-4 ">
        <div className=" relative parent">
          <img src={img} alt="" className="h-[200px] rounded-lg image" />
          <div className="">
            <h4 className=" text-gray-900 text-xl w-[100px] truncate">
              {name}
            </h4>
            <Link to={`/detail/${id}`}>
              <p className="icon-box bg-orange-600 w-10 h-10 rounded-[100%] object-cover flex justify-center align-middle items-center absolute top-[40%] left-[40%]">
                <BiSearch className="text-2xl text-white" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCart;
