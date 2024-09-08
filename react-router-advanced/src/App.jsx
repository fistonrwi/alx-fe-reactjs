// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost";  // Import the BlogPost component
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          {isAuthenticated ? (
            <>
              <a href="/profile">Profile</a>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<BlogPost />} /> {/* Add this line */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
