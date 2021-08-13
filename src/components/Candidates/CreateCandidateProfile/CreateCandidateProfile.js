import axios from 'axios';
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

        fetch('', {
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
    const [profile, setProfile] = useState();
    const [imageURL, setImageURL] = useState(null);


    const handleInput = (e) => {
        const profileData = { ...profile }
        profileData[e.target.name] = e.target.value;
        setProfile(profileData)
    }

    const handleImageInput = (e) => {

    }


    const handleSubmit = (e) => {
        console.log(profile);

        fetch('https://aqueous-cove-89051.herokuapp.com/createCandidateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Profile Crated');

                }
            })
        e.preventDefault()
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
                                <input onChange={handleInput} className="name" type="text" name="name" placeholder="Your Name" id="" required />
                        <br /><br />
                                <input onChange={handleInput} className="email" type="email" placeholder="Your Email" name="email" id="" required />
                        <br /><br />
                                <input onChange={handleInput} className="number" type="number" name="phoneNumber" placeholder="Your Phone Number" id="" required />
                        <br /><br />
                        <h5>Upload Your Photo:</h5>
                                <input onChange={handleImageInput} className="file" type="file" required />
                        <br /><br />
                                <input onChange={handleInput} className="presentAddress" name="presentAddress" type="text" placeholder="Present Address" required />
                        <br /><br />
                                <input onChange={handleInput} className="permanentAddress" name="permanentAddress" type="text" placeholder="Permanent Address" required />
                        <br /><br />
                        <h4><i class="fas fa-school"></i> Education:</h4>
                                <input onChange={handleInput} className="educationLevel" name="educationLevel" type="text" placeholder="Education Level" required />
                        <br /><br />
                                <input onChange={handleInput} className="degree" name="degree" type="text" placeholder="Degree Title" required />
                        <br /><br />
                                <input onChange={handleInput} className="institution" name="institution" type="text" placeholder="Institution Name" required />
                        <br /><br />
                                <input onChange={handleInput} className="passingYear" name="passingYear" type="text" placeholder="Passing Year" required />
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
                                <input onChange={handleInput} className="jobTitle" name="jobTitle" type="text" placeholder="Job Title" />
                     <br /><br />
                                <input onChange={handleInput} className="company" name="company" type="text" placeholder="Company" />
                     <br /><br />
                     <h6>Start Date:</h6>
                                <input onChange={handleInput} className="startDate" name="startDate" type="date" />
                     <h6 className="mt-2">End Date:</h6>
                                <input onChange={handleInput} className="endDate" name="endDate" type="date" />
                     <br /><br />
                     <h4><i class="fab fa-battle-net"></i> Skill Set:</h4>
                                <input onChange={handleInput} className="skillName" name="skillSet" type="text" placeholder="Skill Name" required />
                                {/* <br /><br /> */}
                                {/* <input onChange={handleInput} className="experience" type="text" placeholder="Experience in Year" required /> */}
                     <br /> <br />
                     <h4><i class="fas fa-link"></i> Important Links:</h4>
                                <input onChange={handleInput} className="github" name="github" type="url" placeholder="Github" required />
                     <br /><br />
                                <input onChange={handleInput} className="linkedIn" name="linkedIn" type="url" placeholder="Linked In" required />
                     <br /><br />
                                <input onChange={handleInput} className="portfolio" name="portfolio" type="url" placeholder="Portfolio" required />
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
                                <input onChange={handleInput} className="projectField" name='project1Title' type="text" placeholder="Project Name" required />
                     <br /> <br />
                                <input onChange={handleInput} className="projectField" name='project1Link' type="url" placeholder="Live Link" required />
                     <br /><br />
                                <input onChange={handleInput} className="projectField" name='project1Code' type="url" placeholder="Repository Link" required />
                     <br /><br />
                     <h5>Project-2:</h5>
                                <input onChange={handleInput} className="projectField" name='project2Title' type="text" placeholder="Project Name" />
                     <br /> <br />
                                <input onChange={handleInput} className="projectField" name='project2Link' type="url" placeholder="Live Link" />
                     <br /><br />
                                <input onChange={handleInput} className="projectField" name='project2Code' type="url" placeholder="Repository Link" />
                     <br /><br />
                     <h5>Project-3:</h5>
                                <input onChange={handleInput} className="projectField" name='project3Title' type="text" placeholder="Project Name" />
                     <br /> <br />
                                <input onChange={handleInput} className="projectField" name='project3Link' type="url" placeholder="Live Link" />
                     <br /><br />
                                <input onChange={handleInput} className="projectField" name='project3code' type="url" placeholder="Repository Link" />
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
