import React, { useRef } from "react";
import Dashboardimg from "../images/character.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="loginContainer">
          <div className="loginFormDetails">
            <img
              src={Dashboardimg}
              alt="dashboardImg"
              className="dashboardimg"
            />
            <p>User Dashboard</p>
          </div>
          <div className="loginForm">
            <h3>Login Or Register</h3>
            <form>
              <div className="formGroup">
                <p>Email</p>
                <input type="email" name="userEmail" required></input>
              </div>

              <div className="formGroup">
                <p>Password</p>
                <input type="password" name="userPassword" required></input>
              </div>

              <div className="formGroup">
                <button>Login</button>
              </div>
            </form>

            <span>OR</span>

            <div>
              <Link to="/Signup">
                <button className="registerForm">Create new account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
