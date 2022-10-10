import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  // Change state:
  // setTimeout(() => {
  //   setTitle("Updated state by setTimeout");
  // }, 3000);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate newDate={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
