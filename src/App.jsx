import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
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

const App = () => {
  // let expenseDate = new Date();
  // let expenseTitle = "Car Fuel";
  // let expenseAmount = "200";

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const newExpensesHandler = (newExpenseEntry) => {
    // DUMMY_EXPENSE.push(finalExpenseData);
    const newUpdatedExpenseData = [newExpenseEntry, ...expenses];
    setExpenses(newUpdatedExpenseData);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl text-center p-4 bg-amber-400 font-bold underline">
          Expense Tracker ReactJS Learning Course - by @techPrame
        </h2>
        <NewExpense newExpenses={newExpensesHandler} />
        <Expenses item={expenses} />
      </div>
    </>
  );
};

export default App;
