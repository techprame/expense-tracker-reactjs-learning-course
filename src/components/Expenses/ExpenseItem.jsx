import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ _id, date, title, amount }) => {
  const [expense, setExpense] = useState(title);
  const [newExpense, setNewExpense] = useState("");

  return (
    <>
      <Card className="flex justify-between items-center p-2 my-4 bg-amber-100">
        <div className="text-base font-bold text-white bg-[#13ba23] border border-white p-2 rounded m-4">
          {_id}
        </div>
        <div className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded">
          <ExpenseDate date={date} />
        </div>
        <div className="flex flex-col-reverse gap-4 items-center justify-start flex-1">
          <h2 className="text-base font-bold text-white bg-green-600 border border-white p-2 rounded">
            {expense}
          </h2>
        </div>
        <div className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded-xl">
          ${amount}
        </div>
        <input
          className="text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-300 font-bold py-2 px-4 m-4 rounded border-2"
          onChange={(e) => setNewExpense(e.target.value)}
          type="text"
          placeholder="Edit your expense..."
          value={newExpense}
          name=""
          id="ExpenseTitleChange"
        />
        <button
          htmlFor="ExpenseTitleChange"
          onClick={(e) => setExpense(newExpense)}
          className="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 font-bold py-2 px-4 m-4 rounded cursor-pointer"
        >
          Edit Expense
        </button>
      </Card>
    </>
  );
};

export default ExpenseItem;
