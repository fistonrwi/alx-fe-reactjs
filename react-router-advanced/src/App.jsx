// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Ensure correct file extension and path
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
