import './ExpenseItem.css';

//need not necessary to name it props(also called attributes)
//in props we get the key value pair of the attributes of teh TAG
function ExpenseItem(props) {
    const month = props.expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = props.expenseDate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className ="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className = "expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;