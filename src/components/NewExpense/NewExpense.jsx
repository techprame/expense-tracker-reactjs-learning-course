import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ newExpenses }) {
  const addExpenseHandler = (expenseData) => {
    const newExpenseEntry = {
      ...expenseData,
      _id: Math.floor(Math.random().toString() * 100),
    };
    // newExpenses({ _id: 1432, ...expenseData });
    newExpenses(newExpenseEntry);
  };

  return (
    <>
      <div className="p-4 bg-orange-400 my-8 mx-auto w-80rem max-w-[95%] rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
        <ExpenseForm onAddExpense={addExpenseHandler} />
      </div>
    </>
  );
}

export default NewExpense;
