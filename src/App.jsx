import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
