import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Flag from "../../assets/images/uk-flag.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            {" "}
            <img src={Logo} alt="Logo" />{" "}
          </Link>
          <div className="right">
            <ul className="nav__menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Programs</NavLink>
              </li>
              <li>
                <NavLink to="/">Finance tools</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="language">
            <img src={Flag} alt="" />
            <select name="" id="">
              <option value="">Eng</option>
              <option value="">Uzb</option>
            </select>
          </div>
          <button>Sign up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
