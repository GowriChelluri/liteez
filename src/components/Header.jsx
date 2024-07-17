import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="bg-orange py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Logo"
            className="ml-3"
            style={{ height: '100px' }}
          />
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link fs-5 text-dark fw-bold" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link fs-5 text-dark fw-bold ">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/story" className="nav-link fs-5 text-dark fw-bold">
                    Story
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link fs-5 text-dark fw-bold">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reviews" className="nav-link fs-5 text-dark fw-bold ">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link fs-5 text-dark fw-bold ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
