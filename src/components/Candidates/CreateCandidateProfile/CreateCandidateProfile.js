import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './CreateCandidateProfile.css'

const CreateCandidateProfile = () => {

    const [profile, setProfile] = useState()


    return (
        <div className="formField">
            <div className="row">
           <div className="col-md-2">
            <Sidebar></Sidebar>
           </div>

           <div className="col-md-10">
           <form action="">
               <div className="row m-3 d-flex align-items-center">
                 <div className="col-md-4">
                        <h3><i class="fas fa-info-circle"></i> Basic Information:</h3>
                        <input className="name" type="text" name="" placeholder="Your Name" id="" required />
                        <br /><br />
                        <input className="email" type="email" placeholder="Your Email" name="" id="" required/>
                        <br /><br />
                        <input className="number" type="number" name="" placeholder="Your Phone Number" id="" required />
                        <br /><br />
                        <h5>Upload Your Photo:</h5>
                        <input className="file" type="file" required/>
                        <br /><br />
                        <input className="presentAddress" type="text" placeholder="Present Address" required/>
                        <br /><br />
                        <input className="permanentAddress" type="text" placeholder="Permanent Address" required/>
                        <br /><br />
                        <h4><i class="fas fa-school"></i> Education:</h4>
                        <input className="educationLevel" type="text" placeholder="Education Level" required/>
                        <br /><br />
                        <input className="degree" type="text" placeholder="Degree Title" required/>
                        <br /><br />
                        <input className="institution" type="text" placeholder="Institution Name" required/>
                        <br /><br />
                        <input className="passingYear" type="text" placeholder="Passing Year" required/>
                 </div>

                 <div className="col-md-4">
                     <h4><i class="fas fa-user-md"></i> Job Experience:</h4>
                     <input className="jobTitle" type="text" placeholder="Job Title"/>
                     <br /><br />
                     <input className="company" type="text" placeholder="Company"/>
                     <br /><br />
                     <h6>Start Date:</h6>
                     <input className="startDate" type="date"/>
                     <h6 className="mt-2">End Date:</h6>
                     <input className="endDate" type="date"/>
                     <br /><br />
                     <h4><i class="fab fa-battle-net"></i> Skill Set:</h4>
                     <input className="skillName" type="text" placeholder="Skill Name" required/>
                     <br /><br />
                     <input className="experience" type="text" placeholder="Experience in Year" required/>
                     <br /> <br />
                     <h4><i class="fas fa-link"></i> Important Links:</h4>
                     <input className="github" type="url" placeholder="Github" required />
                     <br /><br />
                     <input className="linkedIn" type="url" placeholder="Linked In" required/>
                     <br /><br />
                     <input className="portfolio" type="url" placeholder="Portfolio" required/>
                 </div>

                 <div className="col-md-4">
                     <h4><i class="fas fa-tasks"></i> Projects:</h4>
                     <h5>Project-1:</h5>
                     <input className="projectField" type="text" placeholder="Project Name" required/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link" required/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link" required/>
                     <br /><br />
                     <h5>Project-2:</h5>
                     <input className="projectField" type="text" placeholder="Project Name" required/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link" required/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link" required/>
                     <br /><br />
                     <h5>Project-3:</h5>
                     <input className="projectField" type="text" placeholder="Project Name" required/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link" required/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link" required/>
                 </div>
                 <button  type="submit" className="btn btn-info">Submit</button>
               </div>
            </form>
           </div>

        </div>
        </div>
    );
};

export default CreateCandidateProfile;