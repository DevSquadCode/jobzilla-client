import React from 'react';
import './AddJob.css'

const addJob = () => {
    return (
        <div className="addJobForm">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-10">
                <div className="form">
                <form action="">
                <h4>Company Name</h4>
                <input type="text" />
                <h4>Job Title</h4>
                <input type="text" />
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
                <div className="jobDesc">
                <h4>Job Description</h4>
                <textarea name="jobDescription"></textarea>
                </div>
                <div className="skillSet">
                <h4>Required Skills</h4>
                <textarea name="requiredSkills"></textarea>
                </div>
                <h4>Vacancy</h4>
                <input type="text" />
                <div className="dateLine">
                    <div className="propose">
                        <h5>Date of Complaint</h5>
                        <input type="date" />
                    </div>
                    <div className="deadLine">
                    <h5>Apply By</h5>
                        <input type="date" />
                    </div>
                </div>
                <h4>Company Website</h4>
                <input type="url" />
            </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default addJob;