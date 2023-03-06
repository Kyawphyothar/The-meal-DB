import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const location = useLocation();
  const [meals, setMeals] = useState([]);
  const data = location.state.value;

  useEffect(() => {
    fetchMealsForSearch();
  }, []);

  const fetchMealsForSearch = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
    );
    const { meals } = await api.json();
    setMeals(meals);
  };

  const filteredMeals = meals.filter((meal) => {
    return meal.strMeal.toLowerCase().includes(data.toLowerCase());
  });

  // console.log(data);
  // console.log(filteredMeals);

  return (
    <>
      <div className="flex gap-10 justify-center flex-wrap mt-20">
        {filteredMeals?.map((filterMeal) => {
          return (
            <div
              className=" bg-gray-200 shadow-md border rounded-lg p-4 "
              key={filterMeal.idMeal}
            >
              <div className="relative parent">
                <img
                  src={filterMeal.strMealThumb}
                  alt=""
                  className="h-[200px] rounded-lg image shadow-lg"
                />
                <div className="">
                  <h4 className=" text-gray-900 text-xl w-[100px] truncate">
                    {filterMeal.strMeal}
                  </h4>
                  <Link to={`/detail/${filterMeal.idMeal}`}>
                    <p className="icon-box bg-orange-600 w-10 h-10 rounded-[100%] object-cover flex justify-center align-middle items-center absolute top-[40%] left-[40%]">
                      <BiSearch className="text-2xl text-white" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
