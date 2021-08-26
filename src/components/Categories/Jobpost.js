import React, { useState } from 'react';
import './Jobpost.css';
import { useEffect } from 'react';
import SingleJobList from '../Shared/SingleJobList/SingleJobList';
import JobListAnimation from '../Shared/Animations/JobListAnimation/JobListAnimation';

const Jobpost = () => {
  const [job, setJob] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch('https://aqueous-cove-89051.herokuapp.com/joblisting')
      .then(res => res.json())
      .then(data => {
        setJob(data)
        setSpinner(false)
      })
  }, []);

  return (
    <div className='container mt-5 pt-4'>
      <h3 className="text-center text-uppercase text-brand">Popular Jobs</h3>
      <br />
      <div className='row'>
        {
          spinner ? <JobListAnimation /> : (
            <div className="col-md-12">
              {
                job.map(singleJob => <SingleJobList data={singleJob} key={singleJob._id}></SingleJobList>)
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Jobpost;