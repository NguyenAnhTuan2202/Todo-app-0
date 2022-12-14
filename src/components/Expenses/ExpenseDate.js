import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // console.log(props);

  const month = props.newDate.toLocaleString("en-US", { month: "long" });
  const day = props.newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.newDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
