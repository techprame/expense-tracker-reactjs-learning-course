import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let expenseDatabase = [];

const App = () => {
  // let expenseDate = new Date();
  // let expenseTitle = "Car Fuel";
  // let expenseAmount = "200";

  const [expenses, setExpenses] = useState(expenseDatabase);

  useEffect(() => {
    fetch("https://apis.jsons.live/cuwbo/expensedata")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data.data);
      })
      .catch((error) => {
        console.error("Error fetching expense data:", error);
      });
  }, []);

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
