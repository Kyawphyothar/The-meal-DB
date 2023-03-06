import React, { useRef } from "react";
import { GiHotMeal } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formValue = inputRef.current.value;
    navigate("search", { state: { value: formValue } });
    // console.log(formValue);
  };
  return (
    <>
      <div className="flex justify-between p-4 top-0 sticky z-10 bg-gray-200 shadow align-middle">
        <Link to={"/"}>
          <GiHotMeal className="text-3xl ml-10" />
        </Link>
        <div className="">
          <form action="" className="nav-form mr-10" onSubmit={onSubmitHandler}>
            <input
              ref={inputRef}
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
