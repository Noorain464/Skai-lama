import React from 'react';
import './SignIn.css'; 

const SignIn = () => {
  return (
    <div className="signin-page">
      <div className="left-section">
        <div className="branding">
          <img src="/path/to/logo.png" alt="Ques.AI Logo" className="logo" /> 
          <h1>Your podcast </h1>
          <h1>will no longer </h1>
          <h1>be just a hobby.</h1>
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>
      <div className="right-section">
        <div className="signin-form">
          <img src="/path/to/icon.png" alt="Ques.AI Icon" className="icon" />
            <h1 id="welcome">Welcome to</h1>
            <h1 id="quesai">Ques.AI</h1>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="form-footer">
              <div>
                <input type="checkbox" id="remember" />
                <label>Remember me</label>
              </div>
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="signin-button">Login</button>
            <div className="divider">or</div>
            <button type="button" className="google-button">
              <img src="/path/to/google-logo.png" alt="Google Logo" />
              Continue with Google
            </button>
            <p className="footer-text">
              Don't have an account? <a href="/signup">Create Account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
