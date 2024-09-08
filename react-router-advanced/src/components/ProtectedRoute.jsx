// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with your actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
