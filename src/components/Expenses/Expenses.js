import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const dataFromFilter = (year) => {
    setFilterYear(year);
  };

  const filteredYear = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  console.log(filteredYear);

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter year={filterYear} dataFromFilter={dataFromFilter} />
        <ExpenseChart expenses={filteredYear} />
        <ExpenseList filteredYear={filteredYear} />
      </Card>
    </>
  );
};

export default Expense;
