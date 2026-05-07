import React from "react";

const Card = (props) => {
  const combineClasses =
    "rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)]" + " " + props.className;
  return (
    <>
      <div className={combineClasses}>{props.children}</div>
    </>
  );
};

export default Card;
