import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
import './Auth.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate login and redirect
    navigate(`/${role}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <GraduationCap size={28} />
          </div>
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Sign in to your account to continue</p>
        </div>

        <form className="auth-form" onSubmit={handleSignIn}>
          <div className="form-group">
            <label className="form-label">Sign in as</label>
            <select 
              className="form-input" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Administrator</option>
              <option value="instructor">Instructor</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="you@lumiere.com" 
              required 
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label className="form-label">Password</label>
              <a href="#" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <a href="#">Contact admin</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
