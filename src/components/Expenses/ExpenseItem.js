import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card'

import { useState } from 'react';

const ExpenseItem = (props) => {
    console.log("Evaluating ExpenseItem with props", props.date, props.amount, props.title)
    let [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle('Updated!!');
        console.log(title);
    }
    const editHandler = () => {
        setTitle('DOUBLE');
        console.log('Edit Handler!!!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div onDoubleClick={editHandler} className="expense-item__price">{props.amount}</div>
                <button onClick={clickHandler}>click hear</button>
            </div>
        </Card>)
}

export default ExpenseItem;