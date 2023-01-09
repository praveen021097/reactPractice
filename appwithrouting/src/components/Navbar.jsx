import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../components/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.Nav}>
        <Link to={"/"}><h1><i>pk</i></h1></Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar