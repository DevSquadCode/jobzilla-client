import React from 'react';
import './Sidebar.css';
import { AiFillControl, AiFillFileAdd, AiTwotoneHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                <Link to="/home" className="text-white link">
                    <AiTwotoneHome /> <span>Home</span>
                </Link>
                
                </li>
                <li>
                <i class="fas fa-briefcase"></i> <span>Applied Jobs</span>

                </li>
                <li>
                <i class="fas fa-list-ul"></i> <span>Job Listing</span>
                </li>
                <li>
                <i class="fas fa-file"></i> <span>Add Resume</span>
                </li>
                <li>
                <i class="fas fa-address-card"></i> <span>User Profile</span>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;