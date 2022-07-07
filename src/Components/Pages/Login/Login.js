import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    function login (){
        navigate('/layout/dashboard')
    }
    return (
        <>
            <div className="login-form">
                <form className="form-horizontal">
                    <div className="login-form-brand">
                        <img src="Images/Shree-om-logo.png" alt="shree om logo"/>
                    </div>
                    <div className="mb-3 text-center text-muted">
                        <h4>Login</h4>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email">Email Address</label>
                        <input type="email" name="email" className="form-control" defaultValue="example@xyz.com" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="password" className="form-control" defaultValue="password" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" name="keepMeLoggedIn"  className="form-check-input" id="keepMeLoggedIn" />
                        <label htmlFor="keepMeLoggedIn" className="form-check-label">Keep me logged in</label>
                    </div>
                    <div className="mt-4 d-grid mb-3">
                        <button type="button" className="btn btn-block common-button mb-3" onClick={login}>LOGIN</button>
                    </div>
                    <div className="mb-3 forgot-password">
                        <Link to="forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </>
    );
    
}

export default Login;