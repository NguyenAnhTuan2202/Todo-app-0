import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filteredYear.length === 0) {
    return <h2 className="expenses-list__fallback">Founded no expense</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredYear.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
