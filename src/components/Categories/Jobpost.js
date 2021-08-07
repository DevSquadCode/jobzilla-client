import React, { useState } from 'react';
import './Jobpost.css';
import SingleJob from './SingleJob';
import { useEffect } from 'react';

const Jobpost = () => {

  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-cove-89051.herokuapp.com/joblisting')
        .then(res => res.json())
        .then(data => setJob(data)) 
}, [])
    return (
        <div className='container mt-5'>
          <h1 className="text-center">Job Listing</h1>
          <br />
            <div className='row'>

            <div className="col-md-12">
             {
               job.map(singleJob => <SingleJob singleJob={singleJob} key={singleJob._id}></SingleJob>)
             }
            </div>

          </div>
        </div>
    );
};

export default Jobpost;