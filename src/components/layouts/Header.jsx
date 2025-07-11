import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import EngFlag from "../../assets/images/uk-flag.svg";
import UzbFlag from "../../assets/images/uzb-flag.svg";
import "./Header.css";
import { Dropdown, Menu } from "antd";

const Header = () => {
  const [lang, setlang] = useState("eng");
  const [visible, setVisible] = useState(false);
  const handeChange = (e) => setlang(e.target.value);

  const flagScr = lang === "eng" ? EngFlag : UzbFlag;

  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setVisible(false);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/programs">
          International educational programs
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/programs/specialized">Specialized courses</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/programs/islamic-finance">
          Islamic Finance Literacy Course
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/programs/certification">Certification program</Link>
      </Menu.Item>
    </Menu>
  );

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
                <Dropdown
                  overlay={menu}
                  onVisibleChange={handleVisibleChange}
                  visible={visible}
                >
                  <NavLink
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    to="/programs"
                  >
                    Programs
                  </NavLink>
                </Dropdown>
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
