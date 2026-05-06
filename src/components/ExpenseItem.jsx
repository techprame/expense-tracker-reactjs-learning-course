import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ _id, date, title, amount }) {
  return (
    <>
      <div className="flex justify-between items-center p-2 my-4 bg-blue-400">
        <div className="text-base font-bold text-white bg-[#13ba23] border border-white p-2 rounded m-4">
          {_id}
        </div>
        <div className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded">
          <ExpenseDate date={date} />
        </div>
        <div className="flex flex-col-reverse gap-4 items-center justify-start flex-1">
          <h2 className="text-base flex-1 mx-4 text-white">{title}</h2>
        </div>
        <div className="text-base font-bold text-white bg-[#30336b] border border-white p-2 rounded-xl">
          ${amount}
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
