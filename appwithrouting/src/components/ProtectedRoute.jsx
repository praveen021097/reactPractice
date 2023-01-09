import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {isAuth} = useContext(AuthContext);
  const location = useLocation()
  if(!isAuth){
    return <Navigate to={"/login"} state={{from:location.state}} replace={true} />
  }
  return children
}

export default ProtectedRoute