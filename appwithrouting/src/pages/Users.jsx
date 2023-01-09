import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false)
const getUsers =()=>{
    fetch("http://localhost:8080/users")
    .then((res)=>res.json())
    .then((data)=>{
        setData(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setIsError(true)
    })
}
    useEffect(()=>{
           
                getUsers();
            
    },[])
  return (
    <div>
        <Navbar />
        {isLoading?<div>loading...</div>:isError?<div>something went wrong..</div>:<div>
            {
                data.map((item)=>{
                    return <div key={item.id}>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                       <Link to={`/users/${item.id}`}>
                       
                        <img src={item.avtar} alt="" />
                       
                       </Link>
                    </div>
                })
            }
            
            </div>}
    </div>
  )
}

export default Users