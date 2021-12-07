import React,{useState} from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [filterYear,setFilterYear] = useState('2020');

  const filterHandler = (expensesFilterYear) =>{
    setFilterYear(expensesFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveExpeseYear={filterHandler} items={props.items} />
      {props.items.filter(item => (new Date(item.date).getFullYear()) == filterYear).map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))};
    </Card>
  );
};

export default Expenses;
