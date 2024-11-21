import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';

// Components
const Home = () => {
  const { user } = useAuth();
  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      {user && <p>Hello, {user.displayName}!</p>}
      <p>This is the home page content.</p>
    </div>
  );
};

const Login = () => {
  const { signInWithGoogle, user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page">
      <h1>Login</h1>
      <button 
        onClick={signInWithGoogle} 
        className="google-button"
      >
        Sign in with Google
      </button>
    </div>
  );
};

function App() {
  const { user, logout } = useAuth();

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">Home</Link>
            <a 
              href="http://localhost:8080/h2-console" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              H2 Console
            </a>
          </div>
          <div className="nav-right">
            {user ? (
              <>
                <span>Hello, {user.displayName}</span>
                <button onClick={logout} className="logout-button">Logout</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithAuth;