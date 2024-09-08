// src/hooks/useAuth.js
import { useState } from 'react';

// A simple hook to simulate authentication
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to simulate logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

export default useAuth;
