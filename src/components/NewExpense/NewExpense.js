import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

    //function to get data from children component
    //here expenseData receives thedata from child component as parameter
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return(
        <div className = 'new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;