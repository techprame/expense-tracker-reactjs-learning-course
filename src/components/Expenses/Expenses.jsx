import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ item }) => {
  return (
    <>
      <Card className="p-4 bg-orange-400 my-8 mx-auto w-80rem max-w-[95%]">
        {item.map((expenses) => (
          <ExpenseItem
            _id={expenses._id}
            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
          />
        ))}

        {/* <ExpenseItem
          _id={item[0]._id}
          date={item[0].date}
          title={item[0].title}
          amount={item[0].amount}
        />
        <ExpenseItem
          _id={item[1]._id}
          date={item[1].date}
          title={item[1].title}
          amount={item[1].amount}
        />
        <ExpenseItem
          _id={item[2]._id}
          date={item[2].date}
          title={item[2].title}
          amount={item[2].amount}
        />
        <ExpenseItem
          _id={item[3]._id}
          date={item[3].date}
          title={item[3].title}
          amount={item[3].amount}
        />
        <ExpenseItem
          _id="Custom ID"
          date={new Date(Math.floor(Math.random() * Date.now()))}
          title="Custom Title"
          amount="Custom Amount"
        /> */}
      </Card>
    </>
  );
};

export default Expenses;
