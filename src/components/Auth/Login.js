import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const show = () => {
        const p = document.getElementById('pwd');
        p.setAttribute('type', 'text');
    };

    const hide = () => {
        const p = document.getElementById('pwd');
        p.setAttribute('type', 'password');
    };

    const handleEyeClick = () => {
        if (showPassword) {
            hide();
        } else {
            show();
        }
        togglePasswordVisibility();
    };

    return (
        <div className="overlay">
            <form onSubmit={handleSubmit} className='formstyles'>
                <div className="con">
                    <header className="head-form">
                        <h2>Log In</h2>
                        <p>Login here using your username and password</p>
                    </header>
                    <br />
                    <div className="field-set">
                        <span className="input-item">
                            <i className="fa fa-user-circle"></i>
                        </span>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="@UserName"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <span className="input-item">
                            <i className="fa fa-key"/>
                        </span>
                        <input
                            className="form-input"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            id="pwd"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>
                            <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                type="button"
                                id="eye"
                                onClick={handleEyeClick}
                            />
                        </span>
                        <br />
                        <button className="log-in">Log In</button>
                    </div>
                    <div className="other">
                        <button className="btn submits frgt-pass" style={{color:"white"}}>Forgot Password</button>
                        <button className="btn submits sign-up">
                            Sign Up
                            <i className="fa fa-user-plus" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
