import React, { useState } from 'react';
import './Jobpost.css';
import companyImage from '../../images/companyImage.jpg'
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

          {/* <div className="col-md-12">
             <div class="cardList">
              <div class="cardList-body">
                <div className="icon">
                <i class="fab fa-free-code-camp fa-3x"></i>
                </div>
                <h4>Company Name</h4>
                <p>Junior web Dev.</p>
              </div>
              <div className="card-apply text-center">
                <h5>Apply Now</h5>
                <p>Date line: 31 Jan 2021</p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
             <div class="cardList">
              <div class="cardList-body">
                <div className="icon">
                <i class="fab fa-free-code-camp fa-3x"></i>
                </div>
                <h4>Company Name</h4>
                <p>Junior web Dev.</p>
              </div>
              <div className="card-apply text-center">
                <h5>Apply Now</h5>
                <p>Date line: 31 Jan 2021</p>
              </div>
            </div>
          </div> */}

          </div>
        </div>
    );
};

export default Jobpost;