import { createContext } from "react";
import { useState } from "react";

const globalContext =createContext()
export const GlobalProvider =({children})=>{
    const [spends, setSpends]= useState([])
  const [edit, setEdit]= useState({
     spends:{},
     isEdit:false
 })
  
const updateSpend =(data)=>{
  setEdit({
    spends: data,
    isEdit:true
  })


}

  const saveSpend =(element) =>{
    setSpends([...spends,element])
  }
  function deleteTodo(id){
    setSpends(spends.filter((item)=>item.id!==id))
 }
 function editSpend(id, text,amount){
   setSpends(spends.map((item)=> item.id === id ? {...item, text, amount} :item))
 }
 
return(
    <globalContext.Provider value={{
spends,
updateSpend,
saveSpend,
deleteTodo,
edit,
editSpend

    }} >
     {children}
    </globalContext.Provider>
)
}
export default globalContext