import React from 'react'
import { useContext } from 'react'
import globalContext from '../context/GlobalContext'

function Li({ spend}) {
  const { text, amount, id} = spend
  const{deleteTodo,updateSpend}=useContext(globalContext)
  return (

    <li className='list-item'>
      <h3 className={amount < 0 ? "expense-transaction" : "income-transaction"}>₹{amount}</h3>
      <h4>{text}</h4>
      <button id="del-btn"
       className="btn waves-effect waves-light red darken-3 ms-5"
       onClick={()=> deleteTodo(spend.id)}>X</button>



      <button id="edit-btn"
       className="btn waves-effect waves-light yellow darken-3 "onClick={()=>updateSpend(spend)}>E</button>
      
    </li>
  )
}

export default Li