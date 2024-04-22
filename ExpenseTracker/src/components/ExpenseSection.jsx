import React from 'react'
import { useContext } from 'react'
import globalContext from '../context/GlobalContext'

function ExpenseSection() {
   const {spends} = useContext(globalContext)

const income = spends.filter((item)=>{
    if(item.amount>0)
    {
        return true
    }
}).reduce((iv,item)=>{
    return iv+item.amount
},0)
   
const expense = spends.filter((item)=>{
    if(item.amount<0)
    {
        return true
    }
}).reduce((iv,item)=>{
    return iv+item.amount
},0)
   


  return (
    <div id="current-status" className="expense-section">
    <div id="income" className="balance">
        <span>
            <p>Incomes</p>
        <h1>₹{income}</h1>
        </span> 
    </div>
       
    <div id="expense" className="balance">
        <span>
            <p>Expenses</p>
        <h1>
            ₹{Math.abs(expense)}
            </h1>
        </span>
    </div>
</div>
  )
}

export default ExpenseSection