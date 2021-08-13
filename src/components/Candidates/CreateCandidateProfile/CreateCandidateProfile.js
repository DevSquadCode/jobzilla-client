import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './CreateCandidateProfile.css'

const CreateCandidateProfile = () => {

    const [profile, setProfile] = useState({});

    const handleBlur = e => {
        const candidateData = {...profile};
        candidateData[e.target.name] = e.target.value;
        setProfile(candidateData);
        console.log(candidateData);
    }


    const handleSubmit = e => {

        const formData = {
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            filename: profile.filename,
            presentAdd: profile.presentAdd,
            permanentAdd: profile.permanentAdd,
            education: profile.education,
            degree: profile.degree,
            institution: profile.institution,
            passing: profile.passing,
            job: profile.job,
            company: profile.company,
            startDate: profile.startDate,
            endDate: profile.endDate,
            skill: profile.skill,
            experience: profile.experience,
            github: profile.github,
            linkedIn: profile.linkedIn,
            portfolio: profile.portfolio,
            project: profile.project,
            link: profile.link,
            repo: profile.repo,
        }

        fetch('https://aqueous-cove-89051.herokuapp.com/addCandidateProfile', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data) {
                    alert("Profile Created Successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })

            e.preventDefault();
    }


    return (
        <div className="formField">
            <div className="row ">
           <div className="col-md-2">
            <Sidebar></Sidebar>
           </div>

           <div className="col-md-10">
           <form onSubmit={handleSubmit}>
               <div className="row m-3 d-flex align-items-center">
                 <div className="col-md-4">
                        <h3><i class="fas fa-info-circle"></i> Basic Information:</h3>
                        <input name="name" className="name" type="text"  placeholder="Your Name" id="" required onBlur={handleBlur} />
                        <br /><br />
                        <input name="email" className="email" type="email" placeholder="Your Email"  id="" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="phone" className="number" type="number"  placeholder="Your Phone Number" id="" required onBlur={handleBlur} />
                        <br /><br />
                        <h5>Upload Your Photo:</h5>
                        <input name="file" className="file" type="file" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="presentAdd" className="presentAddress" type="text" placeholder="Present Address" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="permanentAdd" className="permanentAddress" type="text" placeholder="Permanent Address" required onBlur={handleBlur}/>
                        <br /><br />
                        <h4><i class="fas fa-school"></i> Education:</h4>
                        <input name="education" className="educationLevel" type="text" placeholder="Education Level" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="degree" className="degree" type="text" placeholder="Degree Title" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="institution" className="institution" type="text" placeholder="Institution Name" required onBlur={handleBlur}/>
                        <br /><br />
                        <input name="passing" className="passingYear" type="text" placeholder="Passing Year" required onBlur={handleBlur}/>
                        <br /><br />
                 </div>

                 <div className="col-md-4">
                     <h4><i class="fas fa-user-md"></i> Job Experience:</h4>
                     <input name="job" className="jobTitle" type="text" placeholder="Job Title" onBlur={handleBlur}/>
                     <br /><br />
                     <input name="company" className="company" type="text" placeholder="Company" onBlur={handleBlur}/>
                     <br /><br />
                     <h6>Start Date:</h6>
                     <input name="startDate" className="startDate" type="date" onBlur={handleBlur}/>
                     <h6 className="mt-2">End Date:</h6>
                     <input name="endDate" className="endDate" type="date" onBlur={handleBlur}/>
                     <br /><br />
                     <h4><i class="fab fa-battle-net"></i> Skill Set:</h4>
                     <input name="skill" className="skillName" type="text" placeholder="Skill Name" required onBlur={handleBlur}/>
                     <br /><br />
                     <input name="experience" className="experience" type="text" placeholder="Experience in Year" required onBlur={handleBlur}/>
                     <br /> <br />
                     <h4><i class="fas fa-link"></i> Important Links:</h4>
                     <input name="github" className="github" type="url" placeholder="Github" required onBlur={handleBlur} />
                     <br /><br />
                     <input name="linkedIn" className="linkedIn" type="url" placeholder="Linked In" required onBlur={handleBlur}/>
                     <br /><br />
                     <input name="portfolio" className="portfolio" type="url" placeholder="Portfolio" required onBlur={handleBlur}/>
                 </div>

                 <div className="col-md-4">
                     <h4><i class="fas fa-tasks"></i> Projects:</h4>
                     <h5>Project-1:</h5>
                     <input name="project" className="projectField" type="text" placeholder="Project Name" required onBlur={handleBlur}/>
                     <br /> <br />
                     <input name="link" className="projectField" type="url" placeholder="Live Link" required onBlur={handleBlur}/>
                     <br /><br />
                     <input name="repo" className="projectField" type="url" placeholder="Repository Link" required onBlur={handleBlur}/>
                     <br /><br />
                     <h5>Project-2:</h5>
                     <input name="project" className="projectField" type="text" placeholder="Project Name" required onBlur={handleBlur}/>
                     <br /> <br />
                     <input name="link" className="projectField" type="url" placeholder="Live Link" required onBlur={handleBlur}/>
                     <br /><br />
                     <input className="projectField" type="url" placeholder="Repository Link" required onBlur={handleBlur}/>
                     <br /><br />
                     <h5>Project-3:</h5>
                     <input name="project" className="projectField" type="text" placeholder="Project Name" required onBlur={handleBlur}/>
                     <br /> <br />
                     <input name="link" className="projectField" type="url" placeholder="Live Link" required onBlur={handleBlur}/>
                     <br /><br />
                     <input name="repo" className="projectField" type="url" placeholder="Repository Link" required onBlur={handleBlur}/>
                 </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-info">Submit</button>
               </div>
            </form>
           </div>

        </div>
        </div>
    );
};

export default CreateCandidateProfile;