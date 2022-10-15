import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    // <div>
    //   <header>
    //     <a href="/" id="logo">
    //       <img className="logo-image" src="../../assests/rjlogo.png" alt="" />
    //     </a>

    //     <div></div>
    //   </header>
    // </div>

    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              className="logo-image"
              src="../../assests/AVILogo.png"
              alt=""
            />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links nav-btn"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
