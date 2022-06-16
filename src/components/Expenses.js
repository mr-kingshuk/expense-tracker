import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                expenseDate={props.expenses[0].date}
                expenseTitle={props.expenses[0].title}
                expenseAmount={props.expenses[0].amount} />

            <ExpenseItem
                expenseDate={props.expenses[1].date}
                expenseTitle={props.expenses[1].title}
                expenseAmount={props.expenses[1].amount} />

            <ExpenseItem
                expenseDate={props.expenses[2].date}
                expenseTitle={props.expenses[2].title}
                expenseAmount={props.expenses[2].amount} />

            <ExpenseItem
                expenseDate={props.expenses[3].date}
                expenseTitle={props.expenses[3].title}
                expenseAmount={props.expenses[3].amount} />
        </Card>
    );
}

export default Expenses;