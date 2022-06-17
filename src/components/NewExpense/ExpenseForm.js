import React, { useSate, useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //using state here to detach the variable from the lifecycel of teh components, so that even if the components are reevaluated the variable still exixts.

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //since all 3 states are related to our form, so we might take 1 state only.
    //catch is we need to update all 3 of them

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    //Whenever we update state and we depend on previous value, we do it using a function.
    //As React schedules state updates, so we could be depending upon an outdated value
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) =>{
        //     return({
        //         ...prevInput,
        //         enteredTitle: event.target.value
        //     });
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) =>{
        //     return({
        //         ...prevInput,
        //         enteredAmount: event.target.value
        //     });
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) =>{
        //     return({
        //         ...prevInput,
        //         enteredDate: event.target.value
        //     });
        // });
    };

    const SubmitHandler = (event) => {
        //prevent site reloading or request sending on form submit button.
        event.preventDefault();

        //creating a common object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //clearing the input fields
        //add value attribute to inputs
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        //passing it to parent component
        props.onSaveExpenseData(expenseData);
    };

    return (
        <form onSubmit ={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value = {enteredTitle}type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value = {enteredAmount}type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value = {enteredDate}type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;