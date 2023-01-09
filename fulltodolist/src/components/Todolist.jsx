import React from 'react'

const Todolist = ({todo}) => {
  return (
    <div>{
      todo.map((item)=>{
        return <div key={item.key}>
          <li>{
            item.task
            
            }{item.status}</li>
        </div>
      })
      }</div>
  )
}

export default Todolist