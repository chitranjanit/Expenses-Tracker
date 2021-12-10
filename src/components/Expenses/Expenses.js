import React,{useState} from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [filterYear,setFilterYear] = useState('2020');

  const filterHandler = (expensesFilterYear) =>{
    setFilterYear(expensesFilterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveExpeseYear={filterHandler} items={props.items} />
      <ExpensesChart expenses={filteredExpenses} />
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
