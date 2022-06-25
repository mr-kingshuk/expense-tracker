import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} />

            {/* Mapping the expense array to an array of ExpenseItem Component */}

            {props.expenses.map(expense => <ExpenseItem 
            key = {expense.id} 
            expenseDate={expense.date}
                expenseTitle={expense.title}
                expenseAmount={expense.amount} />)};


        </Card>
    );
}

export default Expenses;