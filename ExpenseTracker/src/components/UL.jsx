import React, { useContext } from 'react'
import globalContext from '../context/GlobalContext'
import Li from './Li'

function UL () {
  const {spends}=useContext(globalContext)
  return (
   <ul className="list-group">{
    spends.map((spend)=>
    <Li key={spend.id} spend ={spend} />
    )

   }
   
   </ul>
  )
}

export default UL