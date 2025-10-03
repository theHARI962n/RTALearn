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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
    {/* Public */}
     <Route path="/" element={<LandingPage/>} />
     <Route path="/login" element={<LoginPage/>} />
     <Route path="/register" element={<RegisterPage/>} />

    {/* Protected: Student */}
     <Route path="/dashboard" 
     element={
      <ProtectedRoute role="student">
          <UserDashboard />
      </ProtectedRoute>
     } />

    {/* Both (admin + student) */}
     <Route path="/profile" 
     element={
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
     } />

    {/* Protected: Admin */}
     <Route path="/admin" 
     element={
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
     } />

    </Routes>
  )
}

export default App
