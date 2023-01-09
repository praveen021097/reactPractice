import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const {handelChangeAuth} =useContext(AuthContext);
    const firstRef = useRef()
    const lastRef = useRef()
    const avtarRef = useRef()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avtar: "",
  });
  const location =useLocation();
  const comingFrom = location?.state?.from?.pathname || "/";
  const navigate = useNavigate()
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>{
        handelChangeAuth(true);
        navigate(comingFrom,{replace:true})
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  console.log(formData);
  return (
    <div>
      <Navbar />
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            ref={firstRef}
            // value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            ref={lastRef}
            // value={formData.lastName}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="imageLink"
            name="avtar"
            ref={avtarRef}
            // value={formData.avtar}
            onChange={handleChange}
          />

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
