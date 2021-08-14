import React, { useState } from 'react';
import './AddJob.css'
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

const AddJob = () => {

    const [jobData, setJobData] = useState({});

    const handleBlur = e => {
        const newData = {...jobData};
        newData[e.target.name] = e.target.value;
        setJobData(newData);
        console.log(newData);
    }

    
    const handleSubmit = e => {

        const formData = {
            name: jobData.name,
            title: jobData.title,
            location: jobData.location,
            jobType: jobData.jobType,
            description: jobData.description,
            skills: jobData.skills,
            vacancy: jobData.vacancy,
            complaint: jobData.complaint,
            deadline: jobData.deadline,
            website: jobData.website
        }

        fetch('https://aqueous-cove-89051.herokuapp.com/addJob', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data) {
                    alert("Job Posted successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })

            e.preventDefault();
    }

   
    return (
        <div className="addJobForm">
            <div className="row">
                <div className="col-md-2">
                <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <div className="form">
                <form onSubmit={handleSubmit}>
                <h4>Company Name</h4>
                <input name="name" type="text" onBlur={handleBlur} />
                <br /><br />
                <h4>Job Title</h4>
                <input name="title" type="text" onBlur={handleBlur}/>
                <br /><br />
                <h4>Job Location</h4>
                <input name="location" type="text" onBlur={handleBlur}/>
                <br /><br />
                <h4>Job Type</h4>
                <select name="jobType" type="text" onBlur={handleBlur}>
                <option value="Local">Local</option>
                <option value="Remote">Remote</option>
                <option value="Intern">Intern</option>
                <option value="Part-time">Part-time (Locally)</option>
                <option value="Full-time">Full-time (Locally)</option>
                <option value="Part-time">Part-time (Remotely)</option>
                <option value="Full-time">Full-time (Remotely)</option>
                </select>
                <br /><br />
                <div className="jobDesc">
                <h4>Job Description</h4>
                <textarea name="description" rows="5" cols="50" onBlur={handleBlur}></textarea>
                </div>
                <br /><br />
                <div className="skillSet">
                <h4>Required Skills</h4>
                <textarea name="skills" rows="5" cols="50" onBlur={handleBlur}></textarea>
                </div>
                <br /><br />
                <h4>Vacancy</h4>
                <input name="vacancy" type="number" onBlur={handleBlur}/>
                <br /><br />
                <div className="dateLine">
                    <div className="propose">
                        <h5>Date of Complaint</h5>
                        <input name="complaint" className="w-100" type="date" onBlur={handleBlur}/>
                    </div>
                    <div className="deadLine">
                    <h5>Apply By</h5>
                        <input name="deadline" className="w-100" type="date" onBlur={handleBlur}/>
                    </div>
                </div>
                <br /><br />
                <h4>Company Website</h4>
                <input name="website" type="url" onBlur={handleBlur}/>
                <br /><br />
                <button type="submit" className="btn btn-info w-50">Submit</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;