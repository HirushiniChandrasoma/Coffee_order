import React from 'react';
import { Link } from "react-router-dom";
import './login.css';

function Register() {
    return (
        <div className="register-container">
            <div className="register-left">
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <Link to="/login">
          <button className="signin-button">Sign In</button>
        </Link>
            </div>
            <div className="register-right">
                <h2>Create Account</h2>
                <div className="social-register">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
                <p>or use your email for registration:</p>
                <form>
                    <div className="input-field">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
