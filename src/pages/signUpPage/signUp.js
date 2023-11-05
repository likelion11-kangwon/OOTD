import '../../styles/signUp.scss';
import Wave from '../../assets/images/wave.png';
import Confirm from '../../assets/images/confirm.svg';

function SignUp() {
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
                            <div className="username">username</div>
                            <div className="username-rectangle" />
                        </div>
                        <div className="id-box">
                            <div className="id">id</div>
                            <div className="id-confirm">
                                <img
                                    src={Confirm}
                                    alt="confirm"
                                    className="confirm"
                                />
                            </div>
                        </div>
                        <div className="password-box">
                            <div className="password">password</div>
                            <div className="password-rectangle" />
                        </div>
                        <div className="password-check-box">
                            <div className="password-check">password check</div>
                            <div className="password-check-confirm">
                                <img
                                    src={Confirm}
                                    alt="confirm"
                                    className="confirm"
                                />
                            </div>
                        </div>
                        <div className="continue">continue</div>
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
