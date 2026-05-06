import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
        <h2 className="text-xl text-center p-4 bg-amber-400">
          Let's get started!
        </h2>
      </div>
      <ExpenseItem
        _id={expenses[0]._id}
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        _id={expenses[1]._id}
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        _id={expenses[2]._id}
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[3].amount}
      />
      <ExpenseItem
        _id={expenses[3]._id}
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </>
  );
}

export default App;
