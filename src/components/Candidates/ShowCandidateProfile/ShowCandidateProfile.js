import React from 'react';
import { Badge } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar'

const ShowCandidateProfile = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>

            <div className="col-md-10">
                <h3>Candidate Profile</h3>
                <div className="d-flex justify-content-around">
                    <div>
                        <h4>Ashab Hussan</h4>
                        <h6>Email : test@test.com</h6>
                        <h6>Phone : +8801XXXXXXXXX</h6>
                        <h6>Address : Sylhet, Bangladesh</h6>
                    </div>
                    <img className='rounded-circle' src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 skills">
                        <h2 className='text-center'>Skills</h2>

                        <div className="ml-5 mb-5">
                            <Badge variant="info m-2">Javascript</Badge>
                            <Badge variant="info m-2">ES6</Badge>
                            <Badge variant="info m-2">React.js</Badge>
                            <Badge variant="info m-2">React Router</Badge>
                            <Badge variant="info m-2">Bootstrap</Badge>
                            <Badge variant="info m-2">Node.js</Badge>
                            <Badge variant="info m-2">Express.js</Badge>
                            <Badge variant="info m-2">MongoDB</Badge>
                            <Badge variant="info m-2">HTML5</Badge>
                            <Badge variant="info m-2">CSS3</Badge>
                            <Badge variant="info m-2">C</Badge>
                            <Badge variant="info  m-2">C++</Badge>
                            <Badge variant="info  m-2">Typescript</Badge>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <h2 className='text-center'>Education</h2>
                        <div className="ml-5 mb-5">
                            <h5 className='ml-4'>Leading University</h5>
                            <h6 className='ml-4' >B.Sc. (Honours) in Computer Science & Engineering <br />
                                January 2019 - Present <br />
                                CGPA: 3.85 (till 7th Semester)</h6>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6 skills">
                        <h2 className='text-center'>Job Experience</h2>

                        <div className="ml-5 mb-5">
                            <h5> Web Developer  | June 2019 - June 2020</h5>
                            <h6>Catalyst Education</h6>
                            <h6>Dhaka Bangladesh</h6>

                        </div>

                    </div>

                    <div className="col-md-6">
                        <h2 className='text-center'>Projects</h2>
                        <div className="ml-5 mb-1 d-flex justify-content-evenly">
                            <h5 className="ml-4"> Job Portal </h5>
                            <a href="http://localhost:3000/"> Live Link</a>
                            <a href="http://localhost:3000/"> Code </a>
                        </div>
                        <div className="ml-5 mb-1 d-flex justify-content-evenly">
                            <h5 className="ml-4"> Job Portal </h5>
                            <a href="http://localhost:3000/"> Live Link</a>
                            <a href="http://localhost:3000/"> Code </a>
                        </div>
                        <div className="ml-5  d-flex justify-content-evenly">
                            <h5 className="ml-4"> Job Portal </h5>
                            <a href="http://localhost:3000/"> Live Link</a>
                            <a href="http://localhost:3000/"> Code </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowCandidateProfile;