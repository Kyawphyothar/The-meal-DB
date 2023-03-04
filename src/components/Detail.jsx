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
          <div className="mt-2">
            <div className="">
              <p className=" text-grey-300">Watch On YouTube:</p>
              <a href={meals.strYoutube} target="_blank">
                <FaYoutube className=" text-red-600 text-[3rem]" />
              </a>
            </div>
          </div>
          <div className=" p-3">
            <h3 className=" text-orange-700 text-lg font-semibold">Ingredients</h3>
          <ul>
              {Object.keys(meals).map((key) => {
                if (key.includes("strIngredient") && meals[key]) {
                  return  <li key={key} className=" leading-7 list-square">{meals[key]}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
