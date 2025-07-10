import React from "react";
import "./index.css";
import { FiMail } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import logo from "../../assets/images/Logo.svg";
import login from "../../assets/images/loginpage-img.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <div className="container">
        <div className="login-total">
          <div className="login-aside">
            <div className="aside-top">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <p>Questions?</p>
                <b>
                  <h3>Ask Diyor</h3>
                </b>
              </div>
            </div>
            <div className="aside-bottom">
              <h1>Get started</h1>
              <form action="" className="aside-bottom-form">
                <div className="input-box">
                  <input type="email" placeholder="Enter your email" />
                  <FiMail className="login-icons" />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Password" />
                  <FaRegEyeSlash className="login-icons" />
                </div>
              </form>
              <button className="sigin-btn">Sign in</button>
              <div className="sigin-link">
                <Link to="/login">Create a new account !</Link>
              </div>
            </div>
          </div>

          <div className="login-side-img">
            <img src={login} alt="" />
            <p>
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
