import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const dataFromExpenseForm = (dataObject) => {
    const expense = {
      ...dataObject,
      id: (Math.floor(Math.random() * 1000) + 1).toString(),
    };
    props.onAddExpense(expense);
    // setEdit(false);
  };
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };
  const stopEditHanlder = () => {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!edit && <button onClick={editHandler}>Add New Expense</button>}
      {edit && (
        <ExpenseForm
          stopEditHanlder={stopEditHanlder}
          onSaveExpenseForm={dataFromExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
