import React, { useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import Footer from './Footer';

const NetflixLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters');
      isValid = false;
    }

    if (isValid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert('Login successful (simulated)');
      }, 1500);
    }
  };

  return (
    <div className="netflix-login-container">
      <div className="netflix-login-background">
      <header className="netflix-login-header">
        <div>
        <img 
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
          />
        </div>
      </header>
      
      <div className="netflix-login-card">
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'error' : ''}
              required
            />
            <label htmlFor="email" className={email ? 'filled' : ''}>Email or mobile number</label>
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'error' : ''}
              required
            />
            <label htmlFor="password" className={password ? 'filled' : ''}>Password</label>
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          <Link to="/">
          <button type="submit" className="signin-button" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button></Link>
          <h2 className="gap">OR</h2>
          <button className="Signin-code" onClick={handleSubmit}>Use a Sign-In-Code</button>
          
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          
          <div className="help-links">
            <a href="#">Need help?</a>
          </div>
        </form>
        
        <div className="signup-option">
          <p>New to Netflix? <a href="#">Sign up now</a>.</p>
        </div>
        
        <div className="recaptcha-notice">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="#"> Learn more.</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default NetflixLogin