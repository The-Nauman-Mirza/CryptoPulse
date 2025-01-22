
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Log In</h2>
        <div className="loginform-group">
          <label>Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="loginform-group">
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
        <p className="login-link" style={{ textAlign: "center", marginTop: "1rem" }}>
          Don&apos;t have an account ? {" "}
          <span onClick={() => { navigate('/signup') }} style={{ color: "#00ff88", cursor: "pointer" }}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
