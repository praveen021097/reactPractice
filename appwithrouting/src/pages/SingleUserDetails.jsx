import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const SingleUserDetails = () => {
    const {id} =useParams();
    const [current,setCurrent]= useState({})
    const [isLoading,setIsLoading]= useState(true);
    const [isError,setIsError]=useState(false)
    const getUser=(id)=>{
        fetch(`http://localhost:8080/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setCurrent(data)
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsError(true)
        })
    }
    useEffect(()=>{
        getUser(id)
    },[])
  return (
    <div>
        <Navbar />
        {
            isLoading?<div>loading..</div>:isError?<div>something went wrong...</div>:<div>
                <img src={current.avtar} alt="" />
                <h1>{`${current.firstName} ${current.lastName}`}</h1>
            </div>
        }
    </div>
  )
}

export default SingleUserDetails