import React from 'react';
import headerStyle from './Header.module.css';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <h2 >JobZilla</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id='menu' className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a id='menu' className="nav-link" href="/">Jobs</a>
            </li>
            <li className="nav-item">
              <a id='menu' className="nav-link" href="/">Candidates</a>
            </li>
            <li className="nav-item">
              <a id='menu' className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a id='menu' className="nav-link" href="/">Register</a>
            </li>
            <li className="nav-item">
              <a id='menu' className="nav-link" href="/">Post a Job</a>
            </li>
            <li className="nav-item">
              <a id='logMenu' className="nav-link" href="/">Log In</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;