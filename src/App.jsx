import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // let expenseDate = new Date();
  // let expenseTitle = "Car Fuel";
  // let expenseAmount = "200";

  let expenses = [
    {
      _id: 1,
      title: "Car Fuel",
      amount: 200,
      date: new Date(Math.floor(Math.random() * Date.now())),
    },
    {
      _id: 2,
      title: "Car Insurance",
      amount: 500,
      date: new Date(Math.floor(Math.random() * Date.now())),
    },
    {
      _id: 3,
      title: "Car Maintenance",
      amount: 1000,
      date: new Date(Math.floor(Math.random() * Date.now())),
    },
    {
      _id: 4,
      title: "Car Repair",
      amount: 1500,
      date: new Date(Math.floor(Math.random() * Date.now())),
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-2xl text-center p-4 bg-amber-400 font-bold underline">
          Expense Tracker ReactJS Learning Course - by @techPrame
        </h2>
        <Expenses item={expenses} />
      </div>
    </>
  );
};

export default App;
