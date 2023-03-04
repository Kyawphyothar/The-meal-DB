import React, { useEffect, useState } from "react";
import MealCart from "./MealCart";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
    // console.log(meals);
  };
  return (
    <>
      <div className=" flex gap-8 justify-center flex-wrap mt-20 ">
        {meals?.map((meal) => {
          return (
            <MealCart
              key={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
              id={meal.idMeal}
            />
          );
        })}
      </div>
    </>
  );
};

export default Meals;
