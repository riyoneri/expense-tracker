import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

import './Expenses.css'
import { useState } from 'react'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses Found.</p>

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense => 
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        )
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    )
}

export default Expenses