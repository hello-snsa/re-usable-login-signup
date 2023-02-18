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
            
            <ProtectedRoute path="profile" component={<Profile />} />
        </Routes>
    )
}
