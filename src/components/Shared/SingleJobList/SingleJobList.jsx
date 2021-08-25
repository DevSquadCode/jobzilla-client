import React from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import { IoLocationOutline } from 'react-icons/io5';
import { FaMoneyBillWave, FaHandPointer, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../images/company-logo.png';



const SingleJobList = ({data}) => {
    const {title, name, deadline, jobType, location} = data;


    return (
        <>
            <div className='container border shadow-sm py-3 mb-5'>
              <div className="row">
                <div className="col-7 col-md-8 py-3">
                  <h3 className='text-brand'>{title}</h3>
                  <h5 className='text-secondary'>{name}</h5>
                </div>
                <div className="col-5 col-md-4 d-flex justify-content-end align-items-center">
                  <img src={logo} className='w-25' alt="company logo" />
                </div>
              </div>
              <div className="py-4">
                    <h6 className='text-capitalize'><IoLocationOutline className='inline'/> {location}</h6>
              </div>
              <div className="row">
                <div className="col-4 col-md-3">
                  <h6 className='text-secondary'><VscDebugStart className='inline border rounded-circle p-1 fs-4'/> Start Date</h6>
                  <p>Immediately</p>
                </div>
                <div className="col-4 col-md-3">
                  <h6 className='text-secondary'><FaMoneyBillWave className='inline border rounded-circle p-1 fs-4'/> Salary</h6>
                  <p>20k BDT</p>
                </div>
                <div className="col-4 col-md-3">
                  <h6 className='text-secondary'><FaHandPointer className='inline border rounded-circle p-1 fs-4'/> Apply By</h6>
                  <p>{deadline}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className='text-capitalize bg-light px-3 py-2 rounded'>{jobType}</p>
                <Link to='/jobList'>
                  <button className="btn-brand-outline">View Details <FaChevronRight className='inline p-1 fs-5'/></button>
                </Link>
              </div>
            </div>
        </>
    );
};

export default SingleJobList;