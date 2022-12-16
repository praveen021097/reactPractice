import React from 'react'

const Todolist = ({todo,deleteTask}) => {
  return (
    <div>
        {todo.map((el)=>{
            return <div key={el.id}>
                    <h2>{el.task}</h2>
                    <span>{el.status}</span>
                    <button onClick={()=>{
                        deleteTask(el.id)
                    }}>delete</button>
            </div>
        })}
    </div>
  )
}

export default Todolist