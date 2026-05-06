function ExpenseDate({ date }) {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
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
}

export default ExpenseDate;
