import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from '../components/Register';
import ProtectedRoute from './ProtectedRoute';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            {/* <ProtectedRoute path="profile" element={Profile } /> */}
            <Route exact path='/' element={<ProtectedRoute/>}>
                 <Route exact path='profile' element={<Profile/>}/>
             </Route>
        </Routes>
    )
}
