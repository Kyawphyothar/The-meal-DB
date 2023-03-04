import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import "./Detail.css";
const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    // console.log(meals[0]);
  };
  return (
    <div className="">
      <div className=" flex flex-wrap lg:flex-nowrap  justify-center pt-10">
        <img
          src={meals.strMealThumb}
          alt=""
          className=" h-[380px] md:pl-2 lg:h-[400px] rounded-xl"
        />
        <div className="p-10 lg:p-5">
          <div className=" flex flex-wrap  justify-between gap-5 mb-5 align-middle">
            <h1 className=" tracking-tight text-2xl text-gray-700">
              {meals.strMeal}
            </h1>
            <h1 className=" text-lg bg-orange-400 p-1 w-32 text-center rounded-[2rem] uppercase">
              {meals.strArea}
            </h1>
          </div>
          <h2 className=" text-black text-lg mb-3">{meals.strCategory}</h2>
          <p className=" leading-6 tracking-wide text-gray-900">
            {meals.strInstructions}
          </p>
          <div className="mt-2 flex justify-between align-middle items-center">
            <div className="">
              <p className=" text-grey-300">Watch On YouTube</p>
              <a href={meals.strYoutube} target="_blank">
                <FaYoutube className=" text-red-600 text-[3rem]" />
              </a>
            </div>
            <div className="">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-gray-700 rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
                type="button"
              >
                View Ingredients
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul
                  className="p-3 text-sm text-gray-700"
                  aria-labelledby="dropdownButton"
                >
                  {Object.keys(meals).map((key) => {
                    if (key.includes("strIngredient") && meals[key]) {
                      return <li key={key}>{meals[key]}</li>;
                    }
                    return "";
                  })}
                </ul>
              </div>
            </div>
          </div>
          <p className=" text-sm ">
            Tips: Try to reload the page if the "View Product " button doesn't
            work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
