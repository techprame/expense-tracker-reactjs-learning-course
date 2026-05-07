import React from "react";
import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onAddExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded m-4"
            >
              Expense Title
            </label>
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-300 font-bold py-2 px-4 m-4 rounded border-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded m-4"
            >
              Expense Amount
            </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              name=""
              id=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-300 font-bold py-2 px-4 m-4 rounded border-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded m-4"
            >
              Expense Date
            </label>
            <input
              required
              type="date"
              name=""
              id=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-300 font-bold py-2 px-4 m-4 rounded border-2"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="text-white bg-purple-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 font-bold py-2 px-50 rounded cursor-pointer"
          >
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
