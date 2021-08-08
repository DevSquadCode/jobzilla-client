import React, { useState } from 'react';
import './AddJob.css'

const AddJob = () => {

    const [jobData, setJobData] = useState({});

    const handleBlur = e => {
        const newData = {...jobData};
        newData[e.target.name] = e.target.value;
        setJobData(newData);
    }

   
    return (
        <div className="addJobForm">
            <div className="row w-100">
                <div className="col-md-2">

                </div>
                <div className="col-md-10">
                <div className="form">
                <form action="">
                <h4>Company Name</h4>
                <input type="text" onBlur={handleBlur} />
                <br /><br />
                <h4>Job Title</h4>
                <input type="text" onBlur={handleBlur}/>
                <br /><br />
                <h4>Job Type</h4>
                <select name="jobType">
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
                <textarea name="jobDescription" rows="5" cols="50" onBlur={handleBlur}></textarea>
                </div>
                <br /><br />
                <div className="skillSet">
                <h4>Required Skills</h4>
                <textarea name="requiredSkills" rows="5" cols="50" onBlur={handleBlur}></textarea>
                </div>
                <br /><br />
                <h4>Vacancy</h4>
                <input type="text" onBlur={handleBlur}/>
                <br /><br />
                <div className="dateLine">
                    <div className="propose">
                        <h5>Date of Complaint</h5>
                        <input className="w-100" type="date" onBlur={handleBlur}/>
                    </div>
                    <div className="deadLine">
                    <h5>Apply By</h5>
                        <input className="w-100" type="date" onBlur={handleBlur}/>
                    </div>
                </div>
                <br /><br />
                <h4>Company Website</h4>
                <input type="url" onBlur={handleBlur}/>
                </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;