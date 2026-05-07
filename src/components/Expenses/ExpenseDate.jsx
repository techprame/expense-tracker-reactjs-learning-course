import React from "react";

const ExpenseDate = ({ date }) => {
  const expenseDate = new Date(date);
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const year = expenseDate.getFullYear();
  const time = expenseDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <p>
        {day} {month}, {year} / {time}
      </p>
    </>
  );
};

export default ExpenseDate;
