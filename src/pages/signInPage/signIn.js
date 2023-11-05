import '../../styles/signIn.scss';
import Wave from '../../assets/images/wave.png';

function SignIn() {
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
                                <div className="id">id</div>
                            </div>
                            <div className="password-box">
                                <div className="password">password</div>
                            </div>
                        </div>
                        <div className="login-signup">
                            <div className="login">Log in</div>
                            <div className="signup">Sign up</div>
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
