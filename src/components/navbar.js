import React, { useState, useEffect  } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.inner <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="./images/logo-bg.png"
              width={155}
              height={50}
              alt="isdifds"
            />AGROACRES
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <i class="fa fa-bars"></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-links" onClick={closeMobileMenu}>
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" className="nav-links" onClick={closeMobileMenu}>
                SIGN UP
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
