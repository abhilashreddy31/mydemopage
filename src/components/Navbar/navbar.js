import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import memu from "../../asserts/menu.png"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`navbar ${showMenu ? 'active' : ''}`}>
      <btn className="toggle-btn" onClick={toggleMenu}>
          <img className='memu' src={memu}></img>
        </btn>
      <div className="navbar-left">
        
        <nav className={showMenu ? 'show-menu' : ''}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                Schedules
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleMenu}>
                Membership
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-right">
    
        
        <Link to="/profile" onClick={toggleMenu}>
          Offers
        </Link>
        <button className='courses-btn' onClick={toggleMenu}>Courses</button>
      </div>
    </header>
  );
};

export default Navbar;
