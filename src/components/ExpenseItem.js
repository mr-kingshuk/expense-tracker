import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//need not necessary to name it props(also called attributes)
//in props we get the key value pair of the attributes of teh TAG
function ExpenseItem(props) {
    
    //forwarding data from props to children components or using the data


    return (
        <div className ="expense-item">
            <ExpenseDate date = {props.expenseDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;