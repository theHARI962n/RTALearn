// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './AdminPages/AdminDashboard'
import ProfilePage from './pages/ProfilePage'


function App() {
  return (
    <Routes>
     <Route path="/" element={<LandingPage/>} />
     <Route path="/login" element={<LoginPage/>} />
     <Route path="/register" element={<RegisterPage/>} />
     <Route path="/dashboard" element={<UserDashboard/>} />
     <Route path="/profile" element={<ProfilePage/>} />
     <Route path="/admin" element={<AdminDashboard/>} />
    </Routes>
  )
}

export default App
