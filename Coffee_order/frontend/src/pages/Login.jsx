import React from 'react';
import { Link } from "react-router-dom";
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form-container">
                <h2>Welcome</h2>
                <p>Log in to your account to continue</p>
                <form>
                    <div className="input-field">
                        <input type="email" placeholder="awesome@user.com" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <p className="sign-up">
                    Don't have an account? 
                    <Link to="/register">
                         <button className='signup-button' >Sign Up!</button>
                    </Link>
                </p>
                <div className="social-login">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    );
}

export default Login;
