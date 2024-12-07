import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState("");  
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();  

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");  // Reset error message

        try {
            const response = await axios.post('http://localhost:3000/api/user/register', formData);

            if (response.data.success) {
                alert('Successfully registered! Please log in to your account.');
                navigate('/login');  
            } else {
                setErrorMessage(response.data.message || 'Error occurred. Please try again.');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-left">
                <h2>Welcome Back!</h2>
                <p className='reg_1'>To keep connected with us please login with your personal info</p>
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
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="signup-button" disabled={loading}>
                        {loading ? 'Registering...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
