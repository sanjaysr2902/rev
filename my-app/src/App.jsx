import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { addtodo,deletetodo } from "./redux/todoSlice";
function App(){
  const[text,settext]=useState("");
  const dispatch=useDispatch();
  const todos=useSelector((state=>state.todos))
  const handle=function(){
    dispatch(addtodo(text))
  }
  return(
    <>
   
    <input type="text" value={text} placeholder="text" onChange={(e)=>settext(e.target.value)}/>
    <button onClick={handle}>press</button>
    <ul>
    {todos.map((todo,index)=>(
      
    <li key={index}>{todo}</li>
    ))

    }</ul>
 
    
    
    
    
    </>
  )
}
   export default App;