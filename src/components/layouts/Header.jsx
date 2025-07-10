import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import EngFlag from "../../assets/images/uk-flag.svg";
import UzbFlag from "../../assets/images/uzb-flag.svg";
import "./Header.css";

const Header = () => {
  const [lang, setlang] = useState("eng");
  const handeChange = (e) => setlang(e.target.value);

  const flagScr = lang === "eng" ? EngFlag : UzbFlag;

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="right">
            <ul className="nav__menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/programs">Programs</NavLink>
              </li>
              <li>
                <NavLink to="/finance">Finance tools</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="language">
            <img
              src={flagScr}
              alt={`${lang} flag`}
              className={lang === "uzb" ? "flag flag--uzb" : "flag"}
            />
            <select name="" id="" onChange={handeChange}>
              <option value="eng">Eng</option>
              <option value="uzb">Uzb</option>
            </select>
          </div>
          <button>
            <Link to="/sign">Sign up</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
