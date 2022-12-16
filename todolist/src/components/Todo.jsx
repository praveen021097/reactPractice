import React from 'react'
import { useState } from 'react'
import {nanoid} from "nanoid"
import TodoInput from './TodoInput';
import Todolist from './Todolist';
const Todo = () => {
    const [todo,setTodo] =useState([]);

    const addTodo =(value)=>{
        const payload = {
            task:value,
            status:false,
            id:nanoid(4)
        }

        setTodo([...todo,payload])
    }
    console.log(todo)

    const deleteTask =(id)=>{
        if(todo.length>0){
            const newTodo = todo.find((el)=>el.id !== todo.id);
            console.log("newTodo",newTodo);
            setTodo(newTodo)
        }
    }
  return (
    <div>
       <TodoInput addTodo={addTodo} />
       <Todolist todo={todo} deleteTask={deleteTask}/> 
    </div>
  )
}

export default Todo