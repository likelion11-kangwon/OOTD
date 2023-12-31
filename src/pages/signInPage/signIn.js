import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../../styles/signIn.scss';
import Wave from '../../assets/images/wave.png';

function SignIn() {
    const [formData, setFormData] = useState({
        loignId: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = e => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleLogin = () => {
        axios
            .post(`/api/auth/login`, formData, { withCredentials: true })
            .then(response => {
                navigate('/main');
            })
            .catch(error => {
                alert('로그인 오류: ' + error.message);
            });
    };

    const handleSignUp = () => {
        navigate('/signUp');
    };

    return (
        <div className="login-frame">
            <div className="login-box">
                <div className="service-name-login">
                    <div className="service-name">
                        <div className="what-is">What is</div>
                        <div className="your-ootd">your ootd</div>
                    </div>
                    <div className="id-password-login-signup">
                        <div className="id-password">
                            <div className="id-box">
                                <input
                                    type="text"
                                    id="loginId"
                                    placeholder="Enter your ID"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="password-box">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="login-signup">
                            <div className="login" onClick={handleLogin}>
                                Log in
                            </div>
                            <div className="signup" onClick={handleSignUp}>
                                Sign up
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-image">
                    <img src={Wave} alt="wave" className="wave" />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
