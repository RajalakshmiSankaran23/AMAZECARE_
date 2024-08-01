import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.jpg'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo image */}
          Amaze Care Hospitals
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/appointments/new" onClick={closeDropdown}>Appointments</Link>
            </li>
            <li className={`nav-item dropdown ${openDropdown === 'patients' ? 'show' : ''}`}>
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" onClick={() => toggleDropdown('patients')}>
                Patients
              </Link>
              <div className={`dropdown-menu ${openDropdown === 'patients' ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/patients/new" onClick={closeDropdown}>Add New Patient</Link>
                <Link className="dropdown-item" to="/patients/records/view" onClick={closeDropdown}>Medical Records</Link>
              </div>
            </li>
            <li className={`nav-item dropdown ${openDropdown === 'doctors' ? 'show' : ''}`}>
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" onClick={() => toggleDropdown('doctors')}>
                Doctors
              </Link>
              <div className={`dropdown-menu ${openDropdown === 'doctors' ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/doctors/new" onClick={closeDropdown}>Add New Doctor</Link>
                <Link className="dropdown-item" to="/doctors" onClick={closeDropdown}>Doctor List</Link>
              </div>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeDropdown}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers" onClick={closeDropdown}>Careers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeDropdown}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={closeDropdown}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin" onClick={closeDropdown}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
