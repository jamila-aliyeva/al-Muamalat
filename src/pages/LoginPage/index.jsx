import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMail, FiUser } from "react-icons/fi";
import logo from "../../assets/images/Logo.svg";
import login from "../../assets/images/loginpage-img.svg";

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <div className="login-total">
          <div className="login-aside">
            <div className="aside-top">
              <div>
                <img src={logo} alt="" />
              </div>
              {/* <div>
                <p>Questions?</p>
                <b>
                  <h3>Ask Diyor</h3>
                </b>
              </div> */}
            </div>
            <div className="aside-bottom">
              <h1>Get started</h1>
              <div className="aside-bottom-link">
                <p>Already have an account?</p>
                <b>
                  <NavLink to="/sign">Sign in</NavLink>
                </b>
              </div>
              <form action="" className="aside-bottom-form">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" />
                  <FiUser className="login-icons" />
                </div>
                <div className="input-box">
                  <input type="email" placeholder="Enter your email" />
                  <FiMail className="login-icons" />
                </div>
                <div className="select-box">
                  <select name="" id="">
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Russia">Russia</option>
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </form>
              <button className="login-btn">Log in</button>
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

export default LoginPage;
