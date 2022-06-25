import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) =>{

    if(props.items.length === 0){
       return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((expense) => <ExpenseItem 
            key = {expense.id} 
            expenseDate={expense.date}
            expenseTitle={expense.title}
            expenseAmount={expense.amount} />)}
        </ul>
    );

};

export default ExpensesList;