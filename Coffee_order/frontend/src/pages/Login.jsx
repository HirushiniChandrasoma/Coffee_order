import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { useForm } from 'react-hook-form';  
import axios from 'axios';  
import './login.css';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();  

    const [errorMessage, setErrorMessage] = useState("");  
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();  

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage("");  // Reset error message on new submit

        try {
            const response = await axios.post('http://localhost:3000/api/users/login', data);
            if (response.data.success) {
                
                // Store token in local storage
                localStorage.setItem('token', response.data.token);

                // Extract the user's full name from the response, defaulting to "User" if not found
                const userName = response.data.user?.full_name || "User";

                // Display a welcome alert with the user's name
                alert(`Login successful! Welcome back, ${userName}.`);

                // Redirect the user to the homepage
                navigate('/');  
            } else {
                setErrorMessage(response.data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);  
        }

        // Reset the form after submission
        reset();  
    };

    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form-container">
                <h2>Welcome</h2>
                <p>Log in to your account to continue</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="awesome@user.com"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot your password?</a>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging In...' : 'Log In'}
                    </button>
                </form>
                <p className="sign-up">
                    Don't have an account?
                    <Link to="/register">
                        <button className='signup-button'>Sign Up!</button>
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
