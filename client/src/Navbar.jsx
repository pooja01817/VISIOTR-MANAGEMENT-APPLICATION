import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Custom CSS for additional styling

const Navbar = () => {
  useEffect(() => {
    const navbarLogo = document.querySelector('.navbar-logo');
    if (navbarLogo) {
      // Initial animation to move text from right to left
      navbarLogo.classList.add('scroll-from-right');
      
      // Toggle animation every 3 seconds
      setInterval(() => {
        navbarLogo.classList.toggle('scroll-from-left');
        navbarLogo.classList.toggle('scroll-from-right');
      }, 3000);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="navbar-brand mx-auto">
          <h1 className="navbar-logo">VISITOR MANAGEMENT SYSTEM</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

