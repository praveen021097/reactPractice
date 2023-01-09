import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput';
import Todolist from './Todolist';

const Todo = () => {
    const [data,setData] = useState([]);

    const [isLoading,setIsLoading] =useState(true);
    const [isError,setIsError] = useState(false);
    useEffect(()=>{
        getTodo();
    },[])
    const getTodo =()=>{
        fetch("http://localhost:8080/todo")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
        })
        .catch(()=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
const addTodo =(title)=>{
    const payload={
        task:title,
        status:false
    }
setIsLoading(true)
    fetch("http://localhost:8080/todo",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json)
    .then((data)=>{
        return getTodo();
    })
    .catch((err)=>{
        setIsError(true)
    })
    .finally(()=>{
        setIsLoading(false)
    })

}
console.log(data)
  return (
    <div>
        {
            isLoading?<div>data is loading...</div>:isError?<div>something went wrong...</div>:<div>
                <TodoInput addTodo={addTodo}/>
                <Todolist todo={data}/>
            </div>
        }
    </div>
  )
}

export default Todo
