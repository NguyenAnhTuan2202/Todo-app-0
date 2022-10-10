import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value); // Cách 1
    // // setUserInput({
    // //   enteredTitle: e.target.value,
    // //   ...userInput,
    // // }); // Cách 2
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // }); // Cách 3
  };
  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
    // setUserInput({
    //   enteredAmount: e.target.value,
    //   ...userInput,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnterDate(e.target.value);
    // setUserInput({
    //   enteredDate: e.target.value,
    //   ...userInput,
    // });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseForm(expense);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            input="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            input="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditHanlder}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
