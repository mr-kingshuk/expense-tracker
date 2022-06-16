import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//need not necessary to name it props(also called attributes)
//in props we get the key value pair of the attributes of teh TAG
function ExpenseItem(props) {
    
    //forwarding data from props to children components or using the data

    return (
        //now here we are getting the styles of Card component

        //but if we want to use custom components as wrappers, we need to pass a props to Card.js and pass all the children components to it.(done in Card.js)

        //Now className is also passed as attribute instaed of acting as ClassName
        <Card className ="expense-item">
            <ExpenseDate date = {props.expenseDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;