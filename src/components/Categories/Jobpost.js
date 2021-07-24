import React from 'react';
import './Jobpost.css';
import companyImage from '../../images/companyImage.jpg'

const Jobpost = () => {
    return (
        <div className='container card'>
            <div className='row'>

            <h1 className="text-center">Recent Job Post</h1>

            <div className="col-md-12">
             <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icon">
                    {/* <i className="fa fa-code"></i> */}
                    <img src='#' alt="Girl in a jacket"></img>
                </div>
                <h4>Company Name</h4>
                <p>Junior web Dev.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
             <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icon">
                    <img src='#' alt="Girl in a jacket"></img>
                </div>
                <h4>Company Name</h4>
                <p>Junior web Dev.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
             <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icon">
                    <img src='#' alt="Girl in a jacket"></img>
                </div>
                <h4>Company Name</h4>
                <p>Junior web Dev.</p>
              </div>
            </div>
          </div>
            <small className='text-center'>Find More Jobs</small>
          </div>
        </div>
    );
};

export default Jobpost;