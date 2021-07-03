import { useState } from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 121.2, date: new Date(2021, 2, 12) },
  { id: 'e2', title: 'Furniture', amount: 200.5, date: new Date(2021, 4, 1) },
  { id: 'e3', title: 'Recharge', amount: 11.2, date: new Date(2021, 5, 2) },
  { id: 'e4', title: 'Food', amount: 41.9, date: new Date(2021, 1, 28) },
]
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  console.log('initial expensesSate:', expenses);

  return (
    <div className="App">
      <NewExpense onSaveExepnseData={(expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses])
      }} />
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
