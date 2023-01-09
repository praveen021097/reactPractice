import React from 'react'
import {Routes,Route} from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import Users from './Users';
import SingleUserDetails from './SingleUserDetails';
import Login from './Login';
import ProtectedRoute from '../components/ProtectedRoute';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/users/:id' element={<ProtectedRoute><SingleUserDetails /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
 </Routes>
  )
}

export default AllRoutes