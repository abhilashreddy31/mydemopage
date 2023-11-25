import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Schedules</Link>
            </li>
            <li>
              <Link to="/portfolio">Membership</Link>
            </li>
            <li>
              <Link to="/contact">Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-right">
       
        <Link to="/profile">Offers</Link>
        <button>Courses</button>
      </div>
    </header>
  );
};

export default Navbar;
