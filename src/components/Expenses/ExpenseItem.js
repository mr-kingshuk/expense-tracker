import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//need not necessary to name it props(also called attributes)
//in props we get the key value pair of the attributes of teh TAG
const ExpenseItem = (props) => {
    //Directly inside component
    //returns 2 values and receives an INITIAL value
    // const [title, setTitle] = useState(props.expenseTitle);
    
    // const clickHandler = ()=>{
    //     // instead of directly changing the title variable we call teh state changing function
    //     setTitle('Updated');
    // };

    //forwarding data from props to children components or using the data
    return (
        //now here we are getting the styles of Card component

        //Now className is also passed as attribute instaed of acting as ClassName
        <Card className ="expense-item">
            <ExpenseDate date = {props.expenseDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
            
            {/* <button onClick = {clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;