import "../Login/Login.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <div className="login-form">
                <form className="form-horizontal">
                    <div className="login-form-brand">
                        <img src="Images/Shree-om-logo.png" alt="shree om logo"/>
                    </div>
                    <div className="mb-3 text-center text-muted">
                        <h4>Forgot Password</h4>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email">Email Address</label>
                        <input type="email" name="email" className="form-control" id="email" />
                    </div>
                    <div className="mt-4 d-grid mb-3">
                        <button type="button" className="btn btn-block common-button mb-3">SEND RESET LINK</button>
                    </div>
                    <div className="mb-3 forgot-password">
                        <Link to="/">SIGN IN</Link>
                    </div>
                </form>
            </div>
        </>
    );
    
}

export default ForgotPassword;