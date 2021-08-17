import React, { useContext } from 'react';
import './Sidebar.css';
import { AiTwotoneHome, AiOutlineProfile } from "react-icons/ai";
import { IoCreate } from "react-icons/io5";
import { MdRateReview, MdWork } from "react-icons/md";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'
import { useState } from 'react';
import { useEffect } from 'react';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [role, setRole] = useState(false);
    console.log(role);

    useEffect(() => {
        fetch('https://aqueous-cove-89051.herokuapp.com/getUserRole?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setRole(data[0].role))
    }, []);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white link"><AiTwotoneHome /> Home</Link>
                </li>

                {
                    role === 'Candidate' &&
                    <>
                        <li>
                            <Link to="/showCandidateProfile" className="text-white link"><AiOutlineProfile /> Candidate Profile</Link>
                        </li>

                        <li>
                            <Link to="/createCandidateProfile" className="text-white link"><IoCreate /> Create Profile</Link>
                        </li>
                    </>
                }

                {
                    role === 'Recruiter' &&
                    <li>
                        <Link to="/addJob" className="text-white link"><MdWork /> Post Job</Link>
                    </li>
                }

                <li>
                    <Link to="/addReview" className="text-white link"><MdRateReview /> Add Review</Link>
                </li>



            </ul>

        </div>
    );
};

export default Sidebar;