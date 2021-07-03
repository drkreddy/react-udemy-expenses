import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [showform, setShowForm] = useState(false)
    const newExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense, id: Math.random()
        }
        setShowForm(false);
        props.onSaveExepnseData(expenseData)
    }

    const openAndCloseFormHandler = () => {
        setShowForm(!showform);
    }

    let newExpenseContent = <button onClick={openAndCloseFormHandler}> Add New Expense</button>

    if (showform) {
        newExpenseContent = <ExpenseForm onCancelHandler={openAndCloseFormHandler} onSaveExepnseData={newExpenseHandler}></ExpenseForm>
    }

    return (<div className="new-expense">
        {newExpenseContent}
    </div>);

}
export default NewExpense;