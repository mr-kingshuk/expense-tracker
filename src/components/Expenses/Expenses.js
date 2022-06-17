import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) =>{
        setFilteredYear(year);
    }

    return (
            <Card className="expenses">
                <ExpensesFilter
                selected = {filteredYear}
                onChangeFilter = {filterChangeHandler} />
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