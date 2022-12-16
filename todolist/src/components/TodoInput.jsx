import React from 'react'
import { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [currentTodo ,setCurrentTodo] =useState("")
  return (
    <div>
        <input type="text" value={currentTodo}onChange={(e)=>setCurrentTodo(e.target.value)} />
        <button onClick={()=>{
            addTodo(currentTodo)
            setCurrentTodo("")
        }}>addTodo</button>
    </div>
  )
}

export default TodoInput