import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
  <nav className="navbar shadow fixed-top navbar-expand-lg navbar-light bg-transparent">
  <div className="container">
   <a className="navbar-brand" to="/"> <h2>JOBZILLA</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <a id='menu' className="nav-link" aria-current="page" to="/home">HOME</a>
        </li>
        <li className="nav-item">
          <a id='menu' className="nav-link" href="#">JOBS</a>
        </li>
        <li className="nav-item">
          <a id='menu' className="nav-link" href="#">CANDIDATES</a>
        </li>
        <li className="nav-item">
          <a id='menu' className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a id='menu' className="nav-link" href="#">REGISTER</a>
        </li>
        <li className="nav-item">
                <a id='menu' className="nav-link" to='/blogs'> BLOG</a>
        </li>
        <li className="nav-item">
                <a id='menu' className="nav-link" to='/showCandidateProfile'> DASHBOARD</a>
        </li>
        <li className="nav-item">
                <a id='logMenu' className="nav-link" to='/login'>LOG IN</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Header;