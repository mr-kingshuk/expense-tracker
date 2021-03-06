import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expenseContent = <p>No expenses found.</p>;

    // if(filteredExpenses.length > 0){
    //     expenseContent = filteredExpenses.map((expense) => <ExpenseItem 
    //     key = {expense.id} 
    //     expenseDate={expense.date}
    //         expenseTitle={expense.title}
    //         expenseAmount={expense.amount} />)
    // }


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses = {filteredExpenses}/>  

                {/* Mapping the expense array to an array of ExpenseItem Component */}

                {/* filteredExpenses.length === 0 && <p>No expenses found.</p> */}
                { /* filteredExpenses.length > 0 && 
            filteredExpenses.map((expense) => <ExpenseItem 
            key = {expense.id} 
            expenseDate={expense.date}
                expenseTitle={expense.title}
            expenseAmount={expense.amount} />) */}

                {/* expenseContent */}

                <ExpensesList items={filteredExpenses} />

            </Card>
        </li>
    );
}

export default Expenses;