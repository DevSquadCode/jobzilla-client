import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
  <nav className="navbar shadow fixed-top navbar-expand-lg navbar-light bg-transparent">
  <div className="container">
   <Link className="navbar-brand" to="/"> <h2>JOBZILLA</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <Link id='menu' className="nav-link" aria-current="page" to="/home">HOME</Link>
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
                <Link id='menu' className="nav-link" to='/blogs'> BLOG</Link>
        </li>
        {/* <li className="nav-item">
                <Link id='menu' className="nav-link" to='/showCandidateProfile'> DASHBOARD</Link>
        </li> */}
        <li className="nav-item">
                <Link id='logMenu' className="nav-link" to='/login'>LOG IN</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Header;