import React, { useState,useEffect } from 'react'
import UL from './UL'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import globalContext from '../context/GlobalContext';

function MainSection() {
  const {spends,saveSpend, deleteTodo,updateSpend,edit,editSpend}=useContext(globalContext)
  const [text , setText]=useState("")
const [amount, setAmount]=useState("")
useEffect(()=>{
  setText(edit.spends.text)
  setAmount(edit.spends.amount)
},[edit])

const handleText =(e)=>{
  setText(e.target.value)
}
const handleAmount =(e)=>{
  setAmount(e.target.value)
  
}
const handleSubmit = (e) => {
  e.preventDefault()
  const transaction = {
    id: uuidv4(),
    text : text,
    amount : parseInt(amount)
  }
  if(edit.isEdit){

    // editSpend(edit.spends.id, text,amount)
    editSpend(edit.spends.id, transaction.text,transaction.amount)
  }
 else{
  saveSpend(transaction)
  
 }
 setAmount("")
  setText("")

}
const balance = spends.reduce((iv , item)=>{
  return iv+item.amount
},0)


  return (
    <div className="main-section">
      <div className="balance">
        <span>
            <p>Current Balance</p>
        <h1>₹{balance}</h1>
        </span>
      
    </div>
    <form className="transaction-form" onSubmit={(e)=>handleSubmit(e)}>
                <input value ={text} type="text" placeholder="Enter Your Transaction" required onChange = {(e)=>handleText(e)}/>
                <input value= {amount}type="number" placeholder="Enter Amount"required onChange ={(e)=>handleAmount(e)} />
                <button>Submit</button>
            </form>
        <UL spends={spends} deleteTodo={deleteTodo} updateSpend={updateSpend}/>
    </div>
    

  )
}

export default MainSection