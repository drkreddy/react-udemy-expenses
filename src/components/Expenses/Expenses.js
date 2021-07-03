import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import ExpensesList from "./ExpensesList"

function Expenses(props) {

  console.log("Rerendering Expense:", props.expenses)
  const [selectedYear, setSelectedYear] = useState('2021')

  const onYearFilterSelected = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.expenses
    .filter(expense => {
      return expense.date.getFullYear() == selectedYear
    })



  return (<div >
    <Card className="expenses">
      <ExpensesFilter value={selectedYear} onYearFilterSelected={onYearFilterSelected} />
      <ExpensesList items={filteredExpenses}/>
    </Card>

  </div>)
};

export default Expenses