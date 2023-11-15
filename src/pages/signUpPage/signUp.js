import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/signUp.scss';
import Wave from '../../assets/images/wave.png';
import Confirm from '../../assets/images/confirm.svg';

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        loginId: '',
        password: '',
        passwordCheck: '',
    });

    const [isPasswordMatch, setIsPasswordMatch] = useState(null);

    const handleInputChange = e => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        if (id === 'passwordCheck') {
            const passwordMatch = formData.password === value;
            setIsPasswordMatch(passwordMatch);

            const passwordCheckConfirm = document.querySelector(
                '.password-check-confirm .confirm',
            );

            if (passwordCheckConfirm) {
                if (passwordMatch) {
                    passwordCheckConfirm.style.fill = 'green';
                } else {
                    passwordCheckConfirm.style.fill = 'red';
                }
            }
        }
    };

    const handleSignUp = () => {
        if (
            formData.username &&
            formData.loginId &&
            formData.password &&
            formData.passwordCheck &&
            isPasswordMatch
        ) {
            try {
                axios.post('/api/auth/register', formData, {
                    withCredentials: true,
                });
                navigate('/');
            } catch (error) {
                console.error('Error during signup:', error);
            }
        } else {
            alert(
                'Please fill in all required fields and check your information.',
            );
        }
    };

    return (
        <div className="signup-frame">
            <div className="signup-box">
                <div className="service-name-signup">
                    <div className="service-name">
                        <div className="what-is">What is</div>
                        <div className="your-ootd">your ootd</div>
                    </div>
                    <div className="username-id-password-check">
                        <div className="username-box">
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            <div className="username-rectangle" />
                        </div>
                        <div className="id-box">
                            <input
                                type="text"
                                id="loginId"
                                placeholder="Enter your ID"
                                value={formData.loginId}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="password-box">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <div className="password-rectangle" />
                        </div>
                        <div className="password-check-box">
                            <input
                                type="password"
                                id="passwordCheck"
                                placeholder="Confirm your password"
                                value={formData.passwordCheck}
                                onChange={handleInputChange}
                            />
                            <div className="password-check-confirm">
                                <img
                                    src={Confirm}
                                    alt="confirm"
                                    className="confirm"
                                    style={{
                                        fill:
                                            isPasswordMatch === null
                                                ? 'initial'
                                                : isPasswordMatch
                                                ? 'green'
                                                : 'red',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="continue" onClick={handleSignUp}>
                            continue
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

export default SignUp;
