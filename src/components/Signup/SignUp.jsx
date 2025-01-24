
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <p className="login-link" style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account ? {""}
          <span onClick={() => { navigate('/login') }} style={{ color: "#00ff88", cursor: "pointer"}}>
            Log In
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
