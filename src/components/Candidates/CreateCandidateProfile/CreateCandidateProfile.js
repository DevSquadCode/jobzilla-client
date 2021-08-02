import React from 'react';
import './CeateCandidateProfile.css'

const CreateCandidateProfile = () => {
    return (
        <div className="row m-3">
           <div className="col-md-2">

           </div>

           <div className="col-md-10">
           <form action="">
               <div className="row d-flex align-items-center">
                 <div className="col-md-4">
                        <h3>Basic Information:</h3>
                        <input className="name" type="text" name="" placeholder="Your Name" id="" required />
                        <br /><br />
                        <input className="email" type="email" placeholder="Your Email" name="" id="" required/>
                        <br /><br />
                        <input className="number" type="number" name="" placeholder="Your Phone Number" id="" required />
                        <br /><br />
                        <h5>Upload Your Photo:</h5>
                        <input className="file" type="file" required/>
                        <br /><br />
                        <input className="presentAddress" type="text" placeholder="Present Address" />
                        <br /><br />
                        <input className="permanentAddress" type="text" placeholder="Permanent Address" />
                        <br /><br />
                        <h4>Education:</h4>
                        <input className="educationLevel" type="text" placeholder="Education Level" />
                        <br /><br />
                        <input className="degree" type="text" placeholder="Degree Title" />
                        <br /><br />
                        <input className="institution" type="text" placeholder="Institution Name" />
                        <br /><br />
                        <input className="passingYear" type="text" placeholder="Passing Year" />
                 </div>

                 <div className="col-md-4">
                     <h4>Job Experience:</h4>
                     <input className="jobTitle" type="text" placeholder="Job Title"/>
                     <br /><br />
                     <input className="company" type="text" placeholder="Company"/>
                     <br /><br />
                     <h6>Start Date:</h6>
                     <input className="startDate" type="date"/>
                     <h6 className="mt-2">End Date:</h6>
                     <input className="endDate" type="date"/>
                     
                     <br />
                     <br />
                     <h4>Skill Set:</h4>
                     <input className="skillName" type="text" placeholder="Skill Name"/>
                     <br /><br />
                     <input className="experience" type="number" placeholder="Experience in Year"/>

                     <br />
                     <br />
                     <h4>Important Links:</h4>
                     <input className="github" type="url" placeholder="Github" />
                     <br /><br />
                     <input className="linkedIn" type="url" placeholder="Linked In" />
                     <br /><br />
                     <input className="portfolio" type="url" placeholder="Portfolio" />
                 </div>

                 <div className="col-md-4">
                     <h4>Projects:</h4>
                     <h5>Project-1:</h5>
                     <input className="projectField" type="text" placeholder="Project Name"/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link"/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link"/>
                     <br /><br />
                     <h5>Project-2:</h5>
                     <input className="projectField" type="text" placeholder="Project Name"/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link"/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link"/>
                     <br /><br />
                     <h5>Project-3:</h5>
                     <input className="projectField" type="text" placeholder="Project Name"/>
                     <br /> <br />
                     <input className="projectField" type="url" placeholder="Live Link"/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link"/>
                 </div>
               </div>
            </form>
           </div>

        </div>
    );
};

export default CreateCandidateProfile;