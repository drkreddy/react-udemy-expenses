import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [showform, setShowForm] = useState(false)
    const newExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense, id: Math.random()
        }
        props.onSaveExepnseData(expenseData)
    }

    const openAndCloseFormHandler = () => {
        setShowForm(!showform);
    }

    return (<div className="new-expense">
        {!showform && <button onClick={openAndCloseFormHandler}> Add New Expense</button>}
        {showform && <ExpenseForm onCancelHandler={openAndCloseFormHandler}  onSaveExepnseData={newExpenseHandler}></ExpenseForm>}
    </div>)
};

export default NewExpense;