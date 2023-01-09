import React from 'react'
import { useState } from 'react'

const TodoInput = ({addTodo}) => {
  const [title,setTitle]=useState("");
  const addTask =()=>{
    addTodo(title);
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setTitle( e.target.value)}/>
      <button onClick={addTask}>addTodo</button>
    </div>
  )
}

export default TodoInput