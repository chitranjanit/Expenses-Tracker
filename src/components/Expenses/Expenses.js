import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {

  const filterHandler = (expensesFilterYear) =>{
    props.onSaveFilter(expensesFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveExpeseYear={filterHandler} items={props.items} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
