import React, { useState } from 'react';
import './Jobpost.css';
import { useEffect } from 'react';
import SingleJobList from '../Shared/SingleJobList/SingleJobList';

const Jobpost = () => {

  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-cove-89051.herokuapp.com/joblisting')
        .then(res => res.json())
        .then(data => setJob(data)) 
}, [])
    return (
        <div className='container mt-5 pt-4'>
          <h3 className="text-center text-uppercase text-brand">Popular Jobs</h3>
          <br />
            <div className='row'>

            <div className="col-md-12">
             {
               job.map(singleJob => <SingleJobList data={singleJob} key={singleJob._id}></SingleJobList>)
             }
            </div>

          </div>
        </div>
    );
};

export default Jobpost;