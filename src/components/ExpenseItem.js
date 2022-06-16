import './ExpenseItem.css';

//need not necessary to name it props(also called attributes)
//in props we get the key value pair of the attributes of teh TAG
function ExpenseItem(props) {
    // Outputting Dyanmic Data
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = '230.05';

    return (
        <div className ="expense-item">
            <div>{props.expenseDate.toISOString()}</div>
            <div className = "expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;